import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 pt-16 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-aurora shadow-glow">
                <Sparkles className="size-4 text-background" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-semibold">
                Aimers <span className="text-aurora">Mentra</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Shaping futures. Creating leaders. India's premium admission consultancy
              guiding ambitious students into the country's best universities.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-muted-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Counselling", "Medical Admissions", "Engineering", "MBA", "Scholarships"].map(x => (
                <li key={x}><a href="#services" className="transition-colors hover:text-neon">{x}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-muted-foreground">Cities</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Pune", "Mumbai", "Bengaluru", "Delhi", "Hyderabad"].map(x => (
                <li key={x}><a href="#cities" className="transition-colors hover:text-neon">{x}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Aimers Mentra. All rights reserved.</div>
          <div>Crafted with cinematic care · Pune, India</div>
        </div>
      </div>
    </footer>
  );
}
