export type Locale = "ja" | "en" | "zh";

type SectionHeader = { label: string; title: string; intro?: string };
type ListItem = { title: string; text: string };

export interface SiteCopy {
  seo: { title: string; description: string };
  ui: {
    language: string; menu: string; close: string; mainNavigation: string; sectionProgress: string; scroll: string;
    from: string; visualIndex: string; consultService: string; comingSoon: string;
    servicesLabel: string; resultLabel: string; viewCase: string; recommended: string;
    startConversation: string; team: string; founder: string; background: string;
    workingPhilosophy: string; partners: string; faqMissing: string; faqContact: string;
    contactLabel: string; contactTitle: string; contactIntro: string; contact: string;
    backToTop: string; seal: string;
  };
  brand: { name: string; eyebrow: string; description: string };
  navigation: Array<{ label: string; href: string }>;
  scenes: Array<{ label: string; href: string }>;
  sections: Record<"philosophy" | "problems" | "approach" | "services" | "process" | "cases" | "pricing" | "about" | "faq", SectionHeader>;
  hero: { title: string; subtitle: string; kicker: string; rotatingWords: string[]; primaryAction: { label: string; href: string }; secondaryAction: { label: string; href: string }; visualLabel: string; marquee: string };
  philosophy: { body: string; quote: string; visualLabel: string };
  problems: ListItem[];
  approach: ListItem[];
  services: Array<{ name: string; summary: string; detail: string }>;
  experienceGuide: { label: string; title: string; text: string; centerLabel: string; items: string[]; visualLabel: string };
  process: ListItem[];
  cases: Array<{ title: string; client: string; industry: string; summary: string; services: string; result: string; image: string }>;
  pricing: Array<{ name: string; audience: string; price: string; features: string[]; action: string; featured: boolean }>;
  vision: { label: string; title: string; text: string };
  about: { team: string; founder: string; background: string; philosophy: string; teamImage: string; partnerLogos: string[] };
  faqs: Array<{ question: string; answer: string }>;
  contact: {
    email: string; note: string; services: string[]; socials: Array<{ label: string; href: string }>;
    form: { name: string; namePlaceholder: string; company: string; companyPlaceholder: string; email: string; website: string; service: string; choose: string; message: string; messagePlaceholder: string; submit: string; notice: string };
  };
  footer: { description: string; motifWords: string[]; privacyLabel: string; copyright: string };
}

export const localeOptions: Array<{ code: Locale; short: string; label: string; htmlLang: string }> = [
  { code: "ja", short: "JP", label: "日本語", htmlLang: "ja" },
  { code: "en", short: "EN", label: "English", htmlLang: "en" },
  { code: "zh", short: "中", label: "简体中文", htmlLang: "zh-CN" },
];

const socialLinks = [
  { label: "Gmail", href: "#contact" },
  { label: "Instagram", href: "#contact" },
  { label: "RED / 小红書", href: "#contact" },
  { label: "Other SNS", href: "#contact" },
];

