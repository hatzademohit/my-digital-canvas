import { techStack } from "@/data/portfolio";
import Section from "../common/Section";
import { motion } from "framer-motion";

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

export default TechStack;