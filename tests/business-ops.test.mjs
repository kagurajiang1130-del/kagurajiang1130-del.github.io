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

test("keeps hosting and long-term completion claims evidence-bounded", async () => {
  const [hosting, audit, index, readme] = await Promise.all([
    read("business-ops/16-免费托管与中国访问决策记录.md"),
    read("business-ops/17-长期目标完成度与证据矩阵.md"),
    read("business-ops/00-经营系统总览.md"),
    read("README.md"),
  ]);

  assert.match(hosting, /GitHub Pages 作为免费、公开、HTTPS 的基础入口/);
  assert.match(hosting, /不能外推为中国大陆真实网络证据/);
  assert.match(hosting, /Enterprise 客户的单独订阅/);
  assert.match(hosting, /确认公开发布新版/);
  assert.doesNotMatch(hosting, /(?:能够|可以|已经|确认|承诺).{0,8}保证.{0,10}中国大陆|中国大陆.{0,10}(?:保证可用|稳定可用已获证明)/);

  assert.match(audit, /长期目标保持 \*\*ACTIVE \/ 未完成\*\*/);
  assert.match(audit, /当前可计入可信预测的服务数为 0/);
  assert.match(audit, /真实访谈数为 0/);
  assert.match(audit, /100,000 元缺口仍全部存在/);
  assert.match(audit, /任何一项都不能用内部模拟、测试通过或代码存在来代替/);

  assert.match(index, /16-免费托管与中国访问决策记录/);
  assert.match(index, /17-长期目标完成度与证据矩阵/);
  assert.match(readme, /澜顷_经营与利润管理台账_v0\.4\.xlsx/);
  assert.doesNotMatch(readme, /台账为 `[^`]*v0\.3\.xlsx`/);
});

test("keeps operational recording instructions on the v0.4 workbook", async () => {
  const [templatePack, leadResearch] = await Promise.all([
    read("business-ops/05-客户访谈报价交付模板包.md"),
    read("business-ops/06-福冈首批客户研究清单.md"),
  ]);

  assert.match(templatePack, /澜顷_经营与利润管理台账_v0\.4\.xlsx/);
  assert.match(leadResearch, /澜顷_经营与利润管理台账_v0\.4\.xlsx/);
  assert.doesNotMatch(templatePack, /澜顷_经营与利润管理台账_v0\.3\.xlsx/);
  assert.doesNotMatch(leadResearch, /澜顷_经营与利润管理台账_v0\.3\.xlsx/);
});

test("keeps first-wave outreach on rechecked business-safe channels", async () => {
  const [leadResearch, outreach, leadCsv] = await Promise.all([
    read("business-ops/06-福冈首批客户研究清单.md"),
    read("business-ops/07-首批访谈外联与回复处理草稿.md"),
    read("business-ops/福冈首批客户研究清单.csv"),
  ]);

  assert.match(leadResearch, /微型巴士及以上团体需预约/);
  assert.match(leadResearch, /info@yame-tea\.jp/);
  assert.match(leadResearch, /仅面向茶叶销售与批发的“业务用咨询”表单不用于本项目外联/);
  assert.match(outreach, /确认进入第一轮逐封发送前复核：A-03、B-08/);
  assert.match(outreach, /B-08 株式会社源右衛門窯/);
  assert.match(outreach, /B-09 株式会社マルヒロ／HIROPPA/);
  assert.match(outreach, /不使用仅面向茶叶销售与批发的“业务用咨询”表单/);
  assert.doesNotMatch(outreach, /确认发送第一轮访谈邀请：A-01、A-02、A-03/);
  assert.match(leadCsv, /A-03,[^\n]*info@yame-tea\.jp/);
});

test("keeps the free contact path consented, private, and cost bounded", async () => {
  const [decision, index] = await Promise.all([
    read("business-ops/18-免费联系入口与表单启用决策.md"),
    read("business-ops/00-经营系统总览.md"),
  ]);

  assert.match(decision, /网站联系表单保持禁用/);
  assert.match(decision, /先启用 `mailto:` 邮箱入口/);
  assert.match(decision, /没有任何候选平台的官方证据证明其表单端点在中国大陆/);
  assert.match(decision, /不收集密码、支付信息、身份证件、健康信息或游客个人资料/);
  assert.match(decision, /未经批准不自动升级或产生超额费用/);
  assert.match(decision, /siteSettings\.contactFormAction/);
  assert.match(index, /18-免费联系入口与表单启用决策/);
});

test("keeps the O-01 five-man-yen price behind human and customer evidence", async () => {
  const [activation, index, content, leads, leadCsv] = await Promise.all([
    read("business-ops/19-O01五万日元试行价激活路径.md"),
    read("business-ops/00-经营系统总览.md"),
    read("app/content.ts"),
    read("business-ops/06-福冈首批客户研究清单.md"),
    read("business-ops/福冈首批客户研究清单.csv"),
  ]);

  assert.match(activation, /当前只是内部压力测试价，不是可报价价，也不是网站公开价/);
  assert.match(activation, /两轮生产人工时间都不超过 270 分钟/);
  assert.match(activation, /至少完成 10 次真实目标客户访谈，同一具体问题至少出现 3 次/);
  assert.match(activation, /至少完成 2 个同范围真实付费测试/);
  assert.match(activation, /另一名真人负责模拟店铺事实负责人/);
  assert.match(activation, /现金贡献率不低于 65%，经济贡献率不低于 50%/);
  assert.match(activation, /不得更新公网价格/);
  assert.match(index, /19-O01五万日元试行价激活路径/);

  assert.match(content, /Basic｜小規模診断（検証中）/);
  assert.match(content, /Pricing in validation/);
  assert.match(content, /价格验证中/);
  assert.doesNotMatch(content, /50,000円/);

  for (const id of ["A-05", "A-06", "A-07", "A-08", "B-06", "B-07", "B-08", "B-09"]) {
    assert.match(leads, new RegExp(`### ${id}`));
    assert.match(leadCsv, new RegExp(`^${id},`, "m"));
  }
  assert.match(leads, /先发最多 2 封，至少观察 2 个工作日/);
  assert.match(leads, /若上次复核超过 30 天/);
});

