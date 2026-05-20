import { Project } from "@/data/portfolio";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl bg-card border scrollbar-thin">
            <div className={`h-56 bg-linear-to-br ${project.gradient} relative`}>
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/90">{project.title}</span>
              </div>
              <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-lg bg-black/30 backdrop-blur text-white hover:bg-black/50 cursor-pointer">
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
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />{f}
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

export default ProjectModal;