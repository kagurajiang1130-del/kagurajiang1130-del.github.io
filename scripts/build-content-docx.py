from __future__ import annotations

import json
import subprocess
from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "澜顷_网站三语言内容修改稿_20261127.docx"

BLUE = RGBColor(46, 116, 181)
DARK_BLUE = RGBColor(31, 77, 120)
INK = RGBColor(25, 27, 26)
MUTED = RGBColor(95, 98, 94)
YELLOW = RGBColor(242, 200, 43)
PALE_YELLOW = "FFF4BF"
LIGHT_GRAY = "F2F4F7"


def set_run_font(run, name="Calibri", size=11, color=INK, bold=None, italic=None):
    run.font.name = name
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), name)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), name)
    run._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), "Yu Gothic")
    run.font.size = Pt(size)
    run.font.color.rgb = color
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic


def shade_paragraph(paragraph, fill):
    p_pr = paragraph._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    p_pr.append(shd)


def add_page_field(paragraph):
    run = paragraph.add_run()
    fld_begin = OxmlElement("w:fldChar")
    fld_begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = " PAGE "
    fld_end = OxmlElement("w:fldChar")
    fld_end.set(qn("w:fldCharType"), "end")
    run._r.extend([fld_begin, instr, fld_end])
    set_run_font(run, size=9, color=MUTED)


def configure_styles(doc):
    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)
    normal.font.color.rgb = INK
    normal._element.rPr.rFonts.set(qn("w:ascii"), "Calibri")
    normal._element.rPr.rFonts.set(qn("w:hAnsi"), "Calibri")
    normal._element.rPr.rFonts.set(qn("w:eastAsia"), "Yu Gothic")
    normal.paragraph_format.space_before = Pt(0)
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.line_spacing = 1.25

    for name, size, color, before, after in [
        ("Heading 1", 16, BLUE, 18, 10),
        ("Heading 2", 13, BLUE, 14, 7),
        ("Heading 3", 12, DARK_BLUE, 10, 5),
    ]:
        style = doc.styles[name]
        style.font.name = "Calibri"
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = color
        style._element.rPr.rFonts.set(qn("w:ascii"), "Calibri")
        style._element.rPr.rFonts.set(qn("w:hAnsi"), "Calibri")
        style._element.rPr.rFonts.set(qn("w:eastAsia"), "Yu Gothic")
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True


def add_body(doc, text, *, color=INK, bold=False, italic=False, after=6):
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_after = Pt(after)
    paragraph.paragraph_format.line_spacing = 1.25
    set_run_font(paragraph.add_run(str(text)), color=color, bold=bold, italic=italic)
    return paragraph


def add_field(doc, label, value, key=None):
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_after = Pt(7)
    paragraph.paragraph_format.line_spacing = 1.25
    set_run_font(paragraph.add_run(f"{label}: "), bold=True, color=DARK_BLUE)
    set_run_font(paragraph.add_run(str(value)), color=INK)
    if key:
        set_run_font(paragraph.add_run(f"   [{key}]"), size=8.5, color=MUTED)
    return paragraph


def add_locale_heading(doc, locale):
    names = {"ja": "日本語 / JA", "en": "English / EN", "zh": "简体中文 / ZH"}
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_before = Pt(14)
    paragraph.paragraph_format.space_after = Pt(8)
    paragraph.paragraph_format.keep_with_next = True
    shade_paragraph(paragraph, PALE_YELLOW)
    set_run_font(paragraph.add_run(f"  {names[locale]}  "), size=10, color=INK, bold=True)


def add_group_title(doc, title, subtitle=None, page_break=True):
    if page_break:
        doc.add_page_break()
    doc.add_heading(title, level=1)
    if subtitle:
        add_body(doc, subtitle, color=MUTED, italic=True, after=10)


def add_list_items(doc, values, label="Item"):
    for index, value in enumerate(values, 1):
        if isinstance(value, dict):
            doc.add_heading(f"{index:02d} · {value.get('title') or value.get('name') or value.get('question')}", level=3)
            for field, field_label in [
                ("text", "Text"), ("summary", "Summary"), ("detail", "Detail"), ("status", "Status"),
                ("action", "CTA"), ("answer", "Answer"), ("client", "Scenario"), ("industry", "Industry"),
                ("services", "Support"), ("result", "Deliverable"), ("image", "Visual label"),
            ]:
                if value.get(field):
                    add_field(doc, field_label, value[field])
            if value.get("audience"):
                add_field(doc, "Best for", value["audience"])
            if value.get("price"):
                add_field(doc, "Price expression", value["price"])
            if value.get("features"):
                for f_index, feature in enumerate(value["features"], 1):
                    add_field(doc, f"Deliverable {f_index}", feature)
        else:
            add_field(doc, f"{label} {index:02d}", value)


