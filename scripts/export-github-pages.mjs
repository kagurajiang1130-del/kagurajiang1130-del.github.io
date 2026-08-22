import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientDirectory = join(projectRoot, "dist", "client");
const workerEntry = join(projectRoot, "dist", "server", "index.js");
const outputDirectory = resolve(
  projectRoot,
  process.argv[2] || join("out", "github-pages"),
);

const outputRelative = relative(projectRoot, outputDirectory);
if (outputRelative.startsWith("..") || outputRelative === "") {
  throw new Error("Static export output must stay inside the project directory.");
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(workerEntry);
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://kagurajiang1130-del.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Unable to render the home page: HTTP ${response.status}`);
}

const html = await response.text();
if (!html.includes("language-switcher") || !html.includes("page-progress")) {
  throw new Error("Rendered page is missing the multilingual or motion UI.");
}

const blocksIndexing = /name="robots"\s+content="noindex, nofollow"/i.test(html);
const robotsPolicy = blocksIndexing
  ? "User-agent: *\nDisallow: /\n"
  : "User-agent: *\nAllow: /\n";

await Promise.all([
  writeFile(join(outputDirectory, "index.html"), html, "utf8"),
  writeFile(join(outputDirectory, "404.html"), html, "utf8"),
  writeFile(join(outputDirectory, ".nojekyll"), "", "utf8"),
  writeFile(join(outputDirectory, "robots.txt"), robotsPolicy, "utf8"),
]);

console.log(`GitHub Pages export created at ${outputDirectory}`);
