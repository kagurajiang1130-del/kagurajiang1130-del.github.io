import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const sectionBodyLength = (source, heading) => {
  const headingIndex = source.indexOf(heading);
  assert.notEqual(headingIndex, -1, `missing heading: ${heading}`);

  const bodyStart = source.indexOf("\n", headingIndex) + 1;
  const nextSubheading = source.indexOf("\n### ", bodyStart);
  const nextHeading = source.indexOf("\n## ", bodyStart);
  const candidates = [nextSubheading, nextHeading].filter((value) => value >= 0);
  const bodyEnd = Math.min(...candidates);

  return [...source.slice(bodyStart, bodyEnd).replace(/\s/g, "")].length;
};

test("locks the simulation source scope and character counts", async () => {
  const source = await read("business-ops/09-O01-O02内部演练日文素材.md");
  const expected = new Map([
    ["### 体験について", 171],
    ["### 営業時間と予約", 318],
    ["### 来店", 254],
    ["### 料金と支払い", 213],
    ["### 写真と動画", 203],
    ["### 変更とキャンセル", 280],
    ["### 店内でのお願い", 197],
  ]);

  const actual = new Map(
    [...expected].map(([heading]) => [heading, sectionBodyLength(source, heading)]),
  );

  assert.deepEqual(actual, expected);
  assert.equal([...actual.values()].reduce((sum, value) => sum + value, 0), 1636);

  const o2Headings = [
    "### 営業時間と予約",
    "### 来店",
    "### 料金と支払い",
    "### 写真と動画",
    "### 変更とキャンセル",
  ];
  assert.equal(
    o2Headings.reduce((sum, heading) => sum + actual.get(heading), 0),
    1268,
  );
  assert.match(source, /\*\*1,636\*\*/);
  assert.match(source, /共1,268个正文非空白字符/);
});

test("keeps simulation, pricing, privacy, and authorization gates closed", async () => {
  const [pack, source, manager, setB, gitignore] = await Promise.all([
    read("business-ops/08-O01-O02内部验证执行包.md"),
    read("business-ops/09-O01-O02内部演练日文素材.md"),
    read("business-ops/10-O01-O02模拟负责人受控脚本.md"),
    read("business-ops/11-O01内部演练匿名素材B.md"),
    read(".gitignore"),
  ]);

  for (const document of [pack, source, manager, setB]) {
    assert.match(document, /内部模拟|模拟数据/);
    assert.match(document, /不得作为案例|不是案例/);
  }

  assert.match(pack, /全流程全部可归属人工工时≤720分钟/);
  assert.match(pack, /max\(实测工时, 12小时\)/);
  assert.match(pack, /询价批准不等于委托/);
  assert.match(pack, /随机命名为SET-A和SET-B/);
  assert.match(pack, /当前固定能力模式：`\[逐件完整外部复核必需 \/ 证据不足\]`/);
  assert.match(gitignore, /^\/private-evidence\/$/m);

  assert.doesNotMatch(pack, /11-O01内部演练负对照素材/);
  assert.doesNotMatch(setB, /负对照|合格结论|暂不建议购买/);
});
