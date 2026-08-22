import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readExport = (name) =>
  readFile(new URL(`../out/github-pages/${name}`, import.meta.url), "utf8");

test("exports a complete placeholder-safe GitHub Pages build", async () => {
  const [index, fallback, robots, noJekyll] = await Promise.all([
    readExport("index.html"),
    readExport("404.html"),
    readExport("robots.txt"),
    readExport(".nojekyll"),
  ]);

  assert.match(index, /name="robots" content="noindex, nofollow"/i);
  assert.match(index, /class="language-switcher"/i);
  assert.match(index, /class="footer-pattern"/i);
  assert.equal(fallback, index);
  assert.equal(robots, "User-agent: *\nDisallow: /\n");
  assert.equal(noJekyll, "");
});
