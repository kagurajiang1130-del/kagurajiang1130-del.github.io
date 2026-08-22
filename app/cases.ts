export type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  summary: string;
  services: string;
  result: string;
  image: string;
};

export const caseStudies: Record<"ja" | "en" | "zh", CaseStudy[]> = {
  ja: [
    { title: "Case Study 01", client: "[クライアント / プロジェクト名]", industry: "[業種]", summary: "[プロジェクト概要を後ほど追加]", services: "[提供サービス]", result: "[プロジェクト成果]", image: "[事例カバー画像]" },
    { title: "Case Study 02", client: "[クライアント / プロジェクト名]", industry: "[業種]", summary: "[プロジェクト概要を後ほど追加]", services: "[提供サービス]", result: "[プロジェクト成果]", image: "[事例カバー画像]" },
    { title: "Case Study 03", client: "[クライアント / プロジェクト名]", industry: "[業種]", summary: "[プロジェクト概要を後ほど追加]", services: "[提供サービス]", result: "[プロジェクト成果]", image: "[事例カバー画像]" },
  ],
  en: [
    { title: "Case Study 01", client: "[Client / project name]", industry: "[Industry]", summary: "[Project summary will be added later]", services: "[Services provided]", result: "[Project result]", image: "[Case cover image]" },
    { title: "Case Study 02", client: "[Client / project name]", industry: "[Industry]", summary: "[Project summary will be added later]", services: "[Services provided]", result: "[Project result]", image: "[Case cover image]" },
    { title: "Case Study 03", client: "[Client / project name]", industry: "[Industry]", summary: "[Project summary will be added later]", services: "[Services provided]", result: "[Project result]", image: "[Case cover image]" },
  ],
  zh: [
    { title: "Case Study 01", client: "[客户或项目名称]", industry: "[行业]", summary: "[项目简介将在后续补充]", services: "[提供的服务]", result: "[项目结果]", image: "[案例封面图片]" },
    { title: "Case Study 02", client: "[客户或项目名称]", industry: "[行业]", summary: "[项目简介将在后续补充]", services: "[提供的服务]", result: "[项目结果]", image: "[案例封面图片]" },
    { title: "Case Study 03", client: "[客户或项目名称]", industry: "[行业]", summary: "[项目简介将在后续补充]", services: "[提供的服务]", result: "[项目结果]", image: "[案例封面图片]" },
  ],
};
