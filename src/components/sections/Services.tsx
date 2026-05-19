import { services } from "@/data/portfolio";
import Section from "../common/Section";
import { Accessibility, ArrowRight, Code2, Palette, Rocket, Smartphone, Sparkles, TestTube2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = { Code2, Palette, Zap, Smartphone, TestTube2, Rocket, Accessibility, Sparkles };

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

export default Services;