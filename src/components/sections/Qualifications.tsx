import { portfolio } from "@/data/portfolio";
import { Award, Briefcase, Calendar, ExternalLink, GraduationCap } from "lucide-react";
import { useState } from "react";
import Section from "../common/Section";
import { motion } from "framer-motion";

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
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition cursor-pointer ${tab === t.id ? "bg-gradient-primary text-white shadow-lg" : "glass text-muted-foreground hover:text-foreground"}`}>
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-primary via-accent to-transparent" />
        <div className="space-y-6">
          {active.items.map((it: any, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative pl-12">
              <div className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-white shadow-lg">
                <Calendar className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-xl glass px-5 py-3">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-semibold">{it.title}</h3>
                  {it.date && <span className="text-xs text-muted-foreground">{it.date}</span>}
                </div>
                <p className="text-sm text-primary">{it.sub}</p>
                {it.desc && <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>}
                {/* {it.url && (
                  <a href={it.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View credential <ExternalLink className="h-3 w-3" />
                  </a>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Qualifications;