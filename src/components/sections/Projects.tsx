import { Project, projects } from "@/data/portfolio";
import { useState } from "react";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectModal from "../ui/ProjectModal";

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
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${filter === f.id ? "bg-gradient-primary text-white shadow-lg" : "glass text-muted-foreground hover:text-foreground cursor-pointer"}`}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <motion.button key={p.id} onClick={() => setSelected(p)} layout
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass text-left hover:-translate-y-1 transition">
            <div className={`h-48 bg-linear-to-br ${p.gradient} relative overflow-hidden`}>
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
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all cursor-pointer">
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

export default Projects;