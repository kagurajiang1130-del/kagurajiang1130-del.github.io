import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

function loadTypeScript(source, filename, requireFn = () => {
  throw new Error(`Unexpected import while loading ${filename}`);
}) {
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText;
  const moduleRecord = { exports: {} };
  const context = vm.createContext({
    module: moduleRecord,
    exports: moduleRecord.exports,
    require: requireFn,
    console,
  });
  new vm.Script(output, { filename }).runInContext(context);
  return moduleRecord.exports;
}

const casesSource = await readFile(new URL("../app/cases.ts", import.meta.url), "utf8");
const casesModule = loadTypeScript(casesSource, "cases.ts");
const contentSource = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
const contentModule = loadTypeScript(contentSource, "content.ts", (specifier) => {
  if (specifier === "./cases") return casesModule;
  throw new Error(`Unexpected import: ${specifier}`);
});

const excludedKeys = new Set([
  "href",
  "email",
  "htmlLang",
  "short",
  "publicUrl",
  "defaultLocale",
  "contactFormAction",
  "allowIndexing",
]);

function collectStrings(value, output, key = "") {
  if (typeof value === "string") {
    if (!excludedKeys.has(key)) output.push(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, output, key));
    return;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([childKey, child]) => {
      collectStrings(child, output, childKey);
    });
  }
}

const patterns = {
  contrast:
    /不是[^。！？\n]{1,32}(?:而是|，是)|(?:不只|不仅|并非)[^。！？\n]{1,40}(?:还|也|而是)|(?:ではなく|だけでなく)[^。！？\n]{0,40}(?:です|ます|ではなく)|not\s+(?:just|only|merely)[^.\n]{1,70}but|it(?:'|’)s\s+not[^.\n]{1,60}it(?:'|’)s/giu,
  inflated:
    /赋能|助力|一站式|闭环|无缝|深度理解|打造|解锁|卓越|领先|価値を最大化|一気通貫|革新的|寄り添|seamless|robust|empower|unlock|leverage|pivotal|tapestry|testament|game-changing|future-ready|cutting-edge/giu,
  staged:
    /真正的|本质上|核心在于|值得被|the real question|at its core|the heart of|本質は|真に/giu,
  dash: /[—–]/gu,
  oldBrand: /WANSLAN|万澜/giu,
  guarantee: /保証|保证|guarantee|guaranteed|100%|必ず|承诺|promise/giu,
};

function auditLocale(locale, copy, cases) {
  const strings = [];
  collectStrings(copy, strings);
  collectStrings(cases, strings);
  const text = strings.join("\n");
  const counts = Object.fromEntries(
    Object.entries(patterns).map(([name, pattern]) => [
      name,
      [...text.matchAll(pattern)].length,
    ]),
  );
  const sentences = text
    .split(/[。！？.!?]+|\n+/u)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const longSentences = sentences.filter((sentence) => {
    const latinWords = sentence.match(/[A-Za-z][A-Za-z'-]*/g)?.length ?? 0;
    const cjkChars = sentence.match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu)?.length ?? 0;
    return latinWords > 40 || cjkChars > 62;
  }).length;
  const aiTellWeight =
    counts.contrast * 2 +
    counts.inflated * 1.5 +
    counts.staged * 1.5 +
    counts.dash * 0.5 +
    longSentences * 0.6;
  const aiProxyRate = Math.min(
    100,
    Math.round((aiTellWeight / Math.max(sentences.length, 1)) * 100),
  );
  const qualityScore = Math.max(
    0,
    Math.round(
      100 -
        counts.oldBrand * 25 -
        counts.contrast * 8 -
        counts.inflated * 5 -
        counts.staged * 5 -
        counts.dash * 2 -
        longSentences * 2,
    ),
  );

  return {
    locale,
    brand: copy.brand.name,
    serviceCount: copy.services.length,
    pricingCount: copy.pricing.length,
    faqCount: copy.faqs.length,
    caseCount: cases.length,
    sentenceCount: sentences.length,
    aiSignals: counts,
    longSentences,
    aiProxyRate,
    qualityScore,
  };
}

const locales = ["ja", "en", "zh"];
const results = locales.map((locale) =>
  auditLocale(
    locale,
    contentModule.siteContent[locale],
    casesModule.caseStudies[locale],
  ),
);
const structureConsistent = new Set(
  results.map(({ serviceCount, pricingCount, faqCount, caseCount }) =>
    [serviceCount, pricingCount, faqCount, caseCount].join(":"),
  ),
).size === 1;
const brandConsistent = results.every(
  ({ brand, aiSignals }) => brand === "澜顷" && aiSignals.oldBrand === 0,
);
const score = Math.round(
  results.reduce((total, result) => total + result.qualityScore, 0) /
    results.length,
);

const report = {
  generatedAt: new Date().toISOString(),
  method:
    "Heuristic proxy for AI-writing patterns, not a detector probability. Lower aiProxyRate and higher qualityScore are better.",
  score,
  structureConsistent,
  brandConsistent,
  locales: results,
};

console.log(JSON.stringify(report, null, 2));

if (
  process.argv.includes("--strict") &&
  (!structureConsistent || !brandConsistent || score < 85)
) {
  process.exitCode = 1;
}
