import { motion } from "framer-motion";
import Section from "../common/Section";
import { skills } from "@/data/portfolio";
import { useState } from "react";

function Skills() {
  const categories = Object.keys(skills) as (keyof typeof skills)[];
  const [active, setActive] = useState<keyof typeof skills>(categories[0]);
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === c ? "bg-gradient-primary text-white shadow-lg" : "glass text-muted-foreground hover:text-foreground cursor-pointer"}`}>
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

export default Skills;