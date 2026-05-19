import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Section from "../common/Section";
import { portfolio } from "@/data/portfolio";
import SocialIcons from "../common/SocialLinks";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import Field from "../common/Flied";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});
type ContactForm = z.infer<typeof contactSchema>;

function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 600));
    const body = encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`);
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    toast.success("Opening your email client…");
    reset();
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-muted-foreground">
            Got a project, a role, or just want to chat about React perf? Drop me a line — I reply within 24 hours.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
              { icon: Phone, label: "Phone", value: portfolio.phone, href: `tel:${portfolio.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: portfolio.location, href: "#" },
            ].map((it) => (
              <a key={it.label} href={it.href} className="flex items-center gap-4 rounded-xl glass p-4 hover:bg-white/10 transition">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-white">
                  <it.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{it.label}</p>
                  <p className="text-sm font-medium">{it.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> {portfolio.availability}
          </div>
          <div className="mt-8"><SocialIcons /></div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)} className="rounded-2xl glass p-6 space-y-4">
          <Field label="Your name" error={errors.name?.message}>
            <input {...register("name")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition" placeholder="Jane Doe" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" {...register("email")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition" placeholder="jane@example.com" />
          </Field>
          <Field label="Subject" error={errors.subject?.message}>
            <input {...register("subject")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition" placeholder="Project inquiry" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea rows={5} {...register("message")} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-primary transition resize-none" placeholder="Tell me about your project…" />
          </Field>
          <button type="submit" disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-white shadow-lg hover:opacity-90 transition disabled:opacity-50 cursor-pointer">
            {isSubmitting ? (
              <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Sending…</>
            ) : (
              <>Send message <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

export default Contact;