def build_document(data):
    doc = Document()
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)
    section.top_margin = Inches(1)
    section.right_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.header_distance = Inches(0.492)
    section.footer_distance = Inches(0.492)
    configure_styles(doc)

    header = section.header.paragraphs[0]
    header.alignment = WD_ALIGN_PARAGRAPH.LEFT
    set_run_font(header.add_run("澜顷  /  MULTILINGUAL CONTENT MASTER"), size=8.5, color=MUTED, bold=True)
    footer = section.footer.paragraphs[0]
    footer.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    set_run_font(footer.add_run("澜顷  ·  "), size=9, color=MUTED)
    add_page_field(footer)

    cover_spacer = doc.add_paragraph()
    cover_spacer.paragraph_format.space_after = Pt(82)
    kicker = doc.add_paragraph()
    kicker.alignment = WD_ALIGN_PARAGRAPH.CENTER
    kicker.paragraph_format.space_after = Pt(16)
    set_run_font(kicker.add_run("WEBSITE CONTENT · JA / EN / ZH"), size=10, color=YELLOW, bold=True)
    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title.paragraph_format.space_after = Pt(10)
    set_run_font(title.add_run("澜顷"), size=34, color=INK, bold=True)
    subtitle = doc.add_paragraph()
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    subtitle.paragraph_format.space_after = Pt(24)
    set_run_font(subtitle.add_run("网站三语言内容修改稿"), size=18, color=DARK_BLUE)
    lead = doc.add_paragraph()
    lead.alignment = WD_ALIGN_PARAGRAPH.CENTER
    lead.paragraph_format.space_after = Pt(54)
    set_run_font(lead.add_run("日本語・English・简体中文｜可直接修改、增删并交回 Codex 更新网站"), size=11, color=MUTED)
    note = doc.add_paragraph()
    note.paragraph_format.space_before = Pt(10)
    note.paragraph_format.space_after = Pt(10)
    shade_paragraph(note, PALE_YELLOW)
    set_run_font(note.add_run("  使用方法  "), size=10, color=INK, bold=True)
    add_body(doc, "直接在对应语言下修改文字即可。需要新增服务、案例、套餐或 FAQ 时，请复制完整项目，并让三种语言保持相同数量与顺序。改完后把本文件交给 Codex。", after=8)
    add_body(doc, "事实边界：当前案例均为明确标记的示例场景，不是客户业绩；请勿添加未经核验和许可的客户、团队、Logo、评价或结果。", color=DARK_BLUE, bold=True)

    content = data["siteContent"]
    locales = ["ja", "en", "zh"]

    add_group_title(doc, "01 · 品牌、SEO 与导航", "修改品牌名时，也请同步检查三种语言的 SEO 标题。")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Brand name", c["brand"]["name"], "brand.name")
        add_field(doc, "Brand eyebrow", c["brand"]["eyebrow"], "brand.eyebrow")
        add_field(doc, "Brand description", c["brand"]["description"], "brand.description")
        add_field(doc, "SEO title", c["seo"]["title"], "seo.title")
        add_field(doc, "SEO description", c["seo"]["description"], "seo.description")
        add_field(doc, "Navigation", " / ".join(item["label"] for item in c["navigation"]), "navigation")

    add_group_title(doc, "02 · Hero / 首屏")
    for locale in locales:
        h = content[locale]["hero"]
        add_locale_heading(doc, locale)
        add_field(doc, "Kicker", h["kicker"], "hero.kicker")
        add_field(doc, "Main title", h["title"], "hero.title")
        add_field(doc, "Subtitle", h["subtitle"], "hero.subtitle")
        add_field(doc, "Rotating words", " / ".join(h["rotatingWords"]), "hero.rotatingWords")
        add_field(doc, "Primary CTA", h["primaryAction"]["label"], "hero.primaryAction.label")
        add_field(doc, "Secondary CTA", h["secondaryAction"]["label"], "hero.secondaryAction.label")
        add_field(doc, "Visual label", h["visualLabel"], "hero.visualLabel")

    add_group_title(doc, "03 · Philosophy / 品牌理念")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["philosophy"]["title"])
        add_field(doc, "Section intro", c["sections"]["philosophy"]["intro"])
        add_field(doc, "Body", c["philosophy"]["body"], "philosophy.body")
        add_field(doc, "Quote", c["philosophy"]["quote"], "philosophy.quote")

    add_group_title(doc, "04 · Problems / 客户问题")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["problems"]["title"])
        add_field(doc, "Section intro", c["sections"]["problems"]["intro"])
        add_list_items(doc, c["problems"], "Problem")

    add_group_title(doc, "05 · Approach / 解决思路")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["approach"]["title"])
        add_field(doc, "Section intro", c["sections"]["approach"]["intro"])
        add_list_items(doc, c["approach"], "Step")

    add_group_title(doc, "06 · Services / 服务内容", "每项服务包含名称、摘要、详细范围、状态与 CTA。")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["services"]["title"])
        add_field(doc, "Section intro", c["sections"]["services"]["intro"])
        add_list_items(doc, c["services"], "Service")

    add_group_title(doc, "07 · Experience Guide / 体验与接待信息")
    for locale in locales:
        g = content[locale]["experienceGuide"]
        add_locale_heading(doc, locale)
        add_field(doc, "Title", g["title"], "experienceGuide.title")
        add_field(doc, "Body", g["text"], "experienceGuide.text")
        add_field(doc, "Information points", " / ".join(g["items"]), "experienceGuide.items")
        add_field(doc, "Visual label", g["visualLabel"])

    add_group_title(doc, "08 · Process / 服务流程")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["process"]["title"])
        add_field(doc, "Section intro", c["sections"]["process"]["intro"])
        add_list_items(doc, c["process"], "Step")

    add_group_title(doc, "09 · Use Scenarios / 服务场景", "当前全部是 Demo，不是客户案例。改成真实案例前必须获得公开许可。")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["cases"]["title"])
        add_field(doc, "Section intro", c["sections"]["cases"]["intro"])
        add_list_items(doc, c["cases"], "Scenario")

    add_group_title(doc, "10 · Pricing / 服务方案")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["pricing"]["title"])
        add_field(doc, "Section intro", c["sections"]["pricing"]["intro"])
        add_list_items(doc, c["pricing"], "Plan")

    add_group_title(doc, "11 · Vision / 理想中的状态")
    for locale in locales:
        v = content[locale]["vision"]
        add_locale_heading(doc, locale)
        add_field(doc, "Title", v["title"].replace("\n", " / "), "vision.title")
        add_field(doc, "Body", v["text"], "vision.text")

    add_group_title(doc, "12 · About / 关于")
    for locale in locales:
        c = content[locale]
        a = c["about"]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["about"]["title"])
        add_field(doc, c["ui"]["team"], a["team"], "about.team")
        add_field(doc, c["ui"]["founder"], a["founder"], "about.founder")
        add_field(doc, c["ui"]["background"], a["background"], "about.background")
        add_field(doc, c["ui"]["workingPhilosophy"], a["philosophy"], "about.philosophy")
        add_field(doc, c["ui"]["partners"], " / ".join(a["partnerLogos"]), "about.partnerLogos")

    add_group_title(doc, "13 · FAQ / 常见问题")
    for locale in locales:
        c = content[locale]
        add_locale_heading(doc, locale)
        add_field(doc, "Section title", c["sections"]["faq"]["title"])
        add_list_items(doc, c["faqs"], "FAQ")

    add_group_title(doc, "14 · Contact / 联系咨询")
    for locale in locales:
        c = content[locale]
        form = c["contact"]["form"]
        add_locale_heading(doc, locale)
        add_field(doc, "Heading", c["ui"]["contactTitle"].replace("\n", " / "), "ui.contactTitle")
        add_field(doc, "Intro", c["ui"]["contactIntro"], "ui.contactIntro")
        add_field(doc, "Email", c["contact"]["email"], "contact.email")
        add_field(doc, "Services", " / ".join(c["contact"]["services"]), "contact.services")
        add_field(doc, "Message prompt", form["messagePlaceholder"], "contact.form.messagePlaceholder")
        add_field(doc, "Submit", form["submit"], "contact.form.submit")
        add_field(doc, "Form note", c["contact"]["note"], "contact.note")

    add_group_title(doc, "15 · Footer 与隐私说明")
    for locale in locales:
        f = content[locale]["footer"]
        add_locale_heading(doc, locale)
        add_field(doc, "Brand description", f["description"], "footer.description")
        add_field(doc, "Motif words", " / ".join(f["motifWords"]), "footer.motifWords")
        add_field(doc, "Privacy label", f["privacyLabel"], "footer.privacyLabel")
        add_field(doc, "Privacy body", f["privacyBody"], "footer.privacyBody")
        add_field(doc, "Copyright", f["copyright"], "footer.copyright")

    doc.add_page_break()
    doc.add_heading("修改完成后的交付清单", level=1)
    for label, value in [
        ("1", "三种语言的服务、流程、案例、价格与 FAQ 数量一致。"),
        ("2", "品牌名、邮箱、价格、规则与法律信息在三种语言中没有冲突。"),
        ("3", "没有虚构团队、客户、Logo、评价、项目结果、认证或平台能力。"),
        ("4", "所有图片、客户名称和引用内容都已获得使用与公开许可。"),
        ("5", "把本 Word 文档交给 Codex，并说明希望更新和发布到哪个版本。"),
    ]:
        add_field(doc, label, value)

    doc.core_properties.title = "澜顷网站三语言内容修改稿"
    doc.core_properties.subject = "Editable Japanese, English and Simplified Chinese website copy"
    doc.core_properties.author = "澜顷"
    doc.core_properties.keywords = "澜顷, website, Japanese, English, Chinese, editable content"
    doc.save(OUTPUT)
    return OUTPUT


def main():
    completed = subprocess.run(
        ["node", str(ROOT / "scripts" / "dump-site-content.mjs")],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    data = json.loads(completed.stdout)
    output = build_document(data)
    print(output)


if __name__ == "__main__":
    main()
