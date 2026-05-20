import { NAV } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";

function Navbar({ theme, setTheme, active, scrolled, menuOpen, setMenuOpen, scrollTo }: any) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b ${scrolled ? "py-3" : "py-5"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-bold text-lg cursor-pointer">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white">M</span>
          <span className="hidden sm:inline">Mohit<span className="text-gradient">.</span></span>
        </button>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollTo(n.id)}
                aria-current={active === n.id ? "page" : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition cursor-pointer ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span layoutId="nav-active" className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-primary" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-lg glass hover:bg-white/10 transition cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button onClick={() => scrollTo("contact")} className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white shadow-lg hover:opacity-90 transition cursor-pointer">
            Hire Me <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden grid h-10 w-10 place-items-center rounded-lg glass cursor-pointer" aria-label="Open menu" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-3 rounded-2xl glass p-4">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => scrollTo(n.id)} className={`w-full rounded-lg px-4 py-2.5 text-left text-sm cursor-pointer ${active === n.id ? "bg-white/10 text-foreground" : "text-muted-foreground"}`}>
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;