import { motion } from "framer-motion";
import { Download, Code2, Palette, Zap, Smartphone, TestTube2, Rocket, Accessibility, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import Section from "../common/Section";
import { portfolio } from "@/data/portfolio";

const iconMap: Record<string, any> = { Code2, Palette, Zap, Smartphone, TestTube2, Rocket, Accessibility, Sparkles };

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

export default About;