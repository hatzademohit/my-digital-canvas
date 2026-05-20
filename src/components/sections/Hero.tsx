import { motion } from "framer-motion";
import { Download, ArrowDown, ArrowRight, Sparkles, Zap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import profileImg from "@/assets/profile.jpg"
import SocialIcons from "../common/SocialLinks";

function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
  const typed = useTypingEffect(portfolio.roles);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 px-6">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
      <div aria-hidden className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div aria-hidden className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> {portfolio.availability}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">{portfolio.firstName}</span>
            <br />
            <span className="cursor-blink text-foreground/90">{typed}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-muted-foreground">{portfolio.tagline}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-white shadow-lg hover:opacity-90 transition cursor-pointer">
              Hire Me <ArrowRight className="h-4 w-4" />
            </button>
            <a href="/Mohit_Hatzade_Resume_Frontend_Developer.pdf" download className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 font-medium hover:bg-white/10 transition cursor-pointer">
              <Download className="h-4 w-4" /> Resume
            </a>
            <button onClick={() => scrollTo("projects")} className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-muted-foreground hover:text-foreground transition cursor-pointer">
              View Projects <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <SocialIcons />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto">
          <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-40 blur-2xl animate-float" />
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary p-1">
              <div className="h-full w-full rounded-full bg-background p-2">
                <img src={profileImg} alt="Mohit Hatzade" width={768} height={768} className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl glass px-3 py-2 text-xs font-medium animate-float" style={{ animationDelay: "1s" }}>
              <Sparkles className="inline h-3 w-3 text-primary" /> React Pro
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl glass px-3 py-2 text-xs font-medium animate-float" style={{ animationDelay: "2s" }}>
              <Zap className="inline h-3 w-3 text-accent" /> 25% faster
            </div>
          </div>
        </motion.div>
      </div>
      <button onClick={() => scrollTo("about")} aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition cursor-pointer">
        <ArrowDown className="h-6 w-6 animate-bounce-soft" />
      </button>
    </section>
  );
}

export default Hero;