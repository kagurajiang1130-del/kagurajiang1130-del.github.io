import type { CaseStudy } from "./cases";

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
    backToTop: string; seal: string; skipToContent: string;
  };
  brand: { name: string; eyebrow: string; description: string };
  navigation: Array<{ label: string; href: string }>;
  scenes: Array<{ label: string; href: string }>;
  sections: Record<"philosophy" | "problems" | "approach" | "services" | "process" | "cases" | "pricing" | "about" | "faq", SectionHeader>;
  hero: { title: string; subtitle: string; kicker: string; rotatingWords: string[]; primaryAction: { label: string; href: string }; secondaryAction: { label: string; href: string }; visualLabel: string; marquee: string };
  philosophy: { body: string; quote: string; visualLabel: string };
  problems: ListItem[];
  approach: ListItem[];
  services: Array<{ name: string; summary: string; detail: string; status: string; action: string; available: boolean }>;
  experienceGuide: {
    label: string; title: string; text: string; centerLabel: string; items: string[]; visualLabel: string;
    chooseLanguage: string; requestListLabel: string; staffLabel: string; demoHint: string;
  };
  process: ListItem[];
  cases: CaseStudy[];
  pricing: Array<{ name: string; audience: string; price: string; features: string[]; action: string; featured: boolean }>;
  vision: { label: string; title: string; text: string };
  about: { team: string; founder: string; background: string; philosophy: string; teamImage: string; partnerLogos: string[] };
  faqs: Array<{ question: string; answer: string }>;
  contact: {
    email: string; note: string; services: string[]; socials: Array<{ label: string; href: string }>;
    form: { name: string; namePlaceholder: string; company: string; companyPlaceholder: string; email: string; website: string; service: string; choose: string; message: string; messagePlaceholder: string; submit: string; notice: string };
  };
  footer: { description: string; motifWords: string[]; privacyLabel: string; privacyBody: string; copyright: string };
}

export const localeOptions: Array<{ code: Locale; short: string; label: string; htmlLang: string }> = [
  { code: "ja", short: "JP", label: "日本語", htmlLang: "ja" },
  { code: "en", short: "EN", label: "English", htmlLang: "en" },
  { code: "zh", short: "中", label: "简体中文", htmlLang: "zh-CN" },
];

export type GuestLanguage = "ja" | "en" | "zh";

export const guestLanguageOptions: Array<{ code: GuestLanguage; short: string; label: string }> = [
  { code: "zh", short: "中", label: "简体中文" },
  { code: "en", short: "EN", label: "English" },
  { code: "ja", short: "JP", label: "日本語" },
];

export const guestServiceRequests: Array<{
  id: string;
  label: Record<GuestLanguage, string>;
  visitor: Record<GuestLanguage, string>;
  staffJa: string;
}> = [
  {
    id: "services",
    label: { ja: "サービス", en: "Services", zh: "店内服务" },
    visitor: {
      ja: "サービス内容を確認したいです。",
      en: "I would like to ask about your services.",
      zh: "我想了解一下店里的服务。",
    },
    staffJa: "サービス内容を確認したいです。",
  },
  {
    id: "booking",
    label: { ja: "予約", en: "Booking", zh: "预约" },
    visitor: {
      ja: "予約について確認したいです。",
      en: "I would like to ask about a reservation.",
      zh: "我想确认预约。",
    },
    staffJa: "予約について確認したいです。",
  },
  {
    id: "order",
    label: { ja: "注文", en: "Order", zh: "点单" },
    visitor: {
      ja: "注文をお願いします。",
      en: "I would like to order.",
      zh: "我想点单。",
    },
    staffJa: "注文をお願いします。",
  },
  {
    id: "dietary",
    label: { ja: "食事制限", en: "Dietary needs", zh: "饮食限制" },
    visitor: {
      ja: "食事制限について確認したいです。",
      en: "I need to ask about a dietary restriction.",
      zh: "我需要确认饮食限制。",
    },
    staffJa: "食事制限について確認したいです。",
  },
  {
    id: "payment",
    label: { ja: "支払い", en: "Payment", zh: "支付" },
    visitor: {
      ja: "支払い方法を確認したいです。",
      en: "I would like to ask about payment.",
      zh: "我想确认支付方式。",
    },
    staffJa: "支払い方法を確認したいです。",
  },
  {
    id: "help",
    label: { ja: "助けが必要", en: "Need help", zh: "需要帮助" },
    visitor: {
      ja: "少し助けが必要です。",
      en: "I need a little help.",
      zh: "我需要一点帮助。",
    },
    staffJa: "少し助けが必要です。",
  },
];

export const siteSettings = {
  publicUrl: "https://kagurajiang1130-del.github.io/",
  defaultLocale: "ja" as Locale,
  allowIndexing: true,
  contactFormAction: "",
};

