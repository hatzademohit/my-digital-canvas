import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail, MapPin, Phone, Download, ArrowDown, ArrowRight,
  Menu, X, Sun, Moon, Code2, Palette, Zap, Smartphone, TestTube2, Rocket,
  Accessibility, Star, ChevronLeft, ChevronRight, ChevronDown, ExternalLink,
  Calendar, Briefcase, GraduationCap, Award, ArrowUp, Clock, Tag, Sparkles,
} from "lucide-react";
import dayjs from "dayjs";
import { portfolio, skills, services, techStack, projects, testimonials, faqs, blog, type Project } from "@/data/portfolio";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Counter } from "@/components/counter";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Mohit Hatzade — Frontend Developer Portfolio" },
      { name: "description", content: "Portfolio of Mohit Hatzade — React, Next.js & TypeScript engineer based in Nagpur, India. 4+ years building fast, accessible web apps." },
      { property: "og:title", content: "Mohit Hatzade — Frontend Developer Portfolio" },
      { property: "og:description", content: "React, Next.js & TypeScript engineer. View projects, skills and contact details." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const iconMap: Record<string, any> = { Code2, Palette, Zap, Smartphone, TestTube2, Rocket, Accessibility, Sparkles };

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "qualifications", label: "Resume" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) { setActive(sections[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} setTheme={setTheme} active={active} scrolled={scrolled}
        menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <main id="main">
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Services />
        <TechStack />
        <Projects />
        <Achievements />
        <Qualifications />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-white shadow-lg hover:scale-110 transition"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar({ theme, setTheme, active, scrolled, menuOpen, setMenuOpen, scrollTo }: any) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white">M</span>
          <span className="hidden sm:inline">Mohit<span className="text-gradient">.</span></span>
        </button>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollTo(n.id)}
                aria-current={active === n.id ? "page" : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span layoutId="nav-active" className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-primary" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-lg glass hover:bg-white/10 transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button onClick={() => scrollTo("contact")} className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white shadow-lg hover:opacity-90 transition">
            Hire Me <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden grid h-10 w-10 place-items-center rounded-lg glass" aria-label="Open menu" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-3 rounded-2xl glass p-4">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => scrollTo(n.id)} className={`w-full rounded-lg px-4 py-2.5 text-left text-sm ${active === n.id ? "bg-white/10 text-foreground" : "text-muted-foreground"}`}>
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- SECTION WRAPPER ---------------- */
function Section({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow?: string; title?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
            {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
            {title && <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  const typed = useTypingEffect(portfolio.roles);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 px-6">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
      <div aria-hidden className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div aria-hidden className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> {portfolio.availability}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">{portfolio.firstName}</span>
            <br />
            <span className="cursor-blink text-foreground/90">{typed}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-muted-foreground">{portfolio.tagline}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-white shadow-lg hover:opacity-90 transition">
              Hire Me <ArrowRight className="h-4 w-4" />
            </button>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 font-medium hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Resume
            </a>
            <button onClick={() => scrollTo("projects")} className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-muted-foreground hover:text-foreground transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <SocialIcons />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto">
          <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-40 blur-2xl animate-float" />
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary p-1">
              <div className="h-full w-full rounded-full bg-background p-2">
                <img src={profileImg} alt="Mohit Hatzade" width={768} height={768} className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl glass px-3 py-2 text-xs font-medium animate-float" style={{ animationDelay: "1s" }}>
              <Sparkles className="inline h-3 w-3 text-primary" /> React Pro
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl glass px-3 py-2 text-xs font-medium animate-float" style={{ animationDelay: "2s" }}>
              <Zap className="inline h-3 w-3 text-accent" /> 25% faster
            </div>
          </div>
        </motion.div>
      </div>
      <button onClick={() => scrollTo("about")} aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition">
        <ArrowDown className="h-6 w-6 animate-bounce-soft" />
      </button>
    </section>
  );
}
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const GithubIcon = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>);
const LinkedinIcon = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.3a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM19 19h-3v-4.7c0-1.1-.4-1.9-1.4-1.9a1.6 1.6 0 00-1.5 1.1 2 2 0 00-.1.7V19h-3v-9h3v1.3a3 3 0 012.7-1.5c2 0 3.4 1.3 3.4 4z"/></svg>);
const TwitterIcon = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);

function SocialIcons() {
  const items = [
    { Icon: GithubIcon, href: portfolio.socials.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: portfolio.socials.linkedin, label: "LinkedIn" },
    { Icon: TwitterIcon, href: portfolio.socials.twitter, label: "Twitter" },
    { Icon: Mail, href: portfolio.socials.email, label: "Email" },
  ];
  return (
    <div className="flex gap-2">
      {items.map(({ Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
          className="grid h-11 w-11 place-items-center rounded-lg glass text-muted-foreground hover:text-foreground hover:bg-white/10 transition hover:-translate-y-0.5">
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <Section id="about" eyebrow="About Me" title="The story behind the code">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-3xl glass p-2">
            <img src={profileImg} alt="" loading="lazy" width={768} height={768} className="h-full w-full rounded-2xl object-cover" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-muted-foreground leading-relaxed">{portfolio.bio}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Based in {portfolio.location}, I've spent 4+ years at Valethi Technologies shipping production apps across React,
            Next.js and legacy stacks. I care deeply about performance, accessibility, and the kind of clean component design
            that makes teams faster six months from now.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {portfolio.strengths.map((s) => {
              const Icon = iconMap[s.icon] ?? Sparkles;
              return (
                <div key={s.title} className="rounded-xl glass p-4">
                  <Icon className="h-5 w-5 text-primary mb-2" />
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <a href="/resume.pdf" download className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:opacity-90 transition">
            <Download className="h-4 w-4" /> Download CV
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  const categories = Object.keys(skills) as (keyof typeof skills)[];
  const [active, setActive] = useState<keyof typeof skills>(categories[0]);
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === c ? "bg-gradient-primary text-white shadow-lg" : "glass text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mx-auto grid max-w-3xl gap-4">
        {skills[active].map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="rounded-xl glass p-5">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-primary" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <Section id="services" eyebrow="Services" title="How I can help">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] ?? Sparkles;
          return (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover:-translate-y-1 transition">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition" />
              <div className="relative">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- TECH STACK ---------------- */
function TechStack() {
  return (
    <Section id="techstack" eyebrow="Tech Stack" title="My daily toolkit">
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
            className="group relative rounded-xl glass px-5 py-3 hover:bg-white/10 hover:-translate-y-1 transition" title={t.category}>
            <span className="font-medium">{t.name}</span>
            <span className="ml-2 text-xs text-muted-foreground">{t.category}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const [filter, setFilter] = useState<"all" | Project["category"]>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const filters: { id: typeof filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "tool", label: "Tools" },
    { id: "internal", label: "Internal" },
  ];

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button key={f.id} onClick={() => setFilter(f.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${filter === f.id ? "bg-gradient-primary text-white shadow-lg" : "glass text-muted-foreground hover:text-foreground"}`}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <motion.button key={p.id} onClick={() => setSelected(p)} layout
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass text-left hover:-translate-y-1 transition">
            <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/90">{p.title}</span>
              </div>
              {p.featured && (
                <span className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                  ★ Featured
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <p className="text-sm text-primary mb-3">{p.subtitle}</p>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs">{t}</span>
                ))}
                {p.tech.length > 4 && <span className="rounded-md bg-white/5 px-2 py-1 text-xs">+{p.tech.length - 4}</span>}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur p-4">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog" aria-modal="true" aria-label={project.title}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl bg-card border">
            <div className={`h-56 bg-gradient-to-br ${project.gradient} relative`}>
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/90">{project.title}</span>
              </div>
              <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-lg bg-black/30 backdrop-blur text-white hover:bg-black/50">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-primary">{project.subtitle} · {project.date}</p>
              <h3 className="mt-1 text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-muted-foreground">{project.description}</p>
              <h4 className="mt-6 font-semibold">Key Features</h4>
              <ul className="mt-2 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 font-semibold">Tech Stack</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((t) => <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs">{t}</span>)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Achievements() {
  return (
    <Section id="achievements" eyebrow="By the numbers" title="A few proud milestones">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolio.stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-4xl font-bold text-gradient">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- QUALIFICATIONS ---------------- */
function Qualifications() {
  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase, items: portfolio.experience.map((e) => ({ title: e.role, sub: e.company, date: e.date, desc: e.description })) },
    { id: "education", label: "Education", icon: GraduationCap, items: portfolio.education.map((e) => ({ title: e.degree, sub: e.school, date: e.date, desc: e.description })) },
    { id: "certifications", label: "Certifications", icon: Award, items: portfolio.certifications.map((c) => ({ title: c.name, sub: c.issuer, date: c.date, desc: "", url: c.url })) },
  ];
  const [tab, setTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === tab)!;

  return (
    <Section id="qualifications" eyebrow="Resume" title="Qualifications">
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${tab === t.id ? "bg-gradient-primary text-white shadow-lg" : "glass text-muted-foreground hover:text-foreground"}`}>
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="space-y-6">
          {active.items.map((it: any, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative pl-12">
              <div className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-white shadow-lg">
                <Calendar className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-xl glass p-5">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-semibold">{it.title}</h3>
                  {it.date && <span className="text-xs text-muted-foreground">{it.date}</span>}
                </div>
                <p className="text-sm text-primary">{it.sub}</p>
                {it.desc && <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>}
                {it.url && (
                  <a href={it.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View credential <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What people say">
      <div className="mx-auto max-w-3xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="relative overflow-hidden rounded-2xl glass p-8 md:p-12 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: testimonials[idx].rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-lg md:text-xl leading-relaxed">"{testimonials[idx].quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-bold text-white">
                  {testimonials[idx].name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold">{testimonials[idx].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[idx].role} · {testimonials[idx].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)} aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-primary" : "w-2 bg-white/20"}`} />
            ))}
          </div>
          <button onClick={() => setIdx((i) => (i + 1) % testimonials.length)} aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- BLOG ---------------- */
function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Notes from the keyboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blog.map((b, i) => (
          <motion.a key={b.title} href={b.url} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group overflow-hidden rounded-2xl glass hover:-translate-y-1 transition">
            <div className={`h-40 bg-gradient-to-br ${b.gradient} relative`}>
              <div className="absolute inset-0 dot-grid opacity-20" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {dayjs(b.date).format("MMM D, YYYY")}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {b.readTime}</span>
              </div>
              <h3 className="mt-2 font-semibold leading-tight group-hover:text-primary transition">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {b.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-xs">
                    <Tag className="h-2.5 w-2.5" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Common questions">
      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-xl glass overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 text-left font-medium">
                {f.q}
                <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});
type ContactForm = z.infer<typeof contactSchema>;

function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 600));
    const body = encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`);
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    toast.success("Opening your email client…");
    reset();
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-muted-foreground">
            Got a project, a role, or just want to chat about React perf? Drop me a line — I reply within 24 hours.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
              { icon: Phone, label: "Phone", value: portfolio.phone, href: `tel:${portfolio.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: portfolio.location, href: "#" },
            ].map((it) => (
              <a key={it.label} href={it.href} className="flex items-center gap-4 rounded-xl glass p-4 hover:bg-white/10 transition">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-white">
                  <it.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{it.label}</p>
                  <p className="text-sm font-medium">{it.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> {portfolio.availability}
          </div>
          <div className="mt-8"><SocialIcons /></div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)} className="rounded-2xl glass p-6 space-y-4">
          <Field label="Your name" error={errors.name?.message}>
            <input {...register("name")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition" placeholder="Jane Doe" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" {...register("email")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition" placeholder="jane@example.com" />
          </Field>
          <Field label="Subject" error={errors.subject?.message}>
            <input {...register("subject")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition" placeholder="Project inquiry" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea rows={5} {...register("message")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition resize-none" placeholder="Tell me about your project…" />
          </Field>
          <button type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-white shadow-lg hover:opacity-90 transition disabled:opacity-50">
            {isSubmitting ? (
              <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Sending…</>
            ) : (
              <>Send message <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer className="border-t border-white/5 px-6 py-12 mt-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white">M</span>
            Mohit<span className="text-gradient">.</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">Frontend Developer crafting fast, accessible web experiences.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-muted-foreground hover:text-foreground transition">{n.label}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <SocialIcons />
          <p className="mt-4 text-sm text-muted-foreground">{portfolio.email}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mohit Hatzade. Built with React, TanStack Start & a lot of caffeine.
      </div>
    </footer>
  );
}
