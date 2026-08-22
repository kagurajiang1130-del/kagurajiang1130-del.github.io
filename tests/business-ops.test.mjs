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

test("keeps the first O-01 and O-02 run auditable without turning it into proof", async () => {
  const [o1, o2Initial, o2Final, index] = await Promise.all([
    read("business-ops/12-SIM-20260822-01-O01盲测结果.md"),
    read("business-ops/13-SIM-20260822-01-O02复核前初稿.md"),
    read("business-ops/14-SIM-20260822-01-O02外部复核前候选稿与硬门审计.md"),
    read("business-ops/00-经营系统总览.md"),
  ]);

  for (const document of [o1, o2Initial, o2Final]) {
    assert.match(document, /^# SIM-20260822-01/m);
    assert.match(document, /不对应真实商家、客户、项目或用户测试/);
    assert.match(document, /不得作为案例或能力证明/);
  }

  assert.match(o1, /SET-A 明确给出 0 个优先问题与暂不建议购买/);
  assert.match(o1, /证据不足，O-01 继续暂停报价/);
  assert.match(o1, /不能替代创始人工时/);
  assert.match(o1, /\| O-01 经济模型字段和依据完整 \| 未满足 \|/);
  assert.match(o1, /\| 真实需求和付款意愿 \| 未证明 \|/);

  assert.match(o2Initial, /日本交通系 IC 卡/);
  assert.match(o2Initial, /不计入 C6/);
  assert.match(o2Final, /当前不得恢复具体方式清单/);
  assert.match(o2Final, /自拍杆规则存在书面材料与受控口头答复冲突/);
  assert.match(o2Final, /同一外部复核者按 C6 六项分别评分 \| 未满足/);
  assert.match(o2Final, /合格外部简体中文复核者书面审阅 \| 未满足/);
  assert.match(o2Final, /至少 2 份同范围有效书面报价 \| 未满足/);
  assert.match(o2Final, /证据不足，O-02 继续暂停报价与发布/);
  assert.match(o2Final, /AI 内部诊断不能满足/);
  assert.match(o2Final, /询价许可不等于 NDA、材料发送、采购或付款许可/);
  assert.match(o2Final, /没有询价、材料发送、NDA、委托或付款义务/);
  assert.doesNotMatch(o2Final, /可使用现金、Visa、Mastercard/);
  assert.doesNotMatch(o2Final, /不得使用三脚架、自拍杆/);

  const visitorDraftStart = o2Final.indexOf("### 【模拟店名，不得发布】");
  const visitorDraftEnd = o2Final.indexOf("### 编辑层发布阻断", visitorDraftStart);
  assert.notEqual(visitorDraftStart, -1);
  assert.notEqual(visitorDraftEnd, -1);
  const visitorDraft = o2Final.slice(visitorDraftStart, visitorDraftEnd);
  assert.doesNotMatch(visitorDraft, /自拍杆/);
  assert.match(visitorDraft, /拍摄其他参加者、工作人员面部或其他参加者的作品前/);
  assert.doesNotMatch(visitorDraft, /拍摄其他参加者或工作人员时/);

  const shortTipsStart = o2Final.indexOf("## 店内短提示");
  const shortTipsEnd = o2Final.indexOf("## 初稿到候选稿", shortTipsStart);
  assert.notEqual(shortTipsStart, -1);
  assert.notEqual(shortTipsEnd, -1);
  const shortTips = o2Final.slice(shortTipsStart, shortTipsEnd);
  assert.doesNotMatch(shortTips, /自拍杆/);

  assert.match(index, /12-SIM-20260822-01-O01盲测结果/);
  assert.match(index, /13-SIM-20260822-01-O02复核前初稿/);
  assert.match(index, /14-SIM-20260822-01-O02外部复核前候选稿与硬门审计/);
});

test("keeps the year-end profit bridge evidence-led and capacity-gated", async () => {
  const [bridge, serviceLogic, index] = await Promise.all([
    read("business-ops/15-2026年末10万元净利润目标桥接与每周控制.md"),
    read("business-ops/04-服务测试卡与报价逻辑.md"),
    read("business-ops/00-经营系统总览.md"),
  ]);

  assert.match(bridge, /当前\*{0,2}可信基准预测为 0 元/);
  assert.match(bridge, /至少所需净服务回款[\s\S]*153,847 元/);
  assert.match(bridge, /每周净服务回款要求[\s\S]*8,098 元\/周/);
  assert.match(bridge, /65%不是行业事实/);
  assert.match(bridge, /订单组合只是算术压力测试|订单组合压力测试/);
  assert.match(bridge, /暂停报价、暂停出售、待验证或后置服务不得进入基准预测/);
  assert.match(bridge, /已验证 \+ 硬门已批准 \+ 证据记录非空/);
  assert.match(bridge, /每条报价必须填写服务编号/);
  assert.match(bridge, /剩余周数 × 每周可投入工时 × 可交付比例/);
  assert.match(bridge, /日期到达不自动升级/);
  assert.match(bridge, /成本状态.*有书面依据为0.*已填真实估算/);
  assert.match(bridge, /询价许可不等于 NDA、材料发送、采购或付款许可/);
  assert.match(bridge, /调整目标、范围或时间，不调整事实/);
  assert.doesNotMatch(bridge, /保证.{0,12}10万元|保底.{0,12}10万元/);

  assert.match(serviceLogic, /O-01和O-02两行都不能被当作可报价结果/);
  assert.match(serviceLogic, /O-04 单平台持续内容运营/);
  assert.match(index, /15-2026年末10万元净利润目标桥接与每周控制/);
  assert.match(index, /澜顷_经营与利润管理台账_v0\.4\.xlsx/);
});