test("keeps strict outreach tiers and the first two contacts gated", async () => {
  const [queue, outreach, index, readme] = await Promise.all([
    read("business-ops/20-外联渠道严格分级与发送队列.md"),
    read("business-ops/07-首批访谈外联与回复处理草稿.md"),
    read("business-ops/00-经营系统总览.md"),
    read("README.md"),
  ]);

  assert.match(queue, /S 级 3 个、A 级 5 个、BLOCK 11 个/);
  assert.match(queue, /第一批：最多 2 封/);
  assert.match(queue, /A-03 牛島製茶/);
  assert.match(queue, /B-08 株式会社源右衛門窯/);
  assert.match(queue, /任一项为空，发送数继续为 0/);
  assert.match(queue, /不能虚构/);
  assert.match(outreach, /可用于B-08表单的真实电话号码/);
  assert.match(index, /20-外联渠道严格分级与发送队列/);
  assert.match(index, /O01_真人计时与验收表_v1\.docx/);
  assert.match(readme, /O01_真人计时与验收表_v1\.docx/);
});

test("ships the editable O-01 Word timing form", async () => {
  const form = await readFile(
    new URL("../O01_真人计时与验收表_v1.docx", import.meta.url),
  );

  assert.equal(form.subarray(0, 2).toString("ascii"), "PK");
  assert.ok(form.length > 40_000);
});

test("keeps unvalidated services unavailable and ties pricing to the current hard gate", async () => {
  const [content, page, serviceLogic, control, index, workflow, release] =
    await Promise.all([
      read("app/content.ts"),
      read("app/page.tsx"),
      read("business-ops/04-服务测试卡与报价逻辑.md"),
      read("business-ops/21-网站上线与首轮外联启用总控表.md"),
      read("business-ops/00-经营系统总览.md"),
      read(".github/workflows/github-pages.yml"),
      read("release/publication.json"),
    ]);

  assert.equal((content.match(/available: false/g) ?? []).length, 24);
  assert.doesNotMatch(content, /featured: true/);
  assert.doesNotMatch(content, /個別見積|Custom quote|单独报价/);
  assert.match(content, /対応範囲を検証中/);
  assert.match(content, /Scope in validation/);
  assert.match(content, /执行范围验证中/);
  assert.match(page, /service-unavailable/);

  assert.match(serviceLogic, /19-O01五万日元试行价激活路径\.md.*权威来源/);
  assert.match(serviceLogic, /至少完成10次真实目标客户访谈/);
  assert.match(serviceLogic, /同一个具体问题至少重复出现3次/);
  assert.match(control, /当前审计应报告 `readyToPublish: false`/);
  assert.match(control, /第一批 A-03、B-08/);
  assert.match(index, /21-网站上线与首轮外联启用总控表/);
  assert.match(workflow, /npm run audit:publication:strict/);
  assert.match(release, /"approved": false/);
  assert.match(release, /确认公开发布新版/);
});
