import { NAV_ITEMS } from "@/constants/navigation";

function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer className="border-t border-white/5 px-6 py-12 mt-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white">M</span>
            Mohit<span className="text-gradient">.</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">Frontend Developer crafting fast, accessible web experiences.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.slice(0, 6).map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-muted-foreground hover:text-foreground transition cursor-pointer">{n.label}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          {/* <SocialIcons />
          <p className="mt-4 text-sm text-muted-foreground">{portfolio.email}</p> */}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mohit Hatzade. Built with React, TanStack Start & a lot of caffeine.
      </div>
    </footer>
  );
}

export default Footer;