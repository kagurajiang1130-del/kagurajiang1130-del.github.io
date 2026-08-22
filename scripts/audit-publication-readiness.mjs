import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const requiredApprovalPhrase = "确认公开发布新版";
const requiredContentParts = Array.from({ length: 10 }, (_, index) =>
  String(index + 1).padStart(2, "0"),
);

const read = (path) => readFile(resolve(projectRoot, path), "utf8");
const count = (source, pattern) => [...source.matchAll(pattern)].length;

const [publicationSource, content, cases, page] = await Promise.all([
  read("release/publication.json"),
  read("app/content.ts"),
  read("app/cases.ts"),
  read("app/page.tsx"),
]);

const publication = JSON.parse(publicationSource);
const publicCopy = `${content}\n${cases}`;
const placeholderPatterns = [
  /\[BRAND NAME\]/g,
  /\[CONTACT EMAIL\]/g,
  /\[[^\]\r\n]*(?:後ほど追加|will be added later|将在后续补充|待定|填写|画像|image|图片|写真|photo|照片|ロゴ|logo|Logo|回答|説明|说明|クライアント|Client|客户|業種|Industry|行业|提供サービス|Services provided|项目结果|プロジェクト成果)[^\]\r\n]*\]/gi,
];
const visitorPlaceholderCount = placeholderPatterns.reduce(
  (total, pattern) => total + count(publicCopy, pattern),
  0,
);
const approvedParts = new Set(publication.approvedContentParts ?? []);
const missingContentParts = requiredContentParts.filter(
  (part) => !approvedParts.has(part),
);

const checks = [
  {
    id: "explicit_publication_approval",
    pass:
      publication.approved === true &&
      publication.status === "approved" &&
      publication.approvalPhrase === requiredApprovalPhrase &&
      typeof publication.approvedAt === "string" &&
      !Number.isNaN(Date.parse(publication.approvedAt)),
    detail: "需要记录用户的精确发布口令、批准状态和有效时间。",
  },
  {
    id: "all_content_parts_approved",
    pass: missingContentParts.length === 0,
    detail:
      missingContentParts.length === 0
        ? "Part 01-10 均已批准。"
        : `尚未批准：${missingContentParts.join(", ")}`,
  },
  {
    id: "brand_name_finalized",
    pass: !content.includes("[BRAND NAME]"),
    detail: "品牌名不能继续显示原始占位符。",
  },
  {
    id: "contact_email_finalized",
    pass: !content.includes("[CONTACT EMAIL]"),
    detail: "至少需要一个可以真实收信的对外邮箱。",
  },
  {
    id: "visitor_copy_has_no_raw_placeholders",
    pass: visitorPlaceholderCount === 0,
    detail: `当前访客可见原始占位符命中数：${visitorPlaceholderCount}。`,
  },
  {
    id: "social_links_finalized_or_removed",
    pass: !content.includes('href: "#contact"'),
    detail: "SNS 链接需要填写真实地址或从公开版本移除。",
  },
  {
    id: "privacy_destination_enabled",
    pass: !page.includes("privacy-placeholder"),
    detail: "Privacy Policy 需要真实可打开的目标。",
  },
  {
    id: "search_indexing_enabled",
    pass: /allowIndexing:\s*true/.test(content),
    detail: "正式发布候选需要从 noindex 切换为允许索引。",
  },
];

const blockingChecks = checks.filter((check) => !check.pass);
const report = {
  generatedAt: new Date().toISOString(),
  publicationStatus: publication.status,
  readyToPublish: blockingChecks.length === 0,
  checks,
  blockingChecks: blockingChecks.map(({ id, detail }) => ({ id, detail })),
};

console.log(JSON.stringify(report, null, 2));

if (process.argv.includes("--strict") && !report.readyToPublish) {
  process.exitCode = 1;
}
