export type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  summary: string;
  services: string;
  result: string;
  image: string;
};

// These are labelled service scenarios, not client work or performance claims.
// Replace an item only after the client, scope, result and publication permission are verified.
export const caseStudies: Record<"ja" | "en" | "zh", CaseStudy[]> = {
  ja: [
    {
      title: "店舗アカウント｜投稿から来店までを一つにつなぐ",
      client: "架空のサービス活用場面。実在の顧客ではありません",
      industry: "店舗SNS運用 · DEMO",
      summary: "プロフィール、画像投稿、店舗情報、予約導線を一つの運用にまとめる想定です。投稿を見た人が次の行動を取れる構成にします。",
      services: "アカウント診断／コンテンツ設計／プロフィール改善",
      result: "想定納品：月間テーマ、投稿案、プロフィール設計、店舗情報チェック",
      image: "STORES / DEMO 01"
    },
    {
      title: "ブランドアカウント｜素材を継続運用できる内容へ",
      client: "架空のサービス活用場面。実在の顧客ではありません",
      industry: "ブランドSNS運用 · DEMO",
      summary: "既存の写真や短い動画を整理し、中国SNSで継続して公開できる連載と制作の流れに変える想定です。",
      services: "素材分析／連載設計／プラットフォーム別制作",
      result: "想定納品：素材マップ、投稿連載、制作ルール、月間カレンダー",
      image: "CONTENT SYSTEM / DEMO 02"
    },
    {
      title: "多言語ブランド｜同じ価値を自然な中国語へ",
      client: "架空のサービス活用場面。実在の顧客ではありません",
      industry: "多言語コンテンツ · DEMO",
      summary: "日本語のブランド情報をそのまま翻訳せず、中国語圏の読者に自然な表現へ整える想定です。",
      services: "ブランド整理／多言語ローカライズ／表現確認",
      result: "想定納品：ブランド用語集、対照原稿、SNS向け表現ガイド",
      image: "LOCALIZATION / DEMO 03"
    }
  ],
  en: [
    {
      title: "Shop account｜Connect content to the visit",
      client: "Fictional service scenario, not a real client",
      industry: "SHOP SOCIAL OPERATIONS · DEMO",
      summary: "A possible account operation that connects the profile, visual posts, shop information and booking path, giving viewers a clear next step.",
      services: "Account diagnosis / content strategy / profile improvement",
      result: "Example deliverables: monthly themes, post plans, profile structure and a shop-information review",
      image: "STORES / DEMO 01"
    },
    {
      title: "Brand account｜Turn assets into repeatable content",
      client: "Fictional service scenario, not a real client",
      industry: "BRAND SOCIAL OPERATIONS · DEMO",
      summary: "A possible operation that organizes existing photos and short videos into editorial series and a repeatable production rhythm for Chinese social media.",
      services: "Asset analysis / editorial planning / platform production",
      result: "Example deliverables: asset map, content series, production rules and a monthly calendar",
      image: "CONTENT SYSTEM / DEMO 02"
    },
    {
      title: "Multilingual brand｜Carry the same value into natural Chinese",
      client: "Fictional service scenario, not a real client",
      industry: "MULTILINGUAL CONTENT · DEMO",
      summary: "A possible project that turns Japanese brand information into natural Chinese for the intended audience instead of translating it word for word.",
      services: "Brand review / localization / language review",
      result: "Example deliverables: terminology, bilingual copy and a social-media expression guide",
      image: "LOCALIZATION / DEMO 03"
    }
  ],
  zh: [
    {
      title: "门店账号｜把内容接到到店这一步",
      client: "虚构服务场景，不是真实客户",
      industry: "门店社媒运营 · DEMO",
      summary: "设想把主页、图文内容、门店信息和预约路径放进同一套运营，让看到内容的人知道下一步做什么。",
      services: "账号诊断／内容策划／主页优化",
      result: "可能交付：月度主题、发帖方案、主页结构、门店信息检查",
      image: "门店账号 / DEMO 01"
    },
    {
      title: "品牌账号｜把现有素材变成可持续更新",
      client: "虚构服务场景，不是真实客户",
      industry: "品牌社媒运营 · DEMO",
      summary: "把现有照片和短视频整理成栏目、视觉规则与每月生产节奏，让账号可以持续发布，而不是每次从零开始。",
      services: "素材分析／栏目策划／跨平台制作",
      result: "可能交付：素材地图、内容栏目、制作规则、月度日历",
      image: "内容系统 / DEMO 02"
    },
    {
      title: "多语言品牌｜把同一价值写成自然中文",
      client: "虚构服务场景，不是真实客户",
      industry: "多语言内容 · DEMO",
      summary: "把日语品牌资料整理成中文读者看得懂、愿意继续读的表达，而不是逐句翻译。",
      services: "品牌梳理／多语言本地化／表达校对",
      result: "可能交付：品牌术语表、双语原稿、社媒表达指南",
      image: "本地化 / DEMO 03"
    }
  ]
};
