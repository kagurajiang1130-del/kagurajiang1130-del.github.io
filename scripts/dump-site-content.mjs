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
  const context = vm.createContext({ module: moduleRecord, exports: moduleRecord.exports, require: requireFn, console });
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

process.stdout.write(JSON.stringify({
  siteSettings: contentModule.siteSettings,
  siteContent: contentModule.siteContent,
}, null, 2));