export const siteContent: Record<Locale, SiteCopy> = {
  ja: {
    seo: { title: "[BRAND NAME] — 異文化コミュニケーションスタジオ", description: "日本のローカルビジネスと中国語圏の人々をつなぐ、異文化コミュニケーションスタジオ。" },
    ui: {
      language: "言語を選択", menu: "Menu", close: "Close", mainNavigation: "メインナビゲーション", sectionProgress: "セクション進行", scroll: "スクロールして見る ↓",
      from: "存在から", visualIndex: "VISUAL / 01", consultService: "このサービスについて相談", comingSoon: "準備中",
      servicesLabel: "提供サービス", resultLabel: "成果", viewCase: "事例を見る", recommended: "おすすめ",
      startConversation: "相談をはじめる", team: "チーム", founder: "創業者", background: "専門背景",
      workingPhilosophy: "仕事への姿勢", partners: "パートナー / クライアント", faqMissing: "お探しの質問がありませんか？", faqContact: "直接お問い合わせください →",
      contactLabel: "12 — Contact", contactTitle: "必要な人へ、\nあなたらしさを届ける。", contactIntro: "基本情報とご相談内容をお知らせください。正式公開前に、メールアドレスとSNSリンクを設定できます。", contact: "お問い合わせ",
      backToTop: "ページ上部へ ↑", seal: "文",
    },
    brand: { name: "[BRAND NAME]", eyebrow: "Cross-cultural communication studio — Japan / China", description: "[ブランドの短い紹介文を後ほど追加]" },
    navigation: [
      { label: "Home", href: "#home" }, { label: "理念", href: "#philosophy" }, { label: "サービス", href: "#services" },
      { label: "プロセス", href: "#process" }, { label: "事例", href: "#cases" }, { label: "料金", href: "#pricing" },
      { label: "私たち", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "お問い合わせ", href: "#contact" },
    ],
    scenes: [
      { label: "Home", href: "#home" }, { label: "Philosophy", href: "#philosophy" }, { label: "Problems", href: "#problems" },
      { label: "Approach", href: "#approach" }, { label: "Services", href: "#services" }, { label: "Experience", href: "#experience" },
      { label: "Process", href: "#process" }, { label: "Cases", href: "#cases" }, { label: "Pricing", href: "#pricing" },
      { label: "Vision", href: "#vision" }, { label: "About", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" },
    ],
    sections: {
      philosophy: { label: "Philosophy", title: "言葉の先に、理解をつくる。", intro: "存在することと、見つけてもらうことは同じではありません。ここにブランドの文化的な視点と仕事の方法を記します。" },
      problems: { label: "Problems", title: "価値があっても、正しく届いていない。", intro: "日本のローカルビジネスが中国語圏の人々と出会うときに生まれる、情報・言語・体験のギャップを整理します。" },
      approach: { label: "Approach", title: "検索されることから、体験されることへ。", intro: "コミュニケーションを四つの連続した段階に分け、今後のサービスをわかりやすく構成します。" },
      services: { label: "Services", title: "理解が生まれる、具体的なかたち。", intro: "各サービスは展開して詳細を確認できます。名称・概要・詳細はすべて多言語設定ファイルで管理します。" },
      process: { label: "Process", title: "最初の対話から、実際に使われるまで。", intro: "基本の進行を用意しています。今後、各段階の説明と納品物を更新できます。" },
      cases: { label: "Cases", title: "事例を掲載する場所を用意しました。", intro: "実績は創作せず、現在はプレースホルダーを表示しています。設定ファイルで追加・削除・並べ替えができます。" },
      pricing: { label: "Pricing", title: "小さく始め、長い関係にもつなげる。", intro: "プラン名・順番・価格・内容は、後からまとめて変更できます。" },
      about: { label: "About", title: "誠実に、ひらかれたチームであること。", intro: "メンバー、経歴、クライアント実績は創作せず、明確なプレースホルダーで示しています。" },
      faq: { label: "FAQ", title: "ご相談前によくいただく質問。" },
    },
    hero: {
      title: "[ブランドの核となるタイトルを入力]", subtitle: "[事業内容と提供価値の説明を入力]", kicker: "Japan × Chinese-speaking audiences",
      rotatingWords: ["存在する", "見つけられる", "理解される", "体験される"],
      primaryAction: { label: "サービスを見る", href: "#services" }, secondaryAction: { label: "問い合わせる", href: "#contact" },
      visualLabel: "[メインビジュアル / 動画 / モーション]", marquee: "BE SEEN · BE UNDERSTOOD · BE EXPERIENCED · 見つけられる · 理解される · 体験される · ",
    },
    philosophy: { body: "[ブランド理念の本文を後ほど追加]", quote: "[ブランドを象徴する言葉を後ほど追加]", visualLabel: "[ブランド理念の画像 / モーション]" },
    problems: [
      { title: "[課題 01]", text: "[中国の消費者が店舗情報を検索できない課題を後ほど追加]" }, { title: "[課題 02]", text: "[中国語コンテンツ不足の説明を後ほど追加]" },
      { title: "[課題 03]", text: "[機械翻訳では店舗の個性が伝わらない課題を後ほど追加]" }, { title: "[課題 04]", text: "[訪問体験が理解されにくい課題を後ほど追加]" },
      { title: "[課題 05]", text: "[文化の違いと接客マナーの課題を後ほど追加]" }, { title: "[課題 06]", text: "[認知が来店につながらない課題を後ほど追加]" },
    ],
    approach: [
      { title: "見つけられる", text: "[アプローチの説明を後ほど追加]" }, { title: "理解される", text: "[アプローチの説明を後ほど追加]" },
      { title: "信頼される", text: "[アプローチの説明を後ほど追加]" }, { title: "体験される", text: "[アプローチの説明を後ほど追加]" },
    ],
    services: [
      { name: "中国語コピー・翻訳", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "メニュー・Webサイトの中国語化", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "小紅書アカウント開設", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "中国SNSへのコンテンツ移行", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "コンテンツ企画・投稿", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "文化と体験情報の編集", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "中国語での接客・マナー案内", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
      { name: "継続運用・プロモーション", summary: "[サービス概要を後ほど追加]", detail: "[詳しいサービス内容を後ほど追加]" },
    ],
    experienceGuide: {
      label: "05 — Experience Guide", title: "ルールも、体験の一部に。", text: "[異文化体験デザインの説明を後ほど追加]", centerLabel: "CULTURAL\nEXPERIENCE",
      items: ["メニュー翻訳", "予約案内", "支払い方法", "撮影ルール", "店内マナー", "注文方法", "キャンセル規定", "来店の流れ", "旅行者向け体験ガイド", "中国語サイン"],
      visualLabel: "[体験ガイド例 / 店内での活用写真]",
    },
    process: [
      { title: "初回相談", text: "[進行内容を後ほど追加]" }, { title: "店舗・ブランド情報の整理", text: "[進行内容を後ほど追加]" },
      { title: "コンテンツと体験の分析", text: "[進行内容を後ほど追加]" }, { title: "中国語コンテンツ制作", text: "[進行内容を後ほど追加]" },
      { title: "アカウント・ページ構築", text: "[進行内容を後ほど追加]" }, { title: "公開と継続調整", text: "[進行内容を後ほど追加]" },
    ],
    cases: [1, 2, 3].map((number) => ({ title: `Case Study 0${number}`, client: "[クライアント / プロジェクト名]", industry: "[業種]", summary: "[プロジェクト概要を後ほど追加]", services: "[提供サービス]", result: "[プロジェクト成果]", image: "[事例カバー画像]" })),
    pricing: [
      { name: "Basic", audience: "[対象となる方を後ほど追加]", price: "[価格未定]", features: ["[サービス内容を後ほど追加]"], action: "このプランを相談", featured: false },
      { name: "Standard", audience: "[対象となる方を後ほど追加]", price: "[価格未定]", features: ["[サービス内容を後ほど追加]"], action: "このプランを相談", featured: true },
      { name: "Complete", audience: "[対象となる方を後ほど追加]", price: "[価格未定]", features: ["[サービス内容を後ほど追加]"], action: "このプランを相談", featured: false },
    ],
    vision: { label: "09 — Vision", title: "異文化のあいだで、\n到着の先へ。", text: "[目指す未来とブランドビジョンを後ほど追加]" },
    about: { team: "[チーム紹介を後ほど追加]", founder: "[創業者紹介を後ほど追加]", background: "[専門背景を後ほど追加]", philosophy: "[仕事への姿勢を後ほど追加]", teamImage: "[チーム写真]", partnerLogos: ["[パートナーロゴ]", "[パートナーロゴ]", "[パートナーロゴ]", "[パートナーロゴ]"] },
    faqs: ["メニュー翻訳だけでも依頼できますか？", "小紅書アカウントがなくても相談できますか？", "アカウント作成をサポートできますか？", "単発のプロジェクトも可能ですか？", "継続運用にも対応していますか？", "店内の中国語案内も制作できますか？", "福岡以外の店舗も相談できますか？", "開始前に何を準備すればよいですか？"].map((question) => ({ question, answer: "[回答を後ほど追加]" })),
    contact: {
      email: "[CONTACT EMAIL]", note: "現在はフォーム画面のみです。公開運用前にメールまたはフォームサービスを設定してください。",
      services: ["中国語コピー・翻訳", "メニュー・Webサイトの中国語化", "小紅書アカウント開設", "中国SNSへの移行", "コンテンツ企画・投稿", "体験・接客情報デザイン", "継続運用・プロモーション", "その他"], socials: socialLinks,
      form: { name: "お名前 *", namePlaceholder: "Your name", company: "会社・店舗名", companyPlaceholder: "Company / shop", email: "メールアドレス *", website: "Webサイト・SNS", service: "ご相談内容", choose: "選択してください", message: "メッセージ *", messagePlaceholder: "店舗やブランド、ご相談内容、希望時期を簡単にお知らせください。", submit: "問い合わせを送る", notice: "フォームの構造は完成しています。実際の送信はメールまたはフォームサービス設定後に有効になります。" },
    },
    footer: { description: "[ブランドの短い紹介文を後ほど追加]", motifWords: ["LANGUAGE", "CULTURE", "EXPERIENCE", "CONNECTION"], privacyLabel: "Privacy Policy", copyright: `© ${new Date().getFullYear()} [BRAND NAME]. All rights reserved.` },
  },

  en: {
    seo: { title: "[BRAND NAME] — Cross-cultural Communication Studio", description: "A cross-cultural communication studio connecting local businesses in Japan with Chinese-speaking audiences." },
    ui: {
      language: "Choose language", menu: "Menu", close: "Close", mainNavigation: "Main navigation", sectionProgress: "Section progress", scroll: "Scroll to explore ↓",
      from: "From", visualIndex: "VISUAL / 01", consultService: "Ask about this service", comingSoon: "Coming soon",
      servicesLabel: "Services", resultLabel: "Result", viewCase: "View case", recommended: "Recommended",
      startConversation: "Start a conversation", team: "Team", founder: "Founder", background: "Background",
      workingPhilosophy: "Working philosophy", partners: "Partners / Clients", faqMissing: "Can’t find your question?", faqContact: "Contact us directly →",
      contactLabel: "12 — Contact", contactTitle: "Help the right people\nsee the real you.", contactIntro: "Share a few details about your business and what you would like to explore. Your email and social links can be configured before launch.", contact: "Contact",
      backToTop: "Back to top ↑", seal: "文",
    },
    brand: { name: "[BRAND NAME]", eyebrow: "Cross-cultural communication studio — Japan / China", description: "[A short brand description will be added later]" },
    navigation: [
      { label: "Home", href: "#home" }, { label: "Philosophy", href: "#philosophy" }, { label: "Services", href: "#services" },
      { label: "Process", href: "#process" }, { label: "Cases", href: "#cases" }, { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" },
    ],
    scenes: [
      { label: "Home", href: "#home" }, { label: "Philosophy", href: "#philosophy" }, { label: "Problems", href: "#problems" },
      { label: "Approach", href: "#approach" }, { label: "Services", href: "#services" }, { label: "Experience", href: "#experience" },
      { label: "Process", href: "#process" }, { label: "Cases", href: "#cases" }, { label: "Pricing", href: "#pricing" },
      { label: "Vision", href: "#vision" }, { label: "About", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" },
    ],
    sections: {
      philosophy: { label: "Philosophy", title: "Building understanding beyond language.", intro: "Existing is not the same as being seen. This space will hold the brand’s cultural point of view and way of working." },
      problems: { label: "Problems", title: "Valuable, but not yet seen clearly.", intro: "This section maps the information, language, and experience gaps local Japanese businesses may face when reaching Chinese-speaking audiences." },
      approach: { label: "Approach", title: "From searchable to truly experienceable.", intro: "Communication is organised into four connected stages, creating a clear framework for future services." },
      services: { label: "Services", title: "Practical ways to create understanding.", intro: "Each service can be expanded for detail. Names, summaries, and descriptions are all managed in the multilingual content file." },
      process: { label: "Process", title: "From the first conversation to real-world use.", intro: "The core workflow is ready. Details and deliverables can be refined as the service develops." },
      cases: { label: "Cases", title: "A clear home for future case studies.", intro: "No results are invented. Placeholder projects can be added, removed, or reordered in the content configuration." },
      pricing: { label: "Pricing", title: "Start focused. Leave room to grow.", intro: "Plan names, order, pricing, and inclusions can all be updated in one place." },
      about: { label: "About", title: "Open in approach, honest in presentation.", intro: "Team members, experience, and client history are not invented; every missing item is clearly marked." },
      faq: { label: "FAQ", title: "Questions you may have before we begin." },
    },
    hero: {
      title: "[Add the brand’s core headline here]", subtitle: "[Add a clear description of the business and its value here]", kicker: "Japan × Chinese-speaking audiences",
      rotatingWords: ["Existing", "Being found", "Being understood", "Being experienced"],
      primaryAction: { label: "View services", href: "#services" }, secondaryAction: { label: "Contact us", href: "#contact" },
      visualLabel: "[Hero image / video / motion visual]", marquee: "BE SEEN · BE UNDERSTOOD · BE EXPERIENCED · CONNECT CULTURES · CREATE CONTEXT · ",
    },
    philosophy: { body: "[Brand philosophy copy will be added later]", quote: "[A key brand statement will be added later]", visualLabel: "[Philosophy image / motion visual]" },
    problems: [
      { title: "[Problem 01]", text: "[Explain why the business is difficult to find on Chinese platforms]" }, { title: "[Problem 02]", text: "[Explain the lack of Chinese-language content]" },
      { title: "[Problem 03]", text: "[Explain why machine translation cannot express the brand clearly]" }, { title: "[Problem 04]", text: "[Explain gaps in understanding the in-store experience]" },
      { title: "[Problem 05]", text: "[Explain cross-cultural communication and etiquette concerns]" }, { title: "[Problem 06]", text: "[Explain why visibility does not always lead to a visit]" },
    ],
    approach: [
      { title: "Be found", text: "[Approach details will be added later]" }, { title: "Be understood", text: "[Approach details will be added later]" },
      { title: "Build trust", text: "[Approach details will be added later]" }, { title: "Be experienced", text: "[Approach details will be added later]" },
    ],
    services: [
      { name: "Chinese copywriting & translation", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "Chinese menus & websites", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "RED / Xiaohongshu account setup", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "Content migration to Chinese social media", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "Content planning & publishing", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "Cultural & experience content design", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "Chinese visitor information & etiquette", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
      { name: "Ongoing operations & promotion", summary: "[Service summary will be added later]", detail: "[Detailed scope will be added later]" },
    ],
    experienceGuide: {
      label: "05 — Experience Guide", title: "Make the rules part of the experience.", text: "[Cross-cultural experience design copy will be added later]", centerLabel: "CULTURAL\nEXPERIENCE",
      items: ["Menu translation", "Reservations", "Payment", "Photo & video", "In-store etiquette", "How to order", "Cancellation policy", "Visit flow", "Visitor experience guide", "Chinese signage"],
      visualLabel: "[Experience guide example / in-store image]",
    },
    process: [
      { title: "Initial consultation", text: "[Process details will be added later]" }, { title: "Business & brand information", text: "[Process details will be added later]" },
      { title: "Content & experience review", text: "[Process details will be added later]" }, { title: "Chinese content production", text: "[Process details will be added later]" },
      { title: "Account or page setup", text: "[Process details will be added later]" }, { title: "Launch & refinement", text: "[Process details will be added later]" },
    ],
    cases: [1, 2, 3].map((number) => ({ title: `Case Study 0${number}`, client: "[Client / project name]", industry: "[Industry]", summary: "[Project summary will be added later]", services: "[Services provided]", result: "[Project result]", image: "[Case cover image]" })),
    pricing: [
      { name: "Basic", audience: "[Best suited for — to be added]", price: "[Price TBC]", features: ["[Services will be added later]"], action: "Ask about this plan", featured: false },
      { name: "Standard", audience: "[Best suited for — to be added]", price: "[Price TBC]", features: ["[Services will be added later]"], action: "Ask about this plan", featured: true },
      { name: "Complete", audience: "[Best suited for — to be added]", price: "[Price TBC]", features: ["[Services will be added later]"], action: "Ask about this plan", featured: false },
    ],
    vision: { label: "09 — Vision", title: "Between cultures,\nbeyond arrival.", text: "[The future state and brand vision will be added later]" },
    about: { team: "[Team introduction will be added later]", founder: "[Founder introduction will be added later]", background: "[Professional background will be added later]", philosophy: "[Working philosophy will be added later]", teamImage: "[Team photo]", partnerLogos: ["[Partner logo]", "[Partner logo]", "[Partner logo]", "[Partner logo]"] },
    faqs: ["Can I request menu translation only?", "Can we work together without a RED account?", "Can you help create an account?", "Do you accept one-off projects?", "Do you offer ongoing operations?", "Can you create in-store Chinese signage?", "Can businesses outside Fukuoka work with you?", "What should we prepare before starting?"].map((question) => ({ question, answer: "[Answer will be added later]" })),
    contact: {
      email: "[CONTACT EMAIL]", note: "The form interface is ready. Connect an email or form service before using it for real enquiries.",
      services: ["Chinese copywriting & translation", "Chinese menus & websites", "RED account setup", "Chinese social content migration", "Content planning & publishing", "Experience information design", "Ongoing operations & promotion", "Other"], socials: socialLinks,
      form: { name: "Name *", namePlaceholder: "Your name", company: "Company or shop", companyPlaceholder: "Company / shop", email: "Email *", website: "Website or social link", service: "Service of interest", choose: "Please select", message: "Message *", messagePlaceholder: "Tell us briefly about your business, what you need, and your preferred timing.", submit: "Submit enquiry", notice: "The form structure is complete. Sending will be enabled after an email or form service is connected." },
    },
    footer: { description: "[A short brand description will be added later]", motifWords: ["LANGUAGE", "CULTURE", "EXPERIENCE", "CONNECTION"], privacyLabel: "Privacy Policy", copyright: `© ${new Date().getFullYear()} [BRAND NAME]. All rights reserved.` },
  },

  zh: {
    seo: { title: "[BRAND NAME] — 跨文化传播工作室", description: "连接日本本地商家与中国消费者的跨文化传播工作室。" },
    ui: {
      language: "选择语言", menu: "菜单", close: "关闭", mainNavigation: "主导航", sectionProgress: "章节进度", scroll: "向下滚动 ↓",
      from: "从", visualIndex: "视觉 / 01", consultService: "咨询此服务", comingSoon: "即将公开",
      servicesLabel: "提供的服务", resultLabel: "项目结果", viewCase: "查看案例", recommended: "推荐",
      startConversation: "开始交流", team: "团队", founder: "创始人", background: "专业背景",
      workingPhilosophy: "工作理念", partners: "合作伙伴 / 客户", faqMissing: "没有找到你的问题？", faqContact: "直接联系我们 →",
      contactLabel: "12 — Contact", contactTitle: "让合适的人，\n看见真实的你。", contactIntro: "请留下基本信息与希望咨询的方向。正式上线前，可在内容配置中替换邮箱和所有社交链接。", contact: "联系方式",
      backToTop: "返回顶部 ↑", seal: "文",
    },
    brand: { name: "[BRAND NAME]", eyebrow: "Cross-cultural communication studio — Japan / China", description: "[这里填写品牌简短说明]" },
    navigation: [
      { label: "首页", href: "#home" }, { label: "理念", href: "#philosophy" }, { label: "服务", href: "#services" },
      { label: "流程", href: "#process" }, { label: "案例", href: "#cases" }, { label: "价格", href: "#pricing" },
      { label: "关于", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "联系", href: "#contact" },
    ],
    scenes: [
      { label: "首页", href: "#home" }, { label: "理念", href: "#philosophy" }, { label: "问题", href: "#problems" },
      { label: "方法", href: "#approach" }, { label: "服务", href: "#services" }, { label: "体验", href: "#experience" },
      { label: "流程", href: "#process" }, { label: "案例", href: "#cases" }, { label: "价格", href: "#pricing" },
      { label: "愿景", href: "#vision" }, { label: "关于", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "联系", href: "#contact" },
    ],
    sections: {
      philosophy: { label: "Philosophy", title: "在语言之外，建立理解。", intro: "存在并不等于被看见。这里将逐步形成品牌的文化立场与工作方法。" },
      problems: { label: "Problems", title: "有价值，却没有被正确地看见。", intro: "这里将呈现日本本地商家面对中国消费者时，常见的信息、语言与体验断层。" },
      approach: { label: "Approach", title: "从可搜索，到可体验。", intro: "把传播拆成四个彼此相连的阶段，为后续服务内容保留清晰框架。" },
      services: { label: "Services", title: "服务，是理解发生的具体方式。", intro: "每项服务均可展开。名称、简介和详情都集中在多语言配置文件中。" },
      process: { label: "Process", title: "从第一次对话，到内容被使用。", intro: "流程结构已经搭好；后续只需替换每一步的说明与交付内容。" },
      cases: { label: "Cases", title: "案例位置已经准备好。", intro: "当前不展示虚构业绩。未来可在配置中直接增加、删除或调整案例。" },
      pricing: { label: "Pricing", title: "从轻量开始，也为长期合作留出空间。", intro: "方案名称、顺序、价格和服务内容均可统一修改。" },
      about: { label: "About", title: "关于我们，保持真实，也保持开放。", intro: "当前不虚构成员、经历或客户；所有信息均使用明确占位符。" },
      faq: { label: "FAQ", title: "开始合作前，可能想了解这些。" },
    },
    hero: {
      title: "[这里填写品牌核心标题]", subtitle: "[这里填写品牌业务与价值说明]", kicker: "Japan × Chinese-speaking audiences",
      rotatingWords: ["存在", "被发现", "被理解", "被体验"],
      primaryAction: { label: "查看服务", href: "#services" }, secondaryAction: { label: "联系我们", href: "#contact" },
      visualLabel: "[首屏图片 / 视频 / 动态视觉]", marquee: "BE SEEN · BE UNDERSTOOD · BE EXPERIENCED · 被发现 · 被理解 · 被体验 · ",
    },
    philosophy: { body: "[品牌理念内容将在后续补充]", quote: "[品牌重点引用将在后续补充]", visualLabel: "[品牌理念图片 / 动态视觉]" },
    problems: [
      { title: "[问题标题 01]", text: "[中国消费者无法搜索到店铺信息的说明将在后续补充]" }, { title: "[问题标题 02]", text: "[中文内容不足的说明将在后续补充]" },
      { title: "[问题标题 03]", text: "[机器翻译无法表达店铺特色的说明将在后续补充]" }, { title: "[问题标题 04]", text: "[游客不了解店铺体验方式的说明将在后续补充]" },
      { title: "[问题标题 05]", text: "[跨文化沟通与礼仪问题的说明将在后续补充]" }, { title: "[问题标题 06]", text: "[曝光无法转化为到店行动的说明将在后续补充]" },
    ],
    approach: [
      { title: "被发现", text: "[解决思路将在后续补充]" }, { title: "被理解", text: "[解决思路将在后续补充]" },
      { title: "被信任", text: "[解决思路将在后续补充]" }, { title: "被体验", text: "[解决思路将在后续补充]" },
    ],
    services: [
      { name: "中文文案与翻译", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "菜单及网站中文化", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "小红书账号创建", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "中国SNS内容迁移", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "内容策划与发布", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "文化真实性与体验内容整理", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "中文接待信息与礼仪说明", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
      { name: "长期运营与推广", summary: "[服务简介将在后续补充]", detail: "[详细服务内容将在后续补充]" },
    ],
    experienceGuide: {
      label: "05 — Experience Guide", title: "让规则成为体验的一部分。", text: "[跨文化体验设计内容将在后续补充]", centerLabel: "CULTURAL\nEXPERIENCE",
      items: ["菜单翻译", "预约说明", "支付方式", "拍照与录像", "店内礼仪", "点单方式", "取消规则", "到店流程", "游客体验指南", "中文提示牌"],
      visualLabel: "[体验指南示例 / 店内应用图片]",
    },
    process: [
      { title: "初次咨询", text: "[流程说明将在后续补充]" }, { title: "店铺与品牌信息整理", text: "[流程说明将在后续补充]" },
      { title: "内容及体验分析", text: "[流程说明将在后续补充]" }, { title: "中文内容制作", text: "[流程说明将在后续补充]" },
      { title: "账号或页面搭建", text: "[流程说明将在后续补充]" }, { title: "发布与后续调整", text: "[流程说明将在后续补充]" },
    ],
    cases: [1, 2, 3].map((number) => ({ title: `Case Study 0${number}`, client: "[客户或项目名称]", industry: "[行业]", summary: "[项目简介将在后续补充]", services: "[提供的服务]", result: "[项目结果]", image: "[案例封面图片]" })),
    pricing: [
      { name: "Basic", audience: "[适合对象将在后续补充]", price: "[价格待定]", features: ["[服务内容将在后续补充]"], action: "咨询此方案", featured: false },
      { name: "Standard", audience: "[适合对象将在后续补充]", price: "[价格待定]", features: ["[服务内容将在后续补充]"], action: "咨询此方案", featured: true },
      { name: "Complete", audience: "[适合对象将在后续补充]", price: "[价格待定]", features: ["[服务内容将在后续补充]"], action: "咨询此方案", featured: false },
    ],
    vision: { label: "09 — Vision", title: "不同文化之间，\n不止于抵达。", text: "[理想中的状态与品牌愿景将在后续补充]" },
    about: { team: "[团队介绍将在后续补充]", founder: "[创始人介绍将在后续补充]", background: "[专业背景将在后续补充]", philosophy: "[工作理念将在后续补充]", teamImage: "[团队照片]", partnerLogos: ["[合作伙伴Logo]", "[合作伙伴Logo]", "[合作伙伴Logo]", "[合作伙伴Logo]"] },
    faqs: ["可以只翻译菜单吗？", "没有小红书账号可以合作吗？", "可以帮助创建账号吗？", "可以只进行一次性项目吗？", "是否提供长期运营？", "是否可以制作店内中文提示？", "福冈以外的商家可以合作吗？", "合作开始前需要准备什么？"].map((question) => ({ question, answer: "[回答将在后续补充]" })),
    contact: {
      email: "[CONTACT EMAIL]", note: "当前表单为界面预留。公开使用前，请配置真实邮箱或表单服务。",
      services: ["中文文案与翻译", "菜单及网站中文化", "小红书账号创建", "中国SNS内容迁移", "内容策划与发布", "体验与接待信息设计", "长期运营与推广", "其他"], socials: socialLinks,
      form: { name: "姓名 *", namePlaceholder: "Your name", company: "公司或店铺名称", companyPlaceholder: "Company / shop", email: "邮箱 *", website: "网站或 SNS 链接", service: "希望咨询的服务", choose: "请选择", message: "留言 *", messagePlaceholder: "请简单介绍你的店铺、需求与希望开始的时间。", submit: "提交咨询", notice: "表单结构已经完成；发送功能将在配置真实邮箱或表单服务后启用。" },
    },
    footer: { description: "[这里填写品牌简短说明]", motifWords: ["LANGUAGE", "CULTURE", "EXPERIENCE", "CONNECTION"], privacyLabel: "Privacy Policy", copyright: `© ${new Date().getFullYear()} [BRAND NAME]. All rights reserved.` },
  },
};
