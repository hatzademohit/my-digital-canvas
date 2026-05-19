import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Section from "../common/Section";
import { portfolio } from "@/data/portfolio";
import { Counter } from "../counter";

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

export default Achievements;