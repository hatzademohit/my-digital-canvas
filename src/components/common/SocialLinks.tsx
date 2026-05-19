import { portfolio } from "@/data/portfolio";
import { Mail } from "lucide-react";

const GithubIcon = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>);
const LinkedinIcon = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.3a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM19 19h-3v-4.7c0-1.1-.4-1.9-1.4-1.9a1.6 1.6 0 00-1.5 1.1 2 2 0 00-.1.7V19h-3v-9h3v1.3a3 3 0 012.7-1.5c2 0 3.4 1.3 3.4 4z"/></svg>);
const TwitterIcon = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);

function SocialIcons() {
  const items = [
    { Icon: GithubIcon, href: portfolio.socials.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: portfolio.socials.linkedin, label: "LinkedIn" },
    { Icon: TwitterIcon, href: portfolio.socials.twitter, label: "Twitter" },
    { Icon: Mail, href: portfolio.socials.email, label: "Email" },
  ];
  return (
    <div className="flex gap-2">
      {items.map(({ Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
          className="grid h-11 w-11 place-items-center rounded-lg glass text-muted-foreground hover:text-foreground hover:bg-white/10 transition hover:-translate-y-0.5">
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;