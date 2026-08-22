import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the multilingual brand site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ja">/i);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.match(html, /\[BRAND NAME\]/);
  assert.match(html, />JP</);
  assert.match(html, />EN</);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps content centralized and motion locally hosted", async () => {
  const [page, content, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(content, /Record<Locale, SiteCopy>/);
  assert.match(content, /siteSettings/);
  assert.match(content, /allowIndexing:\s*false/);
  assert.match(content, /ja:\s*\{/);
  assert.match(content, /en:\s*\{/);
  assert.match(content, /zh:\s*\{/);
  assert.match(page, /--scene-title-x/);
  assert.match(page, /--scene-runner-x/);
  assert.match(page, /--scene-stamp-x/);
  assert.match(page, /section-runway-track/);
  assert.match(page, /requestAnimationFrame/);
  assert.match(page, /prefers-reduced-motion/);
  assert.match(page, /const \[localeReady, setLocaleReady\] = useState\(false\)/);
  assert.match(page, /setLocaleReady\(true\)/);
  assert.match(page, /if \(!localeReady\) return/);
  assert.match(css, /scroll-snap-type:\s*y proximity/);
  assert.match(css, /\.title-runner/);
  assert.match(css, /\.section-runway-track/);
  assert.match(css, /content:\s*attr\(data-scene\)/);
  assert.match(css, /\.page-progress/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(css, /@import\s+url|url\(\s*["']?https?:\/\//i);
  assert.match(layout, /metadataBase:\s*new URL\(siteSettings\.publicUrl\)/);
  assert.match(layout, /robots:/);
});
