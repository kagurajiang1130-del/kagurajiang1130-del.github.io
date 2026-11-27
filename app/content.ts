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
  experienceGuide: { label: string; title: string; text: string; centerLabel: string; items: string[]; visualLabel: string };
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

export const siteSettings = {
  publicUrl: "https://kagurajiang1130-del.github.io/",
  defaultLocale: "ja" as Locale,
  allowIndexing: true,
  contactFormAction: "",
};

export const siteContent: Record<Locale, SiteCopy> = {
  ja: {
    seo: {
      title: "澜顷｜多言語コンテンツ・中国SNS運用支援",
      description: "日本国内の企業・店舗・ブランドに向けて、多言語コンテンツ、中国語表現、中国SNSのコンテンツ設計・アカウント運用を支援します。"
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
      eyebrow: "多言語コンテンツ × 中国SNS運用",
      description: "澜顷は、日本国内の企業・店舗・ブランドの価値を、多言語の自然な表現と中国SNSのコンテンツ設計・アカウント運用で伝える制作・運用プロジェクトです。"
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
        title: "良いアカウントは、一本のバズでは育たない。",
        intro: "明確な定位、安定した内容、統一された表現、そして来店や相談につながる導線が必要です。"
      },
      problems: {
        label: "Problems",
        title: "投稿はある。でも、ブランドとして積み上がっていない。",
        intro: "アカウント全体を見直すことで、ブランドの伝わり方と日々の運用負担が変わります。"
      },
      approach: {
        label: "Approach",
        title: "ブランド整理から、継続運用まで。",
        intro: "誰に、何を、どの順番で伝えるかを決めてから、コンテンツと運用を組み立てます。"
      },
      services: {
        label: "Services",
        title: "企業・店舗アカウントを、企画から運用まで。",
        intro: "中国SNSのアカウント診断、コンテンツ設計、多言語ローカライズ、投稿運用を組み合わせます。"
      },
      process: {
        label: "Process",
        title: "戦略を決めてから、安定した制作へ。",
        intro: "ブランド整理、内容設計、制作、公開、改善を分け、各段階の責任を明確にします。"
      },
      cases: {
        label: "Use Scenarios",
        title: "三つの運用場面。",
        intro: "以下はサービス範囲を説明するための架空の場面です。実在の顧客、実績、成果ではありません。"
      },
      pricing: {
        label: "Work & Quotes",
        title: "まず診断し、その後に運用範囲を決めます。",
        intro: "プラットフォーム、投稿数、撮影、公開、コメント対応、レポートの範囲で個別見積りを作ります。"
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
      subtitle: "多言語での自然な表現を追求し、企業・店舗の中国SNS向けコンテンツ設計とアカウント運用を支援します。",
      kicker: "日本国内の企業・店舗 × 中国SNS",
      rotatingWords: [
        "見つけられる",
        "理解される",
        "選ばれる",
        "記憶される"
      ],
      primaryAction: {
        label: "運用支援を見る",
        href: "#services"
      },
      secondaryAction: {
        label: "ブランド相談を申し込む",
        href: "#contact"
      },
      visualLabel: "多言語コンテンツ · 中国SNS運用",
      marquee: "PRESENCE · CONTENT · OPERATION · DISCOVERY · その存在を、見つけられるものへ。 · "
    },
    philosophy: {
      body: "企業や店舗のSNSは、投稿だけでは形になりません。プロフィール、ビジュアル、テーマ、言葉の温度、更新のリズム、来店情報が揃って、はじめてブランドとして伝わります。澜顷は、企業・店舗が持つ事実と魅力を整理し、中国語圏で継続して運用できる内容へ落とし込みます。",
      quote: "ブランドを別物に変えず、中国語圏でも同じ魅力が伝わるアカウントへ。",
      visualLabel: "ブランドを整理する · 運用へつなぐ"
    },
    problems: [
      {
        title: "投稿はあるが、定位が曖昧",
        text: "何を発信するアカウントなのかが伝わらず、フォローする理由が弱くなります。"
      },
      {
        title: "中国語は読めるが、翻訳稿に見える",
        text: "文法的に正しくても、現地のSNSで自然に読める言葉になっていないことがあります。"
      },
      {
        title: "素材はあるが、更新が続かない",
        text: "写真や情報が散らばり、毎回ゼロから考えないと投稿できない状態になります。"
      },
      {
        title: "プロフィールに次の行動がない",
        text: "内容を見た人が、予約、来店、相談へ進むための情報が不足します。"
      },
      {
        title: "店舗情報とSNSがつながっていない",
        text: "営業時間、場所、メニュー、予約方法が投稿と一致せず、信頼を落とします。"
      },
      {
        title: "運用にリズムがなく、改善できない",
        text: "誰が、いつ、何を確認するかが決まっておらず、投稿後の振り返りも残りません。"
      }
    ],
    approach: [
      {
        title: "ブランドを整理する",
        text: "企業・店舗の事実、強み、顧客、既存素材を確認し、中国語圏で伝える軸を定めます。"
      },
      {
        title: "内容を設計する",
        text: "プロフィール、投稿テーマ、連載、ビジュアル、言葉づかいを一つの運用設計にまとめます。"
      },
      {
        title: "アカウントを運用する",
        text: "企画、原稿、制作、公開を合意した範囲で回し、顧客側の確認フローを固定します。"
      },
      {
        title: "行動へつなげる",
        text: "予約、来店、問い合わせに必要な情報をプロフィール、固定投稿、各コンテンツへ配置します。"
      }
    ],
    services: [
      {
        name: "中国SNSアカウント運用",
        summary: "現在の主な支援。プロフィールから投稿、公開、改善まで。",
        detail: "ひとつのプラットフォームを対象に、月間テーマ、コンテンツ制作、公開リズム、プロフィール情報、運用レビューを設計します。小紅書を中心に、WeChat、抖音、大衆点評等は各平台の条件と対応範囲を確認します。撮影、広告、インフルエンサー、DM対応は別途見積ります。",
        status: "現在の主な支援｜範囲確認後に見積り",
        action: "アカウント運用を相談",
        available: true
      },
      {
        name: "企業・店舗のコンテンツ設計",
        summary: "何を、誰に、どの順番で発信するかを決める。",
        detail: "ブランドの定位、顧客像、投稿テーマ、連載、プロフィール、固定投稿、コンテンツカレンダーを整理します。制作や公開を含めるかは別に確認します。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "コンテンツ設計を相談",
        available: true
      },
      {
        name: "多言語コンテンツ・ローカライズ",
        summary: "その市場で自然に読める表現へ。",
        detail: "中国語、日本語、英語などのブランド情報、Web、メニュー、SNS投稿、店舗案内を整理します。事実確認、用語統一、読みやすさの調整を含めます。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "多言語化を相談",
        available: true
      },
      {
        name: "店舗・ブランド情報の設計",
        summary: "SNS、地図、Web、店頭で同じ情報が伝わるように。",
        detail: "店名、住所、営業時間、メニュー、予約、支払い、利用条件などを整理し、各接点で一貫した表記にします。専門的判断が必要な事項は確認先を分けます。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "情報を整理したい",
        available: true
      },
      {
        name: "プラットフォーム別素材制作",
        summary: "既存の写真や動画を、中国SNS向けに作り直す。",
        detail: "Instagram等の既存素材を確認し、タイトル、本文、画像順、短尺動画の構成、プロフィール素材へ再編集します。新規撮影、権利処理、公開は範囲を分けます。",
        status: "主要サービス｜範囲確認後に見積り",
        action: "素材を見直したい",
        available: true
      },
      {
        name: "コンテンツ改善・運用レビュー",
        summary: "公開後の内容と運用を、記録から見直す。",
        detail: "取得できる平台データ、保存・反応、顧客側のフィードバックを整理し、次の投稿テーマやプロフィール改善を提案します。売上や集客結果は保証しません。",
        status: "条件確認後に実施",
        action: "運用を改善したい",
        available: true
      }
    ],
    experienceGuide: {
      label: "05 / Account Operation",
      title: "アカウント、コンテンツ、店舗情報を同じ運用線へ。",
      text: "投稿だけを増やしても、プロフィール、固定投稿、店舗情報、予約導線がばらばらではブランドとして伝わりません。澜顷は、内容と運用を一つの流れとして整えます。",
      centerLabel: "BRAND\nOPERATION",
      items: [
        "アカウント定位",
        "プロフィール",
        "ビジュアル",
        "投稿テーマ",
        "画像投稿",
        "短尺動画",
        "公開リズム",
        "コメント対応",
        "店舗情報",
        "月次レビュー"
      ],
      visualLabel: "ブランドから中国SNS運用まで"
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
    pricing: [
      {
        name: "アカウント診断",
        audience: "現在のSNS、プロフィール、素材、店舗情報を整理したい企業・店舗",
        price: "固定範囲で個別見積り",
        features: [
          "現状のアカウントを確認",
          "ブランド情報と素材の不足を整理",
          "優先課題と運用案を提示"
        ],
        action: "診断を相談",
        featured: false
      },
      {
        name: "単月コンテンツ",
        audience: "まず一か月分の企画、原稿、素材制作を試したい企業・店舗",
        price: "固定範囲で個別見積り",
        features: [
          "月間テーマと投稿設計",
          "合意本数のコンテンツ制作",
          "プロフィール・固定投稿の整理",
          "公開後の簡易レビュー"
        ],
        action: "単月で相談",
        featured: false
      },
      {
        name: "月次アカウント運用",
        audience: "継続して中国SNSを運用したい企業・店舗",
        price: "固定範囲で個別見積り",
        features: [
          "月間の企画・制作・公開",
          "プロフィールと店舗情報の維持",
          "公開記録と月次レビュー",
          "追加作業は事前確認"
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
        answer: "中国SNSのアカウント診断、コンテンツ設計、多言語ローカライズ、投稿制作、運用レビューです。企業・店舗ごとに必要な範囲を組み合わせます。"
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
        answer: "案件ごとに決めます。公開権限、確認体制、対応時間、緊急時の扱いを確認したうえで、範囲に含めるか判断します。"
      },
      {
        question: "料金はどのように決まりますか？",
        answer: "対象平台、投稿数、撮影、制作、公開、コメント対応、レポートの範囲で個別見積りになります。"
      },
      {
        question: "複数言語に対応できますか？",
        answer: "中国語、日本語、英語を中心に、用途と必要な言語品質を確認して範囲を決めます。"
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
        "中国SNSアカウント運用",
        "企業・店舗のコンテンツ設計",
        "多言語コンテンツ・ローカライズ",
        "店舗・ブランド情報の設計",
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
        messagePlaceholder: "企業・店舗の概要、現在のSNS、手元の素材、困っていること、希望する運用範囲をご記入ください。",
        submit: "メールで相談を送る",
        notice: "メールアプリを開きました。起動しない場合は、表示されているメールアドレスへ直接お送りください。"
      }
    },
    footer: {
      description: "日本国内の企業・店舗・ブランドが、多言語の自然な表現と中国SNS運用を通じて見つけられ、理解され、選ばれる状態をつくります。",
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
      title: "澜顷 | Multilingual Content & China Social Media Operations",
      description: "We help Japan-based businesses and shops express themselves naturally across languages, with content planning and account operations for Chinese social media."
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
      eyebrow: "Multilingual content × China social media operations",
      description: "澜顷 helps Japan-based businesses and shops communicate their value through natural multilingual content, Chinese social media planning and account operations."
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
        title: "A strong account is more than one successful post.",
        intro: "It needs a clear position, consistent content, a recognizable voice and a path from discovery to booking, visiting or enquiry."
      },
      problems: {
        label: "Problems",
        title: "Content is being posted, but the brand is not building.",
        intro: "The account has to work as a whole, not as a collection of disconnected posts."
      },
      approach: {
        label: "Approach",
        title: "From brand clarity to continuous operations.",
        intro: "We define who the content is for, what it should say and in what order before building the account."
      },
      services: {
        label: "Services",
        title: "Social media operations for brands and shops.",
        intro: "Account diagnosis, content strategy, multilingual localization, asset production and publishing support."
      },
      process: {
        label: "Process",
        title: "Strategy first. Then a repeatable production rhythm.",
        intro: "Brand review, content design, production, publishing and improvement are separated with clear responsibilities."
      },
      cases: {
        label: "Use Scenarios",
        title: "Three operating scenarios.",
        intro: "These are fictional service scenarios for explaining scope. They are not real clients, results or testimonials."
      },
      pricing: {
        label: "Work & Quotes",
        title: "Start with a diagnosis, then define the operating scope.",
        intro: "Platform, publishing volume, photography, community management and reporting determine the quote."
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
      subtitle: "We help businesses and shops express themselves naturally across languages, with content planning and account operations for Chinese social media.",
      kicker: "Japan-based businesses and shops × Chinese social media",
      rotatingWords: [
        "be found",
        "be understood",
        "be chosen",
        "be remembered"
      ],
      primaryAction: {
        label: "Explore operations",
        href: "#services"
      },
      secondaryAction: {
        label: "Book a consultation",
        href: "#contact"
      },
      visualLabel: "Multilingual content · China social media operations",
      marquee: "PRESENCE · CONTENT · OPERATION · DISCOVERY · HELP YOUR BRAND BE FOUND · "
    },
    philosophy: {
      body: "A social account does not become a brand through individual posts alone. The profile, visuals, themes, tone, publishing rhythm and shop information all shape how people judge the business. 澜顷 organizes the facts and strengths a business already has, then turns them into a repeatable content and account operation for Chinese-speaking audiences.",
      quote: "Keep the brand itself. Build an account that carries the same value into a new language.",
      visualLabel: "ORGANIZE THE BRAND · BUILD THE OPERATION"
    },
    problems: [
      {
        title: "Posts exist, but the positioning is unclear",
        text: "People cannot tell what the account stands for or why they should follow it."
      },
      {
        title: "The Chinese is correct, but reads like translation",
        text: "Grammar can be right while the wording still feels unlike the way people speak on the platform."
      },
      {
        title: "Assets exist, but publishing cannot continue",
        text: "Photos and information are scattered, so every post starts from zero."
      },
      {
        title: "The profile has no next step",
        text: "Visitors can view the content but are not shown how to book, visit or enquire."
      },
      {
        title: "Social content and shop information do not match",
        text: "Hours, location, menus and booking details differ across touchpoints and weaken trust."
      },
      {
        title: "Operations have no rhythm or review",
        text: "No one has defined what gets checked, by whom, or how each month's content will improve."
      }
    ],
    approach: [
      {
        title: "Clarify the brand",
        text: "Review the business facts, strengths, audience and existing assets, then define what should carry into Chinese-language markets."
      },
      {
        title: "Design the content",
        text: "Build the profile, content pillars, series, visual direction and voice into one operating plan."
      },
      {
        title: "Operate the account",
        text: "Plan, write, produce and publish within the agreed scope, with a fixed approval flow."
      },
      {
        title: "Create a next step",
        text: "Place booking, visit and enquiry information in the profile, pinned content and relevant posts."
      }
    ],
    services: [
      {
        name: "China social media account operations",
        summary: "Our current focus. From profile and content to publishing and review.",
        detail: "For one platform, we design monthly themes, production, publishing rhythm, profile information and an operating review. Xiaohongshu is the starting point; WeChat, Douyin and Dianping require a separate platform review. Photography, ads, creators and community management are quoted separately.",
        status: "Current focus | Quote after review",
        action: "Discuss account operations",
        available: true
      },
      {
        name: "Content strategy for brands and shops",
        summary: "Decide what to say, to whom and in what order.",
        detail: "We define the brand position, audience, content pillars, editorial series, profile, pinned content and calendar. Production and publishing are scoped separately.",
        status: "Core service | Quote after review",
        action: "Discuss content strategy",
        available: true
      },
      {
        name: "Multilingual content and localization",
        summary: "Natural language for the platform and the audience.",
        detail: "We adapt brand information, websites, menus, social posts and visitor guidance across Chinese, Japanese and English. The scope includes fact checks, terminology and readability.",
        status: "Core service | Quote after review",
        action: "Discuss localization",
        available: true
      },
      {
        name: "Brand and store information design",
        summary: "Keep the same facts consistent across social, maps, web and storefront.",
        detail: "We align names, addresses, hours, menus, booking, payment and visitor conditions across customer touchpoints. Regulated or specialist claims remain with the appropriate professional.",
        status: "Core service | Quote after review",
        action: "Review the information",
        available: true
      },
      {
        name: "Cross-platform asset production",
        summary: "Rebuild existing photos and video for Chinese social media.",
        detail: "We review assets from Instagram and other channels, then reshape titles, captions, image order, short-video structure and profile visuals. New photography, rights and publishing are separate.",
        status: "Core service | Quote after review",
        action: "Review current assets",
        available: true
      },
      {
        name: "Content review and account optimization",
        summary: "Use available records to improve the next round.",
        detail: "We review accessible platform data, saves and responses, plus client feedback, then recommend content and profile changes. We do not guarantee audience, visit or sales outcomes.",
        status: "Subject to account access",
        action: "Improve the account",
        available: true
      }
    ],
    experienceGuide: {
      label: "05 / Account Operation",
      title: "Put the account, content and shop information on one operating line.",
      text: "Publishing more posts will not create a brand when the profile, pinned content, shop information and booking path remain disconnected. 澜顷 organizes content and operations as one system.",
      centerLabel: "BRAND\nOPERATION",
      items: [
        "Positioning",
        "Profile",
        "Visual system",
        "Content pillars",
        "Image posts",
        "Short video",
        "Publishing rhythm",
        "Community",
        "Shop information",
        "Monthly review"
      ],
      visualLabel: "From brand clarity to China social media operations"
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
        result: "Example deliverables: terminology, bilingual content and a social-media expression guide",
        image: "LOCALIZATION / DEMO 03"
      }
    ],
    pricing: [
      {
        name: "Account diagnosis",
        audience: "For a business that needs to review its current social account, assets and shop information",
        price: "Individual quote after fixed-scope review",
        features: [
          "Review the current account",
          "Map brand and asset gaps",
          "Set priorities and an operating direction"
        ],
        action: "Discuss a diagnosis",
        featured: false
      },
      {
        name: "One-month content",
        audience: "For a business that wants to test one month of planning, writing and production",
        price: "Individual quote after fixed-scope review",
        features: [
          "Monthly content plan",
          "Agreed production volume",
          "Profile and pinned-content review",
          "A short post-publishing review"
        ],
        action: "Discuss one month",
        featured: false
      },
      {
        name: "Monthly account operations",
        audience: "For a business that wants a continuous Chinese social media operation",
        price: "Individual quote after fixed-scope review",
        features: [
          "Monthly planning, production and publishing",
          "Profile and shop-information upkeep",
          "Publishing records and monthly review",
          "Additional work confirmed in advance"
        ],
        action: "Discuss monthly operations",
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
        answer: "China social media account diagnosis, content strategy, multilingual localization, production and operating reviews. We combine the parts each business needs."
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
        answer: "That depends on the project. Account access, approval flow, response hours and escalation rules are confirmed before publishing or community management is included."
      },
      {
        question: "How is pricing decided?",
        answer: "The quote reflects the platform, content volume, photography, production, publishing, community management and reporting."
      },
      {
        question: "Can you work across several languages?",
        answer: "Yes. We primarily work in Chinese, Japanese and English and define the required language quality and scope for each project."
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
        "China social media account operations",
        "Content strategy for brands and shops",
        "Multilingual content and localization",
        "Brand and store information design",
        "Cross-platform asset production",
        "Content review and account optimization",
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
        messagePlaceholder: "Tell us about the business, current social channels, available assets, the problem to solve and the operating scope you have in mind.",
        submit: "Send enquiry by email",
        notice: "Your email application has been opened. If it does not launch, email the address shown on this page directly."
      }
    },
    footer: {
      description: "Helping Japan-based businesses and shops become found, understood and chosen through natural multilingual content and China social media operations.",
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
      title: "澜顷｜多语言内容与中国社交媒体运营",
      description: "面向日本本地企业、门店与品牌，提供多语言内容、中文表达，以及中国社交媒体的内容策划、账号运营和品牌信息整理。"
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
      eyebrow: "多语言内容 × 中国社交媒体运营",
      description: "澜顷帮助日本本地企业、门店与品牌，整理中文与多语言内容，并面向中国社交媒体提供内容策划和账号运营支持。"
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
        title: "好的账号，不靠一条爆款。",
        intro: "它需要清楚的定位、稳定的内容、统一的表达，以及能把关注带向到店或咨询的路径。"
      },
      problems: {
        label: "问题",
        title: "内容有发，品牌却没有真正建立起来。",
        intro: "账号需要作为一个整体被经营，而不是一组互不相关的帖子。"
      },
      approach: {
        label: "方法",
        title: "从品牌梳理，到持续运营。",
        intro: "先确定对谁说、说什么、按什么顺序说，再建立内容和运营节奏。"
      },
      services: {
        label: "服务",
        title: "企业账号与门店账号，从内容到运营。",
        intro: "账号诊断、内容策划、多语言本地化、素材制作与发布支持，按实际需要组合。"
      },
      process: {
        label: "流程",
        title: "先定策略，再进入稳定生产。",
        intro: "品牌梳理、内容设计、制作、发布和复盘分开，每一步的责任与确认方式明确。"
      },
      cases: {
        label: "场景",
        title: "三种运营场景。",
        intro: "下面是帮助理解服务范围的虚构场景，不对应真实客户、实绩或成果。"
      },
      pricing: {
        label: "合作与报价",
        title: "先做诊断，再决定运营范围。",
        intro: "平台、内容数量、拍摄、发布、评论管理和复盘范围共同决定报价。"
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
      subtitle: "我们致力于多语言内容的自然表达，也为企业、门店提供中国社交媒体的内容策划与账号运营支持。",
      kicker: "日本本地企业、门店与品牌 × 中国社交媒体",
      rotatingWords: [
        "被看见",
        "被理解",
        "被选择",
        "被记住"
      ],
      primaryAction: {
        label: "查看运营服务",
        href: "#services"
      },
      secondaryAction: {
        label: "预约品牌咨询",
        href: "#contact"
      },
      visualLabel: "多语言内容 · 中国社交媒体运营",
      marquee: "PRESENCE · CONTENT · OPERATION · DISCOVERY · 让你的存在被发现 · "
    },
    philosophy: {
      body: "一个企业或门店的社交媒体，不该只是零散发帖。简介、视觉、选题、语气、发布节奏与到店信息，共同构成别人对这个品牌的判断。澜顷帮助客户梳理真实品牌信息，再把这些信息转化为适合中文语境、能够持续更新的内容与账号运营方案。",
      quote: "让品牌在中文语境里被看见，也让每一次发布都像这个品牌本身。",
      visualLabel: "梳理品牌 · 建立运营"
    },
    problems: [
      {
        title: "账号有内容，定位却不清楚",
        text: "别人看不出这个账号代表什么，也找不到持续关注的理由。"
      },
      {
        title: "中文看得懂，却像翻译稿",
        text: "语法可能正确，但表达不像中国社交媒体上真正会出现的语言。"
      },
      {
        title: "素材很多，却无法稳定更新",
        text: "图片和信息散落各处，每次发内容都要从零开始。"
      },
      {
        title: "主页有流量，却没有下一步",
        text: "用户看完内容，却不知道怎样预约、到店或咨询。"
      },
      {
        title: "门店信息与社媒表达脱节",
        text: "营业时间、地址、菜单和预约方式彼此不一致，会削弱品牌信任。"
      },
      {
        title: "运营没有节奏，也难以复盘",
        text: "谁确认、何时发布、如何调整没有固定规则，内容与运营都难以积累。"
      }
    ],
    approach: [
      {
        title: "梳理品牌",
        text: "确认企业或门店的真实信息、优势、目标客群与现有素材，确定进入中文语境的表达主线。"
      },
      {
        title: "设计内容",
        text: "把账号简介、内容栏目、选题、视觉和语气整理成一套可执行的运营方案。"
      },
      {
        title: "运营账号",
        text: "按约定范围完成策划、撰稿、制作与发布，并固定客户确认流程。"
      },
      {
        title: "设计转化",
        text: "把预约、到店和咨询所需的信息放进主页、置顶内容和相关帖子。"
      }
    ],
    services: [
      {
        name: "中国社交媒体账号运营",
        summary: "当前主推。从主页、内容到发布与复盘。",
        detail: "围绕一个平台，设计每月主题、内容制作、发布节奏、主页信息与运营复盘。以小红书为起点，微信公众号、抖音、大众点评等平台需单独确认条件与范围。拍摄、广告、达人和评论管理另计。",
        status: "当前主推｜确认范围后报价",
        action: "咨询账号运营",
        available: true
      },
      {
        name: "企业与门店内容策划",
        summary: "决定说什么、对谁说、按什么顺序说。",
        detail: "梳理品牌定位、目标客群、内容栏目、连载、主页、置顶内容和内容日历。制作与发布是否包含，另行确认。",
        status: "主要服务｜确认范围后报价",
        action: "咨询内容策划",
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
        name: "品牌与门店信息设计",
        summary: "让社交平台、地图、网站和店内信息保持一致。",
        detail: "统一店名、地址、营业时间、菜单、预约、支付与使用条件，清理各触点之间的冲突。需要专业判断的事项交由相应专业人士确认。",
        status: "主要服务｜确认范围后报价",
        action: "咨询信息整理",
        available: true
      },
      {
        name: "跨平台素材再制作",
        summary: "把现有照片和视频，改成中国社交媒体可用的内容。",
        detail: "盘点 Instagram 等现有素材，重新设计标题、正文、图片顺序、短视频结构和主页视觉。新拍摄、版权处理与公开另行确认。",
        status: "主要服务｜确认范围后报价",
        action: "咨询素材改造",
        available: true
      },
      {
        name: "内容复盘与账号优化",
        summary: "根据已有记录，调整下一轮内容。",
        detail: "整理可获取的平台数据、收藏反馈和客户反馈，提出内容与主页调整建议。流量、粉丝、到店与销售结果不作保证。",
        status: "确认账号权限后承接",
        action: "咨询运营优化",
        available: true
      }
    ],
    experienceGuide: {
      label: "05 / Account Operation",
      title: "账号、内容、门店信息，放进同一条运营线。",
      text: "只增加帖子，主页、置顶内容、门店信息和预约路径仍然分散，就无法形成品牌。澜顷把内容与运营整理为一个系统。",
      centerLabel: "品牌\n运营",
      items: [
        "账号定位",
        "主页简介",
        "视觉风格",
        "内容栏目",
        "图文笔记",
        "短视频",
        "发布节奏",
        "评论管理",
        "门店信息",
        "月度复盘"
      ],
      visualLabel: "从品牌梳理到中国社交媒体运营"
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
    ],
    pricing: [
      {
        name: "账号诊断",
        audience: "需要先看清现有账号、内容与门店信息问题的企业或门店",
        price: "固定范围，个别报价",
        features: [
          "检查现有账号与主页",
          "梳理品牌与素材缺口",
          "给出优先问题与运营方向"
        ],
        action: "咨询账号诊断",
        featured: false
      },
      {
        name: "单月内容",
        audience: "想先试一个月策划、撰稿与内容制作的企业或门店",
        price: "固定范围，个别报价",
        features: [
          "月度主题与内容规划",
          "约定数量的内容制作",
          "主页与置顶内容整理",
          "发布后的简短复盘"
        ],
        action: "咨询单月内容",
        featured: false
      },
      {
        name: "账号运营",
        audience: "希望持续经营中国社交媒体的企业或门店",
        price: "固定范围，个别报价",
        features: [
          "每月策划、制作与发布",
          "主页和门店信息维护",
          "发布记录与月度复盘",
          "额外工作提前确认"
        ],
        action: "咨询月度运营",
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
        answer: "中国社交媒体账号诊断、内容策划、多语言本地化、素材制作、发布支持与运营复盘。会根据企业和门店需要组合范围。"
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
        answer: "按项目约定。会先确认账号权限、审核流程、响应时间和紧急情况处理方式，再决定是否包含。"
      },
      {
        question: "价格怎么确定？",
        answer: "根据平台、内容数量、拍摄、制作、发布、评论管理和复盘范围分别报价。"
      },
      {
        question: "可以做多种语言吗？",
        answer: "可以，以中文、日语和英语为主。具体语言质量和交付范围会在项目开始前确认。"
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
        "中国社交媒体账号运营",
        "企业与门店内容策划",
        "多语言内容与本地化",
        "品牌与门店信息设计",
        "跨平台素材再制作",
        "内容复盘与账号优化",
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
        messagePlaceholder: "请介绍企业或门店、现有社交账号、手头素材、目前的问题，以及希望运营到什么程度。",
        submit: "通过邮件发送咨询",
        notice: "已尝试打开你的邮件应用。如果没有自动打开，请直接发送到页面显示的邮箱。"
      }
    },
    footer: {
      description: "帮助日本本地企业、门店与品牌，通过自然的多语言表达和中国社交媒体运营，被看见、被理解、被选择。",
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
