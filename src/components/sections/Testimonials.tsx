import { testimonials } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Section from "../common/Section";

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
        <div className="relative overflow-hidden rounded-2xl glass p-8 md:p-12 min-h-70">
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
            className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition cursor-pointer">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-primary" : "w-2 bg-white/20"}`} />
            ))}
          </div>
          <button onClick={() => setIdx((i) => (i + 1) % testimonials.length)} aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition cursor-pointer">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;