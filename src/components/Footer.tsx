import { Mail, MessageCircle, Phone, Instagram } from "lucide-react";
import logo from "@/assets/aimers-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 pt-16 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Aimers Mentra" className="size-10 object-contain" width={40} height={40} />
              <span className="font-display text-xl font-semibold">
                Aimers <span className="text-aurora">Mentra</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Shaping futures. Creating leaders. India's premium admission consultancy
              guiding ambitious students into the country's best universities.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a href="tel:+917020934294" className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:text-primary">
                <Phone className="size-4 text-primary" /> +91 70209 34294
              </a>
              <a href="https://wa.me/917020934294" target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:text-primary">
                <MessageCircle className="size-4 text-primary" /> WhatsApp
              </a>
              <a href="mailto:aimersmentra@gmail.com" className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:text-primary">
                <Mail className="size-4 text-primary" /> Email
              </a>
              <a href="https://www.instagram.com/aiimers.official_?igsh=MTJ4dHBrbGVtMzJ6bg==" target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:text-primary">
                <Instagram className="size-4 text-primary" /> Instagram
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-muted-foreground">Departments</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["B.Tech","MBA","MBBS","B.Arch","BBA","B.Des"].map(x => (
                <li key={x}><a href="#departments" className="transition-colors hover:text-primary">{x}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-muted-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="transition-colors hover:text-primary">About</a></li>
              <li><a href="#colleges" className="transition-colors hover:text-primary">Colleges</a></li>
              <li><a href="#faq" className="transition-colors hover:text-primary">FAQ</a></li>
              <li><a href="#policies" className="transition-colors hover:text-primary">Policies</a></li>
              <li><a href="#contact" className="transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Aimers Mentra. All rights reserved.</div>
          <div>Crafted with cinematic care · Pune, India</div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917020934294"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-aurora text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
    </footer>
  );
}