export const siteContent: Record<Locale, SiteCopy> = {
  ja: {
    seo: {
      title: "澜顷｜多言語サービスサイト・中国SNS運用",
      description: "日本国内の企業・店舗・ブランドに向けて、外国客向けの多言語サービスサイト、店頭案内、中国SNSのコンテンツ設計と運用を支援します。"
    },
    ui: {
      language: "言語を選択",
      menu: "Menu",
      close: "Close",
      mainNavigation: "メインナビゲーション",
      sectionProgress: "セクション進行",
      scroll: "スクロールして見る ↓",
      from: "ブランドが",
      visualIndex: "ブランド運用 / 01",
      consultService: "運用支援について相談",
      comingSoon: "サービス活用例・顧客実績ではありません",
      servicesLabel: "運用支援",
      resultLabel: "納品内容",
      viewCase: "この運用場面を相談",
      recommended: "現在の主な支援",
      startConversation: "ブランド相談を申し込む",
      team: "現在の体制",
      founder: "澜顷が担うこと",
      background: "企業・店舗に確認いただくこと",
      workingPhilosophy: "運用方針",
      partners: "協業の進め方",
      faqMissing: "ほかに確認したいことはありますか？",
      faqContact: "メールで直接質問する →",
      contactLabel: "12 / Contact",
      contactTitle: "ブランドが、\n一本の良いコンテンツから見つけられるように。",
      contactIntro: "企業・店舗の概要、現在のSNS、手元の素材、目指したい状態をお聞かせください。まず課題を整理し、必要な運用範囲をご案内します。",
      contact: "お問い合わせ",
      backToTop: "ページ上部へ ↑",
      seal: "澜",
      skipToContent: "本文へ移動"
    },
    brand: {
      name: "澜顷",
      eyebrow: "多言語サービスサイト × 中国SNS運用",
      description: "澜顷は、日本国内の企業・店舗・ブランドのために、外国からのお客様が使いやすい多言語サービスサイトをつくり、文化差の整理と中国SNS運用まで支援します。"
    },
    navigation: [
      {
        label: "Home",
        href: "#home"
      },
      {
        label: "理念",
        href: "#philosophy"
      },
      {
        label: "支援",
        href: "#services"
      },
      {
        label: "進め方",
        href: "#process"
      },
      {
        label: "活用例",
        href: "#cases"
      },
      {
        label: "料金",
        href: "#pricing"
      },
      {
        label: "体制",
        href: "#about"
      },
      {
        label: "FAQ",
        href: "#faq"
      },
      {
        label: "お問い合わせ",
        href: "#contact"
      }
    ],
    scenes: [
      {
        label: "Home",
        href: "#home"
      },
      {
        label: "Philosophy",
        href: "#philosophy"
      },
      {
        label: "Problems",
        href: "#problems"
      },
      {
        label: "Approach",
        href: "#approach"
      },
      {
        label: "Services",
        href: "#services"
      },
      {
        label: "Experience",
        href: "#experience"
      },
      {
        label: "Process",
        href: "#process"
      },
      {
        label: "Scenarios",
        href: "#cases"
      },
      {
        label: "Pricing",
        href: "#pricing"
      },
      {
        label: "Vision",
        href: "#vision"
      },
      {
        label: "Roles",
        href: "#about"
      },
      {
        label: "FAQ",
        href: "#faq"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ],
    sections: {
      philosophy: {
        label: "Philosophy",
        title: "言葉の向こうに、もう一つの常識がある。",
        intro: "相手も自分も、説明されていない前提を共有していると思い込んでいることがあります。"
      },
      problems: {
        label: "Problems",
        title: "投稿はある。でも、ブランドとして積み上がっていない。",
        intro: "店側の「なぜ守らないのか」と、顧客側の「なぜ分かってもらえないのか」。必要なのは説明と、次の行動が分かる案内です。"
      },
      approach: {
        label: "Approach",
        title: "違いを理解し、伝わる運用へ。",
        intro: "誰に、何を、どの順番で伝えるかを決めてから、コンテンツと運用を組み立てます。"
      },
      services: {
        label: "Services",
        title: "外国客のためのサービスサイトから、SNS運用まで。",
        intro: "店舗情報、メニュー、予約、支払い、お願いごとを多言語で整理し、必要に応じて中国SNSの運営までつなげます。"
      },
      process: {
        label: "Process",
        title: "戦略を決めてから、安定した制作へ。",
        intro: "文化差とブランド情報を整理してから、制作、公開、改善のリズムをつくります。"
      },
      cases: {
        label: "Use Scenarios",
        title: "説明が必要な三つの場面。",
        intro: "以下はサービス範囲を説明するための架空の場面です。実在の顧客、実績、成果ではありません。"
      },
      pricing: {
        label: "Work & Quotes",
        title: "サイト、コンテンツ、運用を分けて見積り。",
        intro: "多言語サービスサイト、コンテンツ制作、SNS運用を別々に始められます。"
      },
      about: {
        label: "Roles",
        title: "誰が作り、誰が確認するか。",
        intro: "ブランド情報、画像権利、公開権限を確認し、企画、制作、運用の責任範囲を決めます。"
      },
      faq: {
        label: "FAQ",
        title: "運用相談の前に。"
      }
    },
    hero: {
      title: "その存在を、\n見つけられるものへ。",
      subtitle: "多言語のサービスサイトで、外国からのお客様がメニュー、予約、支払い、お願いしたいことをすぐ確認できる形に。文化差の整理と中国SNS運用まで支援します。",
      kicker: "日本国内の企業・店舗 × 外国からのお客様",
      rotatingWords: [
        "見つけられる",
        "理解される",
        "選ばれる",
        "記憶される"
      ],
      primaryAction: {
        label: "サービスサイトを見る",
        href: "#services"
      },
      secondaryAction: {
        label: "ブランド相談を申し込む",
        href: "#contact"
      },
      visualLabel: "多言語サービスサイト · 店頭案内 · SNS運用",
      marquee: "PRESENCE · CONTENT · OPERATION · DISCOVERY · その存在を、見つけられるものへ。 · "
    },
    philosophy: {
      body: "同じ行動でも、育った環境によって意味は変わります。ある人には自然な習慣が、別の人には失礼に見えることがあります。逆に、店側にとって当たり前のルールが、顧客には理由の分からない制限に見えることもあります。澜顷は、この前提のずれを整理し、相手を決めつけずに理解と次の行動へつなげる内容を作ります。",
      quote: "「失礼」や「差別」と解釈する前に、双方が知らないルールを一度ほどく。",
      visualLabel: "ブランドを整理する · 運用へつなぐ"
    },
    problems: [
      {
        title: "同じ行動が、別の意味になる",
        text: "飲み物や食べ物の扱い、分け方、注文の仕方など、当たり前だと思う行動が別の印象を与えることがあります。"
      },
      {
        title: "店のルールが、顧客には見えない",
        text: "最低注文、ワンドリンク、席料、支払い方法など、知っていれば選べる情報が入店前に伝わっていません。"
      },
      {
        title: "言葉が通じても、意図が伝わらない",
        text: "遠回しな表現や断り方、感情の表し方は、言葉を置き換えるだけでは伝わらないことがあります。"
      },
      {
        title: "コメントやDMで誤解が大きくなる",
        text: "短い返信や公開コメントは、意図と違う印象を与え、店舗と顧客の関係を難しくすることがあります。"
      },
      {
        title: "コンテンツは見られるが、理解されない",
        text: "写真や流行語だけでは、店の考え方、ルールの理由、選ぶ基準まで伝わりません。"
      },
      {
        title: "説明が人によって変わる",
        text: "店長、スタッフ、SNS担当が別々に説明すると、同じブランドなのに違う印象を与えます。"
      }
    ],
    approach: [
      {
        title: "前提をほどく",
        text: "文化差、生活習慣、店舗ルール、顧客の期待を整理し、誤解が生まれる場面を特定します。"
      },
      {
        title: "説明を設計する",
        text: "ルールの理由と代替案を、SNS、プロフィール、FAQ、店頭案内で一貫した言葉にします。"
      },
      {
        title: "運用へ組み込む",
        text: "投稿、コメント、DM、接客の確認フローに組み込み、担当者によって説明が変わらないようにします。"
      },
      {
        title: "対話から改善する",
        text: "実際の反応や質問を振り返り、誤解が起きやすい表現を次の運用で調整します。"
      }
    ],
    services: [
      {
        name: "多言語サービスサイト",
        summary: "現在の主な支援。外国客が必要な情報とお願いを、短い操作で見つけられる。",
        detail: "外国からのお客様が、メニュー、予約、支払い、サービス内容、お願いごとを確認できるサイトを設計・制作します。日本語・英語・中国語を基本に、QRコードから開く店頭利用、店員に見せる二言語画面に対応します。撮影、予約システム接続、外部サービス費用は別範囲です。",
        status: "現在の主な支援｜範囲確認後に見積り",
        action: "サービスサイトを相談",
        available: true
      },
      {
        name: "中国SNSアカウント運用",
        summary: "プロフィール、コンテンツ、公開から改善まで。",
        detail: "ひとつのプラットフォームを対象に、月間テーマ、コンテンツ制作、公開リズム、プロフィール情報、運用レビューを設計します。小紅書を中心に、WeChat、抖音、大衆点評等は各平台の条件と対応範囲を確認します。撮影、広告、インフルエンサー、DM対応は別途見積ります。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "アカウント運用を相談",
        available: true
      },
      {
        name: "異文化コンテンツ・顧客コミュニケーション設計",
        summary: "文化差から生まれる誤解を、先に説明できる内容へ。",
        detail: "店舗ルール、生活習慣、注文・支払い・接客の違いを整理し、中国語のFAQ、SNS投稿、プロフィール、短い店頭案内へ落とし込みます。すべての文化を一般化せず、店舗ごとの事実と目的を確認します。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "コミュニケーションを相談",
        available: true
      },
      {
        name: "多言語コンテンツ・ローカライズ",
        summary: "翻訳調ではなく、その市場で自然に読める表現へ。",
        detail: "中国語、日本語、英語などのブランド情報、Web、メニュー、SNS投稿、店舗案内を整理します。事実確認、用語統一、読みやすさの調整を含めます。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "多言語化を相談",
        available: true
      },
      {
        name: "プラットフォーム別素材制作",
        summary: "既存の写真や動画を、SNSや店頭画面向けに作り直す。",
        detail: "Instagram等の既存素材を確認し、タイトル、本文、画像順、短尺動画の構成、プロフィール素材へ再編集します。新規撮影、権利処理、公開は範囲を分けます。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "素材を見直したい",
        available: true
      },
      {
        name: "コンテンツ改善・運用レビュー",
        summary: "サイトとSNSの反応を、次の改善につなげる。",
        detail: "取得できる平台データ、保存・反応、サイト上でよく選ばれる項目、顧客側のフィードバックを整理し、内容と導線の改善を提案します。売上や集客結果は保証しません。",
        status: "条件確認後に実施",
        action: "改善を相談",
        available: true
      }
    ],
    experienceGuide: {
      label: "05 / Guest Service Site",
      title: "ことばを選び、店員にそのまま見せる。",
      text: "外国客がよく使うサービスやお願いを選ぶと、相手の言語と日本語を同時に表示します。メニュー、予約、支払いなどの案内を、店頭でもWebでも同じ情報に整えます。",
      centerLabel: "GUEST\nSERVICE",
      items: [
        "サービス",
        "予約",
        "注文",
        "食事制限",
        "支払い",
        "助けが必要"
      ],
      visualLabel: "多言語サービスサイトの操作例",
      chooseLanguage: "お客様の言語",
      requestListLabel: "よく使うサービス・お願い",
      staffLabel: "店員に見せる日本語",
      demoHint: "項目を選ぶと、表示が切り替わります。"
    },
    process: [
      {
        title: "ブランドと現状を確認",
        text: "企業・店舗の情報、既存SNS、素材、課題、目指したい状態を伺います。"
      },
      {
        title: "診断と運用範囲を決定",
        text: "平台、投稿数、制作、公開、コメント対応、レポート、除外項目を書面で決めます。"
      },
      {
        title: "内容設計と素材確認",
        text: "投稿テーマ、プロフィール、ビジュアル、事実確認、画像利用権を整理します。"
      },
      {
        title: "制作と公開",
        text: "合意した内容を制作し、確認担当者の承認後に公開します。公開権限と責任範囲を明確にします。"
      },
      {
        title: "レビューと改善",
        text: "取得できるデータと運用上の課題を振り返り、次月の内容と進め方を調整します。"
      }
    ],
    cases: [
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
    pricing: [
      {
        name: "サイト・アカウント診断",
        audience: "既存のWeb、SNS、店内案内を見直したい企業・店舗",
        price: "固定範囲で個別見積り",
        features: [
          "外国客の導線と情報の抜けを確認",
          "ブランド・文化差・素材の課題を整理",
          "サービスサイトと運用の優先順位を提示"
        ],
        action: "診断を相談",
        featured: false
      },
      {
        name: "多言語サービスサイト",
        audience: "外国客がサービス、メニュー、予約、支払いをすぐ確認できるサイトが必要な企業・店舗",
        price: "固定範囲で個別見積り",
        features: [
          "日英中のサービスサイト",
          "よく使うお願いと店員向け表示",
          "スマートフォン・QR導線",
          "決めた範囲の修正と公開"
        ],
        action: "サイト制作を相談",
        featured: false
      },
      {
        name: "SNSアカウント運用",
        audience: "サービスサイトと合わせて中国SNSを継続運用したい企業・店舗",
        price: "固定範囲で個別見積り",
        features: [
          "月間テーマと投稿制作",
          "プロフィールと固定投稿",
          "公開と運用記録",
          "月次レビュー"
        ],
        action: "運用を相談",
        featured: false
      }
    ],
    vision: {
      label: "09 / Vision",
      title: "見つけられるべきブランドに、\n自分の言葉とリズムを。",
      text: "企業や店舗が大切にしてきた価値が、中国語圏でも正しく伝わる。そのために必要な内容、運用、店舗情報を、澜顷は一つずつ整えていきます。"
    },
    about: {
      team: "澜顷は福岡を拠点とする個人プロジェクトです。多言語コンテンツと中国SNS運用を、単発診断または月次支援として提供します。",
      founder: "澜顷がブランド整理、コンテンツ企画、多言語表現、アカウント運用を担当します。対象平台と公開権限は案件ごとに確認します。",
      background: "企業・店舗には、商品、価格、店舗、予約、素材権利、アカウント権限を確認していただきます。",
      philosophy: "広告、インフルエンサー、DM対応、成果保証は別条件です。内容と運用の範囲を先に決め、記録を残します。",
      teamImage: "ブランド整理から運用までの責任",
      partnerLogos: [
        "ブランド情報を共同確認",
        "内容設計を公開前に決定",
        "アカウント権限を明確化",
        "月次レビューで調整"
      ]
    },
    faqs: [
      {
        question: "具体的には何を支援していますか？",
        answer: "多言語サービスサイト、中国SNSアカウント運用、異文化コミュニケーション設計、多言語ローカライズ、素材制作、運用レビューです。WebとSNSを一緒に整えることも、片方だけから始めることもできます。"
      },
      {
        question: "多言語のサービスサイトだけ作れますか？",
        answer: "できます。日英中を基本に、店舗情報、メニュー、予約、支払い、お願いごとを整理し、スマートフォンからすぐ開ける構成にします。撮影、予約システム連携、公開後の運用は別途確認します。"
      },
      {
        question: "小紅書のアカウント運用も相談できますか？",
        answer: "相談できます。対象平台、投稿数、素材、公開権限、コメント対応、撮影の有無を確認し、実施できる範囲を先に決めます。"
      },
      {
        question: "翻訳やコンテンツ作成だけでも依頼できますか？",
        answer: "できます。多言語ローカライズや単発コンテンツとして請けます。アカウント運用は別の範囲です。"
      },
      {
        question: "投稿の公開やコメント返信も含まれますか？",
        answer: "制作と公開は分けています。SNS投稿、コメント、DM、サイト更新が必要な場合は、権限、媒体ルール、作業時間を確認したうえで別途判断します。"
      },
      {
        question: "料金はどのように決まりますか？",
        answer: "対象平台、投稿数、撮影、制作、公開、コメント対応、レポートの範囲で個別見積りになります。"
      },
      {
        question: "文化の違いによる誤解には、どう対応しますか？",
        answer: "まず、どの行動がどのように誤解されているかを整理します。そのうえで、店舗のルール、理由、代替案を中国語のFAQやSNS、店頭案内に一貫して配置します。どちらかの文化を正しい・間違いと決めつけません。"
      },
      {
        question: "アカウントがなくても相談できますか？",
        answer: "できます。まず平台とアカウントの必要性を整理し、開設条件や運用開始までの手順をご案内します。"
      },
      {
        question: "フォロワーや来店数を保証できますか？",
        answer: "できません。平台環境や店舗運営に左右されます。澜顷は、ブランド情報の整理、内容設計、制作、運用と改善の範囲を担います。"
      }
    ],
    contact: {
      email: "wanslan1130@gmail.com",
      note: "送信ボタンを押すと、入力内容がお使いのメールアプリへ引き継がれます。このサイト上には保存されません。",
      services: [
        "多言語サービスサイト",
        "中国SNSアカウント運用",
        "異文化コンテンツ・顧客コミュニケーション設計",
        "多言語コンテンツ・ローカライズ",
        "プラットフォーム別素材制作",
        "コンテンツ改善・運用レビュー",
        "その他"
      ],
      socials: [],
      form: {
        name: "お名前 *",
        namePlaceholder: "山田 花子",
        company: "会社・店舗名",
        companyPlaceholder: "店舗名をご入力ください",
        email: "メールアドレス *",
        website: "Webサイト・SNS",
        service: "ご相談内容",
        choose: "選択してください",
        message: "メッセージ *",
        messagePlaceholder: "企業・店舗の概要、現在のWebやSNS、必要な言語、載せたいサービスやお願い、困っている場面をご記入ください。",
        submit: "メールで相談を送る",
        notice: "メールアプリを開きました。起動しない場合は、表示されているメールアドレスへ直接お送りください。"
      }
    },
    footer: {
      description: "日本国内の企業・店舗・ブランドが、多言語サービスサイトと中国SNS運用を通じて、外国のお客様から見つけられ、理解され、選ばれる状態をつくります。",
      motifWords: [
        "PRESENCE",
        "CONTENT",
        "OPERATION",
        "EXPERIENCE"
      ],
      privacyLabel: "プライバシー",
      privacyBody: "お問い合わせフォームは、入力内容をお使いのメールアプリへ引き継ぎます。このWebサイト自体には保存しません。受信した氏名、メールアドレス、会社・店舗名、相談内容は、返信と相談対応にのみ使用します。法令上必要な場合を除き、同意なく第三者へ提供しません。開示、訂正、削除のご相談は掲載メールアドレスまでご連絡ください。",
      copyright: "© 2026 澜顷. All rights reserved."
    }
  },
  en: {
    seo: {
      title: "澜顷 | Multilingual Service Sites & China Social Media Operations",
      description: "We build multilingual service sites for foreign customers and support China social media content, cultural communication and account operations for Japan-based businesses."
    },
    ui: {
      language: "Choose language",
      menu: "Menu",
      close: "Close",
      mainNavigation: "Main navigation",
      sectionProgress: "Section progress",
      scroll: "Scroll to explore ↓",
      from: "Help your brand",
      visualIndex: "BRAND OPERATIONS / 01",
      consultService: "Discuss operations",
      comingSoon: "Illustrative service scenario, not a client case",
      servicesLabel: "Operations support",
      resultLabel: "Deliverables",
      viewCase: "Discuss this operating scenario",
      recommended: "Current focus",
      startConversation: "Book a brand consultation",
      team: "Current setup",
      founder: "What 澜顷 handles",
      background: "What the business confirms",
      workingPhilosophy: "Operating principles",
      partners: "How we work",
      faqMissing: "Have another question?",
      faqContact: "Ask by email →",
      contactLabel: "12 / Contact",
      contactTitle: "Help your brand get discovered,\nstarting with stronger content.",
      contactIntro: "Tell us about the business, current social channels, available assets and the outcome you want. We will first identify the gap, then define a workable operating scope.",
      contact: "Contact",
      backToTop: "Back to top ↑",
      seal: "澜",
      skipToContent: "Skip to content"
    },
    brand: {
      name: "澜顷",
      eyebrow: "Multilingual service sites × China social media operations",
      description: "澜顷 builds easy multilingual service sites for foreign customers and supports Japan-based businesses with cultural communication and China social media operations."
    },
    navigation: [
      {
        label: "Home",
        href: "#home"
      },
      {
        label: "Approach",
        href: "#philosophy"
      },
      {
        label: "Support",
        href: "#services"
      },
      {
        label: "Process",
        href: "#process"
      },
      {
        label: "Scenarios",
        href: "#cases"
      },
      {
        label: "Quotes",
        href: "#pricing"
      },
      {
        label: "Roles",
        href: "#about"
      },
      {
        label: "FAQ",
        href: "#faq"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ],
    scenes: [
      {
        label: "Home",
        href: "#home"
      },
      {
        label: "Approach",
        href: "#philosophy"
      },
      {
        label: "Problems",
        href: "#problems"
      },
      {
        label: "Method",
        href: "#approach"
      },
      {
        label: "Support",
        href: "#services"
      },
      {
        label: "Visitor info",
        href: "#experience"
      },
      {
        label: "Process",
        href: "#process"
      },
      {
        label: "Scenarios",
        href: "#cases"
      },
      {
        label: "Quotes",
        href: "#pricing"
      },
      {
        label: "Vision",
        href: "#vision"
      },
      {
        label: "Roles",
        href: "#about"
      },
      {
        label: "FAQ",
        href: "#faq"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ],
    sections: {
      philosophy: {
        label: "Philosophy",
        title: "Beyond language, another set of default rules.",
        intro: "Both sides often assume their own unspoken expectations are shared by the other."
      },
      problems: {
        label: "Problems",
        title: "Content is being posted, but the brand is not building.",
        intro: "The business asks why a rule was ignored. The customer asks why nobody understood them. The answer needs explanation plus a clear next step."
      },
      approach: {
        label: "Approach",
        title: "Understand the difference. Build the operation.",
        intro: "We define who the content is for, what it should say and in what order before building the account."
      },
      services: {
        label: "Services",
        title: "From the first page a visitor opens to ongoing social operations.",
        intro: "Organize shop information, menus, booking, payment and common requests in multiple languages, then continue into China social media if needed."
      },
      process: {
        label: "Process",
        title: "Strategy first. Then a repeatable production rhythm.",
        intro: "We organize the brand and cultural context first, then build a rhythm for production, publishing and review."
      },
      cases: {
        label: "Use Scenarios",
        title: "Three situations that need explanation.",
        intro: "These are fictional service scenarios for explaining scope. They are not real clients, results or testimonials."
      },
      pricing: {
        label: "Work & Quotes",
        title: "Quote the site, content and operations separately.",
        intro: "A multilingual service site, content production and social operations can each start separately."
      },
      about: {
        label: "Roles",
        title: "Who creates the content, and who approves it.",
        intro: "Brand facts, media rights and account permissions are confirmed before we define production and operating responsibilities."
      },
      faq: {
        label: "FAQ",
        title: "Before we discuss operations."
      }
    },
    hero: {
      title: "Let your presence\nbe discovered.",
      subtitle: "We build multilingual service sites where foreign customers can quickly find menus, booking, payment and common requests, with cultural context and China social media operations built in.",
      kicker: "Japan-based businesses and shops × international customers",
      rotatingWords: [
        "be found",
        "be understood",
        "be chosen",
        "be remembered"
      ],
      primaryAction: {
        label: "Explore service sites",
        href: "#services"
      },
      secondaryAction: {
        label: "Book a consultation",
        href: "#contact"
      },
      visualLabel: "Multilingual service sites · guest guidance · social operations",
      marquee: "PRESENCE · CONTENT · OPERATION · DISCOVERY · HELP YOUR BRAND BE FOUND · "
    },
    philosophy: {
      body: "The same action can carry different meanings depending on where someone learned it. A habit that feels natural to one person may look rude to another. A rule that feels obvious to a business may look like an unexplained restriction to a customer. 澜顷 organizes these gaps in context, without treating either side as the problem, and turns them into information that helps people understand and act.",
      quote: "Before calling something rude or discriminatory, unpack the rule neither side has explained.",
      visualLabel: "ORGANIZE THE BRAND · BUILD THE OPERATION"
    },
    problems: [
      {
        title: "The same action means different things",
        text: "How people bring food or drink, share dishes or order can feel ordinary in one setting and create a different impression in another."
      },
      {
        title: "Shop rules are invisible to customers",
        text: "Minimum orders, one-drink policies, table charges and payment methods are hard to choose around when nobody explains them before entry."
      },
      {
        title: "Words translate; intent still gets lost",
        text: "Indirect expression, refusal and emotional tone may not survive a word-for-word change."
      },
      {
        title: "Comments and DMs enlarge the misunderstanding",
        text: "A short public reply can create an impression very different from what the business intended."
      },
      {
        title: "Content gets attention without building understanding",
        text: "Photos and trending phrases do not explain the business, the reason for a rule or how to choose."
      },
      {
        title: "Every staff member explains it differently",
        text: "When the owner, staff and social team improvise separately, customers meet several versions of the same brand."
      }
    ],
    approach: [
      {
        title: "Unpack the assumptions",
        text: "We review cultural expectations, daily habits, shop rules and customer questions to identify where interpretation breaks."
      },
      {
        title: "Design the explanation",
        text: "The rule, its reason and a practical alternative become consistent content across the profile, social posts, FAQ and storefront."
      },
      {
        title: "Build it into operations",
        text: "Publishing, comments, DMs and frontline responses follow an agreed reference so the explanation stays consistent."
      },
      {
        title: "Improve through the conversation",
        text: "Questions and responses are reviewed to refine the phrases and situations that cause the most confusion."
      }
    ],
    services: [
      {
        name: "Multilingual service sites",
        summary: "Our current focus. Make essential information and common requests easy to find in a few taps.",
        detail: "We design and build a site where international customers can check services, menus, booking, payment and common requests. Japanese, English and Chinese are the baseline, with QR access and a bilingual screen the customer can show to staff. Photography, booking-system integration and third-party fees are separate.",
        status: "Current focus | Quote after review",
        action: "Discuss a service site",
        available: true
      },
      {
        name: "China social media account operations",
        summary: "From profile and content to publishing and review.",
        detail: "For one platform, we design monthly themes, production, publishing rhythm, profile information and an operating review. Xiaohongshu is the starting point; WeChat, Douyin and Dianping require a separate platform review.",
        status: "Core service | Quote after review",
        action: "Discuss account operations",
        available: true
      },
      {
        name: "Cross-cultural content and customer communication",
        summary: "Explain the cultural gap before it is read as bad behaviour.",
        detail: "We organize shop rules, everyday habits, ordering, payment and service expectations into Chinese FAQs, social posts, profile content and short storefront guidance. We avoid cultural stereotypes and ground the work in the specific business.",
        status: "Core service | Quote after review",
        action: "Discuss communication",
        available: true
      },
      {
        name: "Multilingual content and localization",
        summary: "Natural language for the audience, not translation-shaped text.",
        detail: "We adapt brand information, websites, menus, social posts and visitor guidance across Chinese, Japanese and English, including fact checks, terminology and readability.",
        status: "Core service | Quote after review",
        action: "Discuss localization",
        available: true
      },
      {
        name: "Cross-platform asset production",
        summary: "Rebuild existing photos and video for social and in-store screens.",
        detail: "We review existing assets and reshape titles, captions, image order, short-video structure and profile visuals. New photography, rights and publishing are separate.",
        status: "Core service | Quote after review",
        action: "Review current assets",
        available: true
      },
      {
        name: "Content review and experience optimization",
        summary: "Use available signals to improve the next version.",
        detail: "We review accessible platform data, saves and responses, the items visitors select most often on the site, and client feedback. We do not guarantee traffic, visits or sales outcomes.",
        status: "Subject to account access",
        action: "Discuss improvements",
        available: true
      }
    ],
    experienceGuide: {
      label: "05 / Guest Service Site",
      title: "Choose a language. Show it to staff.",
      text: "The visitor chooses a common service or request and sees their language next to Japanese. Menus, booking and payment guidance stay consistent online and in the store.",
      centerLabel: "GUEST\nSERVICE",
      items: [
        "Services",
        "Booking",
        "Order",
        "Dietary needs",
        "Payment",
        "Need help"
      ],
      visualLabel: "Interactive multilingual service site",
      chooseLanguage: "Visitor language",
      requestListLabel: "Common services and requests",
      staffLabel: "Japanese shown to staff",
      demoHint: "Choose an item to switch the screen."
    },
    process: [
      {
        title: "Review the brand and current channels",
        text: "We review the business, existing social accounts, assets, problems and desired state."
      },
      {
        title: "Diagnose and define the operating scope",
        text: "Platform, content volume, production, publishing, community management, reporting and exclusions are agreed in writing."
      },
      {
        title: "Design content and confirm assets",
        text: "We define themes, profile, visuals, facts and media permissions before production."
      },
      {
        title: "Produce and publish",
        text: "Content is produced within scope and published after the designated approver signs off. Access and responsibility are documented."
      },
      {
        title: "Review and improve",
        text: "Available data and operating issues are reviewed together, then the next content and working rhythm are adjusted."
      }
    ],
    cases: [
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
    pricing: [
      {
        name: "Site and account diagnosis",
        audience: "For a business reviewing its current website, social presence and guest guidance",
        price: "Individual quote after fixed-scope review",
        features: [
          "Review the international guest pathway",
          "Map brand, cultural and asset gaps",
          "Prioritize site and operating work"
        ],
        action: "Discuss a diagnosis",
        featured: false
      },
      {
        name: "Multilingual service site",
        audience: "For a business that needs foreign customers to find services, menus, booking and payment quickly",
        price: "Individual quote after fixed-scope review",
        features: [
          "Japanese, English and Chinese baseline",
          "Common requests and staff-facing view",
          "Mobile and QR pathway",
          "Agreed revisions and release"
        ],
        action: "Discuss the site",
        featured: false
      },
      {
        name: "Social account operations",
        audience: "For a business that wants to operate China social media alongside the service site",
        price: "Individual quote after fixed-scope review",
        features: [
          "Monthly themes and production",
          "Profile and pinned content",
          "Publishing and operating records",
          "Monthly review"
        ],
        action: "Discuss operations",
        featured: false
      }
    ],
    vision: {
      label: "09 / Vision",
      title: "For every brand worth finding,\na voice and rhythm of its own.",
      text: "The value a business has built should carry clearly into Chinese-language markets. 澜顷 organizes the content, operations and shop information needed for that to happen."
    },
    about: {
      team: "澜顷 is currently an independent project based in Fukuoka, providing multilingual content and China social media operations through one-off diagnosis or monthly support.",
      founder: "澜顷 handles brand review, content strategy, multilingual expression and account operations. Platform access and publishing authority are confirmed per project.",
      background: "The business confirms products, prices, store information, booking details, media rights and account permissions.",
      philosophy: "Ads, creators, direct-message handling and performance guarantees require separate terms. The content and operating scope are agreed and recorded first.",
      teamImage: "RESPONSIBILITY FROM BRAND REVIEW TO OPERATIONS",
      partnerLogos: [
        "Brand facts confirmed together",
        "Content strategy approved before publishing",
        "Account access made explicit",
        "Monthly review guides the next round"
      ]
    },
    faqs: [
      {
        question: "What exactly do you support?",
        answer: "Multilingual service sites, China social media account operations, cross-cultural communication design, localization, asset production and operating reviews. We can connect the website and social operation, or begin with either one."
      },
      {
        question: "Can you build only the multilingual service site?",
        answer: "Yes. We can build a mobile-first site in Japanese, English and Chinese for services, menus, booking, payment and common requests. Photography, booking-system connections and ongoing updates are scoped separately."
      },
      {
        question: "Can you operate a Xiaohongshu account?",
        answer: "Yes, subject to a platform review. We confirm the channel, publishing volume, assets, permissions, community management and photography before defining the scope."
      },
      {
        question: "Can I buy translation or content production only?",
        answer: "Yes. It can be scoped as multilingual localization or one-off content. Account operations are a separate service."
      },
      {
        question: "Does operations include publishing and replies?",
        answer: "Production and publishing are separate. Social posting, comments, direct messages and site updates are considered after checking access, platform rules and the work required."
      },
      {
        question: "How is pricing decided?",
        answer: "The quote reflects the platform, content volume, photography, production, publishing, community management and reporting."
      },
      {
        question: "How do you handle misunderstandings caused by cultural differences?",
        answer: "We first identify which action is being interpreted in what way. Then we explain the shop's rule, its reason and a possible alternative consistently across Chinese FAQs, social content and storefront guidance. We do not decide that one culture is right and the other is wrong."
      },
      {
        question: "Can we start without an account?",
        answer: "Yes. We first check whether the platform and an account are necessary, then explain the setup and operating path."
      },
      {
        question: "Can you guarantee followers or store visits?",
        answer: "No. Platform conditions and business operations affect those outcomes. 澜顷 is responsible for the agreed brand, content, production and operating work."
      }
    ],
    contact: {
      email: "wanslan1130@gmail.com",
      note: "The submit button transfers your message to your own email application. This website does not store the information.",
      services: [
        "Multilingual service sites",
        "China social media account operations",
        "Cross-cultural content and customer communication",
        "Multilingual content and localization",
        "Cross-platform asset production",
        "Content review and experience optimization",
        "Other"
      ],
      socials: [],
      form: {
        name: "Name *",
        namePlaceholder: "Your name",
        company: "Company / shop",
        companyPlaceholder: "Business name",
        email: "Email *",
        website: "Website or social profile",
        service: "What would you like to discuss?",
        choose: "Choose an option",
        message: "Message *",
        messagePlaceholder: "Tell us about the business, current website and social channels, required languages, services and guest requests to include, and the situations that cause friction.",
        submit: "Send enquiry by email",
        notice: "Your email application has been opened. If it does not launch, email the address shown on this page directly."
      }
    },
    footer: {
      description: "Helping Japan-based businesses and shops become found, understood and chosen by international customers through multilingual service sites and China social media operations.",
      motifWords: [
        "PRESENCE",
        "CONTENT",
        "OPERATION",
        "EXPERIENCE"
      ],
      privacyLabel: "Privacy",
      privacyBody: "This form transfers the information you enter to your own email application and does not store it on the website. Any name, email address, business name and enquiry content we receive is used only to reply and handle the enquiry. We do not share it without consent unless required by law. Contact the email shown here for access, correction or deletion requests.",
      copyright: "© 2026 澜顷. All rights reserved."
    }
  },
  zh: {
    seo: {
      title: "澜顷｜多语言服务网站与中国社交媒体运营",
      description: "面向日本本地企业、门店与品牌，制作方便外国顾客使用的多语言服务网站，并提供文化沟通、内容策划与中国社交媒体运营支持。"
    },
    ui: {
      language: "选择语言",
      menu: "菜单",
      close: "关闭",
      mainNavigation: "主导航",
      sectionProgress: "页面进度",
      scroll: "向下查看 ↓",
      from: "让品牌",
      visualIndex: "品牌运营 / 01",
      consultService: "咨询运营方案",
      comingSoon: "服务场景示例，不是客户案例",
      servicesLabel: "运营支持",
      resultLabel: "交付内容",
      viewCase: "咨询这个运营场景",
      recommended: "当前主推",
      startConversation: "预约品牌咨询",
      team: "当前团队",
      founder: "澜顷负责",
      background: "客户确认",
      workingPhilosophy: "运营原则",
      partners: "合作方式",
      faqMissing: "还有其他想问的吗？",
      faqContact: "直接发邮件提问 →",
      contactLabel: "12 / Contact",
      contactTitle: "让你的品牌，\n从一条好内容开始被看见。",
      contactIntro: "请告诉我们品牌现状、已有社交账号、手头素材和希望达到的状态。我们会先判断问题，再给出可执行的运营范围。",
      contact: "联系咨询",
      backToTop: "返回顶部 ↑",
      seal: "澜",
      skipToContent: "跳到正文"
    },
    brand: {
      name: "澜顷",
      eyebrow: "多语言服务网站 × 中国社交媒体运营",
      description: "澜顷为日本本地企业、门店与品牌制作方便外国顾客使用的多语言服务网站，并提供文化沟通与中国社交媒体运营支持。"
    },
    navigation: [
      {
        label: "首页",
        href: "#home"
      },
      {
        label: "理念",
        href: "#philosophy"
      },
      {
        label: "服务",
        href: "#services"
      },
      {
        label: "流程",
        href: "#process"
      },
      {
        label: "场景",
        href: "#cases"
      },
      {
        label: "报价",
        href: "#pricing"
      },
      {
        label: "分工",
        href: "#about"
      },
      {
        label: "FAQ",
        href: "#faq"
      },
      {
        label: "联系",
        href: "#contact"
      }
    ],
    scenes: [
      {
        label: "首页",
        href: "#home"
      },
      {
        label: "理念",
        href: "#philosophy"
      },
      {
        label: "问题",
        href: "#problems"
      },
      {
        label: "方法",
        href: "#approach"
      },
      {
        label: "服务",
        href: "#services"
      },
      {
        label: "访客信息",
        href: "#experience"
      },
      {
        label: "流程",
        href: "#process"
      },
      {
        label: "场景",
        href: "#cases"
      },
      {
        label: "报价",
        href: "#pricing"
      },
      {
        label: "愿景",
        href: "#vision"
      },
      {
        label: "分工",
        href: "#about"
      },
      {
        label: "FAQ",
        href: "#faq"
      },
      {
        label: "联系",
        href: "#contact"
      }
    ],
    sections: {
      philosophy: {
        label: "理念",
        title: "语言之外，还有一套默认规则。",
        intro: "很多沟通困难，来自双方都以为对方知道自己的前提。"
      },
      problems: {
        label: "问题",
        title: "内容有发，品牌却没有真正建立起来。",
        intro: "店家在想“为什么不遵守”，顾客在想“为什么没人理解我”。这时需要的，是解释和下一步，而不只是更准确的翻译。"
      },
      approach: {
        label: "方法",
        title: "先理解差异，再建立运营。",
        intro: "先确定对谁说、说什么、按什么顺序说，再建立内容和运营节奏。"
      },
      services: {
        label: "服务",
        title: "从外国顾客打开的第一个页面，到社交媒体运营。",
        intro: "把门店信息、菜单、预约、支付和常见请求用多种语言整理清楚，需要时再继续接入中国社交媒体运营。"
      },
      process: {
        label: "流程",
        title: "先定策略，再进入稳定生产。",
        intro: "先整理品牌与文化语境，再建立制作、发布和复盘的节奏。"
      },
      cases: {
        label: "场景",
        title: "三种需要被解释的沟通场景。",
        intro: "下面是帮助理解服务范围的虚构场景，不对应真实客户、实绩或成果。"
      },
      pricing: {
        label: "合作与报价",
        title: "网站、内容和运营，分开计算。",
        intro: "多语言服务网站、内容制作和社交媒体运营可以分别开始。"
      },
      about: {
        label: "分工",
        title: "谁负责内容，谁负责确认。",
        intro: "品牌事实、素材权利和账号权限确认后，再确定策划、制作与运营的责任。"
      },
      faq: {
        label: "常见问题",
        title: "运营咨询之前。"
      }
    },
    hero: {
      title: "让你的存在，\n被发现。",
      subtitle: "为外国顾客制作能用、能点、能直接给店员看的服务网站：选择语言，查看菜单、预约、支付和常见请求，也提供文化沟通与中国社交媒体运营。",
      kicker: "日本本地企业、门店与品牌 × 外国顾客",
      rotatingWords: [
        "被看见",
        "被理解",
        "被选择",
        "被记住"
      ],
      primaryAction: {
        label: "查看服务网站",
        href: "#services"
      },
      secondaryAction: {
        label: "预约品牌咨询",
        href: "#contact"
      },
      visualLabel: "多语言服务网站 · 店内导航 · 社媒运营",
      marquee: "PRESENCE · CONTENT · OPERATION · DISCOVERY · 让你的存在被发现 · "
    },
    philosophy: {
      body: "同一个动作，在不同的生活经验里可能有完全不同的含义。有人觉得只是习惯，另一方却可能感到被冒犯；店家眼中的正常规则，在顾客看来也可能像没有理由的限制。澜顷把这些没有被说清的前提整理出来，不急着判断谁对谁错，而是把原因、边界和可替代的做法写进内容与运营。",
      quote: "在把它理解为“没礼貌”或“被歧视”之前，先把双方都不知道的规则说清。",
      visualLabel: "梳理品牌 · 建立运营"
    },
    problems: [
      {
        title: "同一个动作，被理解成不同意思",
        text: "自带饮品、分享食物、点单方式或结账习惯，在一方看来很自然，另一方却可能得到完全不同的印象。"
      },
      {
        title: "店里的规则，顾客事先看不见",
        text: "最低消费、一人一杯、座位费、支付方式，如果进店前没有说明，顾客就很难提前选择。"
      },
      {
        title: "语言翻译了，语气和意图却没有",
        text: "委婉表达、拒绝方式、情绪强弱，只靠词语替换并不一定能让对方理解真实意思。"
      },
      {
        title: "评论和私信会放大误会",
        text: "一条很短的公开回复，可能让顾客读到与店家本意完全不同的态度。"
      },
      {
        title: "内容有热度，却没有解释品牌",
        text: "照片和流行语能让内容被看见，却不等于说明店铺为什么这样做、顾客该怎样选择。"
      },
      {
        title: "同一个人一种解释，品牌就不一致",
        text: "店主、店员和社交媒体负责人如果各自临场解释，顾客会接触到好几个版本的门店形象。"
      }
    ],
    approach: [
      {
        title: "拆开双方默认的前提",
        text: "梳理文化习惯、门店规则、顾客疑问和常见反应，找出最容易产生不同理解的位置。"
      },
      {
        title: "把原因和做法写清",
        text: "把规则、原因与替代方案整理成一致的内容，放进账号简介、帖子、FAQ 和店内说明。"
      },
      {
        title: "放进日常运营",
        text: "把说明接入内容发布、评论、私信和一线接待，让不同人对外表达同一个品牌。"
      },
      {
        title: "从互动里继续调整",
        text: "观察顾客反复提出的问题与反应，修正最容易造成误解的说法和场景。"
      }
    ],
    services: [
      {
        name: "多语言服务网站",
        summary: "当前主推。让外国顾客几步之内找到服务、信息和想提出的请求。",
        detail: "设计和制作方便外国顾客查看服务、菜单、预约、支付和常见请求的网站。以日语、英语、中文为基础，支持扫码打开、手机浏览，以及顾客点选后直接给店员看的双语界面。拍摄、预约系统对接和第三方服务费用另计。",
        status: "当前主推｜确认范围后报价",
        action: "咨询服务网站",
        available: true
      },
      {
        name: "中国社交媒体账号运营",
        summary: "从主页、内容到发布与复盘。",
        detail: "围绕一个平台，设计每月主题、内容制作、发布节奏、主页信息与运营复盘。以小红书为起点，微信公众号、抖音、大众点评等平台需单独确认条件与范围。",
        status: "主要服务｜确认范围后报价",
        action: "咨询账号运营",
        available: true
      },
      {
        name: "跨文化内容与顾客沟通",
        summary: "在文化差异被理解成“失礼”之前，先把原因讲清楚。",
        detail: "梳理门店规则、生活习惯、点单、支付和接待方式的差异，整理成中文 FAQ、社媒内容、账号简介和简短店内说明。不会用刻板印象概括整个文化，所有表达都回到具体门店。",
        status: "主要服务｜确认范围后报价",
        action: "咨询文化沟通",
        available: true
      },
      {
        name: "多语言内容与本地化",
        summary: "写得像当地内容，而不是翻译稿。",
        detail: "整理中文、日语、英语等品牌资料、网站、菜单、社交内容和门店说明，包含事实确认、术语统一与阅读节奏调整。",
        status: "主要服务｜确认范围后报价",
        action: "咨询多语言化",
        available: true
      },
      {
        name: "跨平台素材再制作",
        summary: "把现有照片和视频，改成社交媒体和店内屏幕都能用的内容。",
        detail: "盘点 Instagram 等现有素材，重新设计标题、正文、图片顺序、短视频结构和主页视觉。新拍摄、版权处理与公开另行确认。",
        status: "主要服务｜确认范围后报价",
        action: "咨询素材改造",
        available: true
      },
      {
        name: "内容与体验复盘",
        summary: "根据已有记录，调整下一轮内容和网站。",
        detail: "整理可获取的平台数据、收藏反馈、网站常被点选的项目和客户反馈，提出内容与路径改进建议。流量、到店和销售结果不作保证。",
        status: "确认权限后承接",
        action: "咨询优化方案",
        available: true
      }
    ],
    experienceGuide: {
      label: "05 / Guest Service Site",
      title: "选择语言，直接给店员看。",
      text: "外国顾客选择常用服务或请求，屏幕会同时显示顾客语言和日语。菜单、预约、支付等信息在网站和店内保持一致。",
      centerLabel: "顾客\n服务",
      items: [
        "店内服务",
        "预约",
        "点单",
        "饮食限制",
        "支付",
        "需要帮助"
      ],
      visualLabel: "多语言服务网站交互示例",
      chooseLanguage: "顾客语言",
      requestListLabel: "常用服务与请求",
      staffLabel: "给店员看的日语",
      demoHint: "点击项目，右侧画面会切换。"
    },
    process: [
      {
        title: "了解品牌与现状",
        text: "确认企业或门店的信息、已有社媒账号、素材、问题和希望达到的状态。"
      },
      {
        title: "诊断并确定运营范围",
        text: "书面确认平台、内容数量、制作、发布、评论管理、复盘和排除项。"
      },
      {
        title: "设计内容与确认素材",
        text: "确定主页、栏目、视觉和语气，并核对品牌事实与素材使用权。"
      },
      {
        title: "制作与发布",
        text: "按约定完成内容，由指定负责人确认后发布；账号权限与责任范围明确记录。"
      },
      {
        title: "复盘与调整",
        text: "整理可获取的数据和运营问题，调整下一阶段的内容与执行节奏。"
      }
    ],
    cases: [
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
    ],
    pricing: [
      {
        name: "网站与账号诊断",
        audience: "想检查现有网站、社交媒体和店内说明的企业或门店",
        price: "固定范围，个别报价",
        features: [
          "检查外国顾客的使用路径",
          "梳理品牌、文化差异和素材问题",
          "给出网站与运营的优先顺序"
        ],
        action: "咨询诊断",
        featured: false
      },
      {
        name: "多语言服务网站",
        audience: "需要外国顾客快速查看服务、菜单、预约和支付方式的商家",
        price: "固定范围，个别报价",
        features: [
          "日语、英语、中文基础版本",
          "常用请求与店员展示页",
          "手机与扫码入口",
          "约定范围内的修改和发布"
        ],
        action: "咨询网站制作",
        featured: false
      },
      {
        name: "社交媒体账号运营",
        audience: "希望把服务网站与中国社交媒体一起持续经营的商家",
        price: "固定范围，个别报价",
        features: [
          "每月主题与内容制作",
          "主页与置顶内容",
          "发布和运营记录",
          "月度复盘"
        ],
        action: "咨询账号运营",
        featured: false
      }
    ],
    vision: {
      label: "09 / 愿景",
      title: "让每个本该被看见的品牌，\n拥有自己的表达与节奏。",
      text: "企业或门店长期积累的价值，应当在中文语境里被正确理解。澜顷把内容、运营和门店信息放在一起整理，让品牌从被发现开始，走向被选择和被记住。"
    },
    about: {
      team: "澜顷目前是位于福冈的个人项目，提供多语言内容与中国社交媒体运营支持。可以单次诊断开始，也可以按月合作。",
      founder: "澜顷负责品牌梳理、内容策划、多语言表达与账号运营。具体平台、账号权限和发布工作按项目确认。",
      background: "客户确认品牌、商品、价格、门店、预约、素材使用权和账号权限。",
      philosophy: "广告、达人、评论管理和效果承诺按具体条件另行确认。内容与运营范围先定清楚，并保留执行记录。",
      teamImage: "从品牌梳理到内容运营的责任",
      partnerLogos: [
        "品牌信息共同确认",
        "内容策略先于发布",
        "账号权限清楚交接",
        "每月复盘再调整"
      ]
    },
    faqs: [
      {
        question: "你们具体提供什么服务？",
        answer: "多语言服务网站、中国社交媒体账号运营、跨文化内容与顾客沟通、多语言本地化、素材制作和运营复盘。网站和社交媒体可以一起做，也可以从其中一项开始。"
      },
      {
        question: "可以只做多语言服务网站吗？",
        answer: "可以。以日语、英语、中文为基础，整理服务、菜单、预约、支付和常见请求，做成手机打开就能使用的网站。拍摄、预约系统对接和后续更新会另行确认。"
      },
      {
        question: "可以做小红书账号运营吗？",
        answer: "可以讨论，但会先确认平台、内容数量、素材、账号权限、评论管理和是否需要拍摄，再确定能承接的范围。"
      },
      {
        question: "可以只做翻译或内容制作吗？",
        answer: "可以，作为多语言本地化或单次内容项目承接。账号运营是另一项服务。"
      },
      {
        question: "会包含发布和评论回复吗？",
        answer: "制作与发布分开。发布、发帖、评论、私信和网站更新需要另看权限、平台规则和实际工时，再判断能否承接。"
      },
      {
        question: "价格怎么确定？",
        answer: "根据平台、内容数量、拍摄、制作、发布、评论管理和复盘范围分别报价。"
      },
      {
        question: "文化差异造成的误会，你们怎么处理？",
        answer: "先确认是哪一种行为被怎样理解，再把门店规则、原因和可选做法整理成一致说明，放进中文 FAQ、社交内容和店内提示。我们不会预设哪一种文化才正确，也不会把个体行为直接归因于整个群体。"
      },
      {
        question: "没有账号可以合作吗？",
        answer: "可以。会先判断平台与账号是否必要，再说明开设条件和开始运营前的准备步骤。"
      },
      {
        question: "可以保证粉丝、流量或到店人数吗？",
        answer: "不能。平台环境和门店经营都会影响结果。澜顷负责品牌信息、内容设计、制作、运营和约定的改进工作。"
      }
    ],
    contact: {
      email: "wanslan1130@gmail.com",
      note: "点击提交后，内容会转到你自己的邮件应用；本网站不会保存你填写的信息。",
      services: [
        "多语言服务网站",
        "中国社交媒体账号运营",
        "跨文化内容与顾客沟通",
        "多语言内容与本地化",
        "跨平台素材再制作",
        "内容与体验复盘",
        "其他"
      ],
      socials: [],
      form: {
        name: "姓名 *",
        namePlaceholder: "你的姓名",
        company: "公司或店铺名称",
        companyPlaceholder: "请输入店铺或品牌名",
        email: "邮箱 *",
        website: "网站或社交平台链接",
        service: "希望咨询的内容",
        choose: "请选择",
        message: "留言 *",
        messagePlaceholder: "请介绍企业或门店、现有网站和社交账号、需要的语言、想放上去的服务与顾客请求，以及最容易发生沟通困难的场景。",
        submit: "通过邮件发送咨询",
        notice: "已尝试打开你的邮件应用。如果没有自动打开，请直接发送到页面显示的邮箱。"
      }
    },
    footer: {
      description: "帮助日本本地企业、门店与品牌，通过多语言服务网站和中国社交媒体运营，被外国顾客看见、理解并选择。",
      motifWords: [
        "PRESENCE",
        "CONTENT",
        "OPERATION",
        "EXPERIENCE"
      ],
      privacyLabel: "隐私说明",
      privacyBody: "咨询表单只会把你填写的内容转入你自己的邮件应用，本网站本身不会保存这些信息。我们收到的姓名、邮箱、公司或店铺名称与咨询内容，仅用于回复和处理咨询；除法律要求外，未经本人同意不会向第三方提供。如需查询、更正或删除，请联系本页所示邮箱。",
      copyright: "© 2026 澜顷. All rights reserved."
    }
  }
};
