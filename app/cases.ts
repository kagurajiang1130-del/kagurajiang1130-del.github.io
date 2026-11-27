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
      title: "文化の誤解｜「失礼」の前に、説明されていないルールを見る",
      client: "架空のサービス活用場面。実在の顧客ではありません",
      industry: "異文化コミュニケーション · DEMO",
      summary: "飲み物の持ち込み、料理の分け方、注文や支払いの習慣。同じ行動でも、育った環境によって意味が変わります。店のルールと理由を先に説明し、SNS、店頭表示、FAQへ一貫して配置する想定です。",
      services: "文化差の整理／ルール説明／SNS・店頭コンテンツ",
      result: "想定納品：誤解されやすい場面、理由と代替案、中国語FAQ、接客用メモ",
      image: "CULTURAL BRIDGE / DEMO 01"
    },
    {
      title: "多言語サービスサイト｜迷わず選べる店頭画面",
      client: "架空のサービス活用場面。実在の顧客ではありません",
      industry: "サービスサイト · DEMO",
      summary: "QRから開き、言語を選び、サービスやお願いをタップすると、相手の言語と日本語が並んで表示される想定です。",
      services: "情報設計／多言語サイト／店員向け表示",
      result: "想定納品：操作できる試作、対照原稿、店員向け表示、公開版",
      image: "SERVICE SITE / DEMO 02"
    },
    {
      title: "多言語ブランド｜同じ価値を自然な中国語へ",
      client: "架空のサービス活用場面。実在の顧客ではありません",
      industry: "多言語コンテンツ · DEMO",
      summary: "日本語のブランド情報をそのまま置き換えず、中国語圏の読者に自然な表現へ整える想定です。",
      services: "ブランド整理／多言語ローカライズ／表現確認",
      result: "想定納品：ブランド用語集、対照原稿、SNS向け表現ガイド",
      image: "LOCALIZATION / DEMO 03"
    }
  ],
  en: [
    {
      title: "Cultural misunderstanding｜See the unstated rule before calling it rude",
      client: "Fictional service scenario, not a real client",
      industry: "CROSS-CULTURAL COMMUNICATION · DEMO",
      summary: "Bringing a drink, sharing food, ordering or paying can carry different meanings in different places. A possible project explains the shop's rule and the reason behind it consistently across social content, storefront information and FAQs.",
      services: "Cultural review / rule explanation / social and in-store content",
      result: "Example deliverables: friction points, reasons and alternatives, Chinese FAQ and frontline notes",
      image: "CULTURAL BRIDGE / DEMO 01"
    },
    {
      title: "Multilingual service site｜A guest screen with a clear next step",
      client: "Fictional service scenario, not a real client",
      industry: "SERVICE SITE · DEMO",
      summary: "A possible mobile site opened from a QR code. The visitor chooses a language and taps a service or request, then sees their language and Japanese side by side.",
      services: "Information design / multilingual site / staff view",
      result: "Example deliverables: clickable prototype, bilingual content, staff-facing screen and public build",
      image: "SERVICE SITE / DEMO 02"
    },
    {
      title: "Multilingual brand｜Carry the same value into natural Chinese",
      client: "Fictional service scenario, not a real client",
      industry: "MULTILINGUAL CONTENT · DEMO",
      summary: "A possible project that turns Japanese brand information into natural Chinese for the intended audience instead of replacing it word for word.",
      services: "Brand review / localization / language review",
      result: "Example deliverables: terminology, bilingual content and a social-media expression guide",
      image: "LOCALIZATION / DEMO 03"
    }
  ],
  zh: [
    {
      title: "文化误读｜在说“没礼貌”之前，先看清那条没被说明的规则",
      client: "虚构服务场景，不是真实客户",
      industry: "跨文化沟通 · DEMO",
      summary: "自带饮品、分享食物、点单或支付方式，在不同生活经验里可能代表完全不同的事。设想先把门店规则、原因与替代做法说清，并放进社媒内容、店头说明和 FAQ。",
      services: "文化差异梳理／规则说明／社媒与店内内容",
      result: "可能交付：易误会场景、原因与替代方案、中文 FAQ、一线沟通提示",
      image: "跨文化沟通 / DEMO 01"
    },
    {
      title: "多语言服务网站｜外国顾客不用问，也能找到下一步",
      client: "虚构服务场景，不是真实客户",
      industry: "服务网站 · DEMO",
      summary: "设想顾客扫码打开网站，选择语言和服务，点一下“需要帮助”或“饮食限制”，屏幕同时显示自己的语言与日语，可以直接给店员看。",
      services: "信息结构／多语言网站／店员展示界面",
      result: "可能交付：可点击原型、双语内容表、店员展示页、公开版本",
      image: "服务网站 / DEMO 02"
    },
    {
      title: "多语言品牌｜把同一价值写成自然中文",
      client: "虚构服务场景，不是真实客户",
      industry: "多语言内容 · DEMO",
      summary: "把日语品牌资料整理成中文读者看得懂、愿意继续读的表达，而不是逐句替换。",
      services: "品牌梳理／多语言本地化／表达校对",
      result: "可能交付：品牌术语表、双语原稿、社媒表达指南",
      image: "本地化 / DEMO 03"
    }
  ]
};
