import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import Section from "../common/Section";
import { blog } from "@/data/portfolio";
import dayjs from "dayjs"

function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Notes from the keyboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blog.map((b, i) => (
          <motion.a key={b.title} href={b.url} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group overflow-hidden rounded-2xl glass hover:-translate-y-1 transition">
            <div className={`h-40 bg-linear-to-br ${b.gradient} relative`}>
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

export default Blog;