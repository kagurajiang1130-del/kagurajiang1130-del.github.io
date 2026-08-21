"use client";

import { FormEvent, useEffect, useState } from "react";
import { Locale, localeOptions, siteContent } from "./content";

const pad = (value: number) => String(value).padStart(2, "0");

function SectionIntro({ number, label, title, intro }: { number: string; label: string; title: string; intro?: string }) {
  const runwayText = `${number} / ${label} — ${title}`;

  return (
    <div className="section-intro reveal">
      <div className="section-meta"><span>{number}</span><span>{label}</span></div>
      <div>
        <h2><span className="title-runner">{title}</span></h2>
        {intro && <p>{intro}</p>}
      </div>
      <div className="section-runway" aria-hidden="true">
        <div className="section-runway-track">
          <span>{runwayText}</span><span>{runwayText}</span><span>{runwayText}</span>
        </div>
      </div>
    </div>
  );
}

function VisualPlaceholder({ label, indexLabel, dark = false }: { label: string; indexLabel: string; dark?: boolean }) {
  return (
    <div className={`visual-placeholder ${dark ? "visual-dark" : ""}`} aria-label={label}>
      <span className="visual-orbit" />
      <span className="visual-label">{label}</span>
      <span className="visual-index">{indexLabel}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("ja");
  const [wordIndex, setWordIndex] = useState(0);
  const [formNotice, setFormNotice] = useState("");
  const [activeScene, setActiveScene] = useState(0);
  const c = siteContent[locale];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const requested = new URLSearchParams(window.location.search).get("lang");
      const saved = window.localStorage.getItem("site-locale");
      const next = ["ja", "en", "zh"].includes(requested || "") ? requested : saved;
      if (next && ["ja", "en", "zh"].includes(next)) setLocale(next as Locale);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const option = localeOptions.find((item) => item.code === locale);
    document.documentElement.lang = option?.htmlLang || "ja";
    document.title = c.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", c.seo.description);
    window.localStorage.setItem("site-locale", locale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", url);
  }, [locale, c.seo.description, c.seo.title]);

  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((current) => (current + 1) % c.hero.rotatingWords.length), 1800);
    return () => window.clearInterval(timer);
  }, [c.hero.rotatingWords.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = sections.indexOf(entry.target as HTMLElement);
        if (index >= 0) setActiveScene(index);
        sections.forEach((section, sectionIndex) => section.classList.toggle("scene-active", sectionIndex === index));
      }),
      { threshold: 0.38 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    sections.forEach((section, index) => {
      section.dataset.scene = pad(index + 1);
      section.querySelectorAll<HTMLElement>(".reveal").forEach((item, itemIndex) => {
        item.style.setProperty("--reveal-order", String(Math.min(itemIndex, 7)));
        item.style.setProperty("--reveal-x", `${itemIndex % 2 === 0 ? -34 : 34}px`);
      });
    });

    let frame = 0;
    let previousY = window.scrollY;
    let previousTime = performance.now();
    let smoothedVelocity = 0;

    const updateMotion = () => {
      const viewportHeight = Math.max(window.innerHeight, 1);
      const scrollY = window.scrollY;
      const now = performance.now();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const motionScale = reduceMotion ? 0 : window.innerWidth <= 820 ? 0.55 : 1;
      const elapsed = Math.max(now - previousTime, 16);
      const rawVelocity = ((scrollY - previousY) / elapsed) * 16;
      smoothedVelocity += (rawVelocity - smoothedVelocity) * 0.18;
      previousY = scrollY;
      previousTime = now;
      const velocity = Math.max(-18, Math.min(18, smoothedVelocity)) * motionScale;

      const scrollable = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      root.style.setProperty("--page-progress", String(Math.min(1, Math.max(0, scrollY / scrollable))));
      root.style.setProperty("--scroll-velocity", `${velocity.toFixed(2)}px`);
      root.style.setProperty("--header-shift", `${(Math.max(-3, Math.min(0, smoothedVelocity * -0.2)) * motionScale).toFixed(2)}px`);
      root.style.setProperty("--hero-title-x", `${(Math.max(-82, scrollY * -0.12) * motionScale).toFixed(1)}px`);
      root.style.setProperty("--hero-word-x", `${(Math.min(48, scrollY * 0.07) * motionScale).toFixed(1)}px`);
      root.style.setProperty("--hero-visual-y", `${(Math.max(-46, scrollY * -0.065) * motionScale).toFixed(1)}px`);
      root.style.setProperty("--hero-run-x", `${(Math.max(-520, scrollY * -0.42) * motionScale).toFixed(1)}px`);

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const entrance = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight * 0.72)));
        const travel = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const centerDistance = Math.abs(rect.top + rect.height / 2 - viewportHeight / 2);
        const focus = Math.min(1, Math.max(0, 1 - centerDistance / ((rect.height + viewportHeight) / 2)));
        const direction = index % 2 === 0 ? 1 : -1;
        const titleX = (1 - entrance) * 150 * direction * motionScale;
        const runnerDistance = window.innerWidth <= 820 ? 118 : 280;
        const runnerX = (0.5 - travel) * runnerDistance * direction * motionScale + velocity * 2.2;
        const stampX = (travel - 0.5) * 126 * direction * motionScale + velocity * 3.2;
        const mediaY = (0.5 - focus) * 34 * motionScale;
        const curtain = Math.max(0, 1 - entrance * 1.35) * motionScale;

        section.style.setProperty("--scene-progress", entrance.toFixed(3));
        section.style.setProperty("--scene-focus", focus.toFixed(3));
        section.style.setProperty("--scene-title-x", `${titleX.toFixed(1)}px`);
        section.style.setProperty("--scene-meta-x", `${(-titleX * 0.42).toFixed(1)}px`);
        section.style.setProperty("--scene-runner-x", `${runnerX.toFixed(1)}px`);
        section.style.setProperty("--scene-stamp-x", `${stampX.toFixed(1)}px`);
        section.style.setProperty("--scene-media-y", `${mediaY.toFixed(1)}px`);
        section.style.setProperty("--scene-tilt", `${((1 - focus) * 1.1 * direction * motionScale).toFixed(2)}deg`);
        section.style.setProperty("--scene-curtain", curtain.toFixed(3));
      });

      if (!reduceMotion && (Math.abs(smoothedVelocity) > 0.04 || Math.abs(rawVelocity) > 0.04)) {
        frame = window.requestAnimationFrame(updateMotion);
      } else {
        smoothedVelocity = 0;
        root.style.setProperty("--scroll-velocity", "0px");
        frame = 0;
      }
    };

    const requestMotionUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);
    return () => {
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNotice(c.contact.form.notice);
  };

  const changeLocale = (nextLocale: Locale) => {
    setWordIndex(0);
    setFormNotice("");
    setLocale(nextLocale);
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label={`${c.brand.name} ${c.navigation[0].label}`}>
          <span className="brand-dot" />{c.brand.name}
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label={c.ui.mainNavigation}>
          {c.navigation.map((item, index) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}><small>{pad(index + 1)}</small>{item.label}</a>
          ))}
        </nav>
        <div className="header-tools">
          <div className="language-switcher" aria-label={c.ui.language} role="group">
            {localeOptions.map((option) => <button type="button" key={option.code} title={option.label} aria-pressed={locale === option.code} className={locale === option.code ? "active" : ""} onClick={() => changeLocale(option.code)}>{option.short}</button>)}
          </div>
          <button className="menu-button" type="button" aria-label={menuOpen ? c.ui.close : c.ui.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span>{menuOpen ? c.ui.close : c.ui.menu}</span><span className="menu-symbol">{menuOpen ? "×" : "＋"}</span>
          </button>
        </div>
      </header>

      <div className="page-progress" aria-hidden="true"><span /></div>

      <aside className="scene-progress" aria-label={c.ui.sectionProgress}>
        <span>{pad(activeScene + 1)} / {pad(c.scenes.length)}</span>
        <div>{c.scenes.map((scene, index) => <a href={scene.href} key={scene.href} className={activeScene === index ? "active" : ""} aria-label={scene.label} />)}</div>
        <strong>{c.scenes[Math.min(activeScene, c.scenes.length - 1)]?.label}</strong>
      </aside>

      <section className="hero" id="home">
        <div className="hero-topline"><span>{c.brand.eyebrow}</span><span>{c.ui.scroll}</span></div>
        <div className="hero-copy reveal">
          <p className="kicker">{c.hero.kicker}</p>
          <h1><span>{c.hero.title}</span></h1>
          <div className="hero-word" aria-live="polite"><span>{c.ui.from}</span><strong key={`${locale}-${wordIndex}`}>{c.hero.rotatingWords[wordIndex]}</strong></div>
          <p className="hero-subtitle">{c.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={c.hero.primaryAction.href}>{c.hero.primaryAction.label}<span>↘</span></a>
            <a className="button button-ghost" href={c.hero.secondaryAction.href}>{c.hero.secondaryAction.label}<span>→</span></a>
          </div>
        </div>
        <div className="hero-visual reveal"><VisualPlaceholder label={c.hero.visualLabel} indexLabel={c.ui.visualIndex} dark /></div>
        <div className="hero-marquee" aria-hidden="true"><div>{c.hero.marquee}{c.hero.marquee}</div></div>
      </section>

      <section className="section philosophy" id="philosophy">
        <SectionIntro number="01" {...c.sections.philosophy} />
        <div className="philosophy-grid">
          <VisualPlaceholder label={c.philosophy.visualLabel} indexLabel={c.ui.visualIndex} />
          <div className="philosophy-copy reveal">
            <p>{c.philosophy.body}</p>
            <blockquote><span>“</span>{c.philosophy.quote}</blockquote>
          </div>
        </div>
      </section>

      <section className="section problems" id="problems">
        <SectionIntro number="02" {...c.sections.problems} />
        <div className="problem-list">
          {c.problems.map((problem, index) => (
            <article className="problem-row reveal" key={problem.title}>
              <span className="problem-number">{pad(index + 1)}</span><h3>{problem.title}</h3><p>{problem.text}</p><span className="problem-mark">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach" id="approach">
        <SectionIntro number="03" {...c.sections.approach} />
        <div className="approach-grid">
          {c.approach.map((step, index) => (
            <article className="approach-card reveal" key={step.title}>
              <div className="approach-art"><span>{pad(index + 1)}</span><i /></div>
              <h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <SectionIntro number="04" {...c.sections.services} />
        <div className="service-list">
          {c.services.map((service, index) => (
            <details className="service-item reveal" key={service.name}>
              <summary><span>{pad(index + 1)}</span><h3>{service.name}</h3><p>{service.summary}</p><i>＋</i></summary>
              <div className="service-detail"><div className="service-icon">{pad(index + 1)}</div><p>{service.detail}</p><a href="#contact">{c.ui.consultService} <span>→</span></a></div>
            </details>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-heading reveal"><span>{c.experienceGuide.label}</span><h2>{c.experienceGuide.title}</h2><p>{c.experienceGuide.text}</p></div>
        <div className="experience-layout">
          <div className="guide-wheel reveal">
            <span className="wheel-center">{c.experienceGuide.centerLabel.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
            {c.experienceGuide.items.slice(0, 8).map((item, index) => <span className={`wheel-item wheel-${index + 1}`} key={item}>{item}</span>)}
          </div>
          <div className="experience-side reveal"><VisualPlaceholder label={c.experienceGuide.visualLabel} indexLabel={c.ui.visualIndex} dark /><ul>{c.experienceGuide.items.map((item) => <li key={item}><span>↳</span>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="section process" id="process">
        <SectionIntro number="06" {...c.sections.process} />
        <div className="process-list">
          {c.process.map((step, index) => (
            <article className="process-step reveal" key={step.title}><span>{pad(index + 1)}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><i /></article>
          ))}
        </div>
      </section>

      <section className="section cases" id="cases">
        <SectionIntro number="07" {...c.sections.cases} />
        <div className="case-grid">
          {c.cases.map((item, index) => (
            <article className="case-card reveal" key={item.title}>
              <div className={`case-image case-image-${index + 1}`}><span>{item.image}</span><small>{pad(index + 1)} / 03</small></div>
              <div className="case-top"><span>{item.industry}</span><span>{c.ui.comingSoon}</span></div><h3>{item.title}</h3><h4>{item.client}</h4><p>{item.summary}</p>
              <dl><div><dt>{c.ui.servicesLabel}</dt><dd>{item.services}</dd></div><div><dt>{c.ui.resultLabel}</dt><dd>{item.result}</dd></div></dl>
              <button type="button" disabled>{c.ui.viewCase} <span>↗</span></button>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <SectionIntro number="08" {...c.sections.pricing} />
        <div className="pricing-grid">
          {c.pricing.map((plan, index) => (
            <article className={`price-card reveal ${plan.featured ? "featured" : ""}`} key={plan.name}>
              <div className="price-top"><span>0{index + 1}</span>{plan.featured && <em>{c.ui.recommended}</em>}</div><h3>{plan.name}</h3><p className="price-audience">{plan.audience}</p><strong>{plan.price}</strong>
              <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><a href="#contact">{plan.action}<span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="vision" id="vision">
        <div className="vision-orb" aria-hidden="true"><span /><i /></div>
        <div className="vision-copy reveal"><span>{c.vision.label}</span><h2>{c.vision.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{c.vision.text}</p><a href="#contact">{c.ui.startConversation} <span>↘</span></a></div>
      </section>

      <section className="section about" id="about">
        <SectionIntro number="10" {...c.sections.about} />
        <div className="about-grid">
          <VisualPlaceholder label={c.about.teamImage} indexLabel={c.ui.visualIndex} />
          <div className="about-copy reveal"><div><span>{c.ui.team}</span><p>{c.about.team}</p></div><div><span>{c.ui.founder}</span><p>{c.about.founder}</p></div><div><span>{c.ui.background}</span><p>{c.about.background}</p></div><div><span>{c.ui.workingPhilosophy}</span><p>{c.about.philosophy}</p></div></div>
        </div>
        <div className="logo-strip reveal"><span>{c.ui.partners}</span>{c.about.partnerLogos.map((logo, index) => <i key={`${logo}-${index}`}>{logo}</i>)}</div>
      </section>

      <section className="section faq" id="faq">
        <SectionIntro number="11" {...c.sections.faq} />
        <div className="faq-layout"><p className="faq-note reveal">{c.ui.faqMissing}<br /><a href="#contact">{c.ui.faqContact}</a></p><div className="faq-list">{c.faqs.map((faq, index) => <details className="faq-item reveal" key={faq.question}><summary><span>{pad(index + 1)}</span><h3>{faq.question}</h3><i>＋</i></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro reveal"><span>{c.ui.contactLabel}</span><h2>{c.ui.contactTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{c.ui.contactIntro}</p><a href="#contact">{c.contact.email}</a><div className="social-links">{c.contact.socials.map((social) => <a href={social.href} key={social.label}>{social.label} ↗</a>)}</div></div>
        <form className="contact-form reveal" onSubmit={submitForm}>
          <div className="field-row"><label>{c.contact.form.name}<input name="name" required placeholder={c.contact.form.namePlaceholder} /></label><label>{c.contact.form.company}<input name="company" placeholder={c.contact.form.companyPlaceholder} /></label></div>
          <div className="field-row"><label>{c.contact.form.email}<input type="email" name="email" required placeholder="you@example.com" /></label><label>{c.contact.form.website}<input type="url" name="website" placeholder="https://" /></label></div>
          <label>{c.contact.form.service}<select name="service" defaultValue=""><option value="" disabled>{c.contact.form.choose}</option>{c.contact.services.map((service) => <option key={service}>{service}</option>)}</select></label>
          <label>{c.contact.form.message}<textarea name="message" required rows={5} placeholder={c.contact.form.messagePlaceholder} /></label>
          <button type="submit">{c.contact.form.submit} <span>↗</span></button><small>{c.contact.note}</small>{formNotice && <p className="form-notice" role="status">{formNotice}</p>}
        </form>
      </section>

      <footer>
        <div className="footer-pattern" aria-hidden="true">
          <div className="footer-pattern-field" />
          <div className="footer-pattern-seal"><span>{c.ui.seal}</span><i /></div>
          <div className="footer-pattern-words">
            {c.footer.motifWords.map((word, index) => <span key={word}>{word}<i>{pad(index + 1)}</i></span>)}
          </div>
        </div>
        <div className="footer-top"><div><a className="brand-mark footer-brand" href="#home"><span className="brand-dot" />{c.brand.name}</a><p>{c.footer.description}</p></div><div className="footer-nav">{c.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div><div className="footer-contact"><span>{c.ui.contact}</span><a href="#contact">{c.contact.email}</a>{c.contact.socials.map((social) => <a href={social.href} key={social.label}>{social.label} ↗</a>)}</div></div>
        <div className="footer-bottom"><span>{c.footer.copyright}</span><a href="#home">{c.footer.privacyLabel}</a><a href="#home">{c.ui.backToTop}</a></div>
      </footer>
    </main>
  );
}
