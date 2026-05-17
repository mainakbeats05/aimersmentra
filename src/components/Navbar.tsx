import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#colleges", label: "Colleges" },
  { href: "#cities", label: "Cities" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2"
    >
      <nav className="glass-strong flex items-center justify-between rounded-full px-3 py-2 pl-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-aurora shadow-glow">
            <Sparkles className="size-4 text-background" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Aimers <span className="text-aurora">Mentra</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 text-sm font-medium text-background shadow-glow transition-transform hover:scale-[1.03]"
        >
          Book Counselling
        </a>
      </nav>
    </motion.header>
  );
}
