import { motion } from "motion/react";
import logo from "@/assets/aimers-logo.png";
import { useCounselling } from "./CounsellingDialog";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#departments", label: "Departments" },
  { href: "#colleges", label: "Colleges" },
  { href: "#cities", label: "Cities" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const { setOpen } = useCounselling();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2"
    >
      <nav className="glass-strong flex items-center justify-between rounded-full px-3 py-2 pl-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Aimers Mentra" className="size-9 object-contain" width={36} height={36} />
          <span className="font-display text-lg font-semibold tracking-tight">
            Aimers <span className="text-aurora">Mentra</span>
          </span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(true)}
          className="group relative inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
        >
          Book Counselling
        </button>
      </nav>
    </motion.header>
  );
}
