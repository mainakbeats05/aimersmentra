import { motion } from "motion/react";
import { Phone, MessageCircle, Send, Mail, MapPin, Instagram } from "lucide-react";
import { SectionHeader } from "./Section";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Let's shape your <span className="text-aurora">future, together</span></>}
          subtitle="Book a free 30-minute counselling session. No commitments, only clarity."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* CTA panel */}
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call Now", value: "+91 70209 34294", href: "tel:+917020934294" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/917020934294" },
              { icon: Mail, label: "Email", value: "aimersmentra@gmail.com", href: "mailto:aimersmentra@gmail.com" },
              { icon: Instagram, label: "Instagram", value: "@aiimers.official_", href: "https://www.instagram.com/aiimers.official_?igsh=MTJ4dHBrbGVtMzJ6bg==" },
            ].map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ x: 6 }}
                className="glass group relative flex items-center justify-between overflow-hidden rounded-2xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-aurora shadow-glow">
                    <c.icon className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
                <Send className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </motion.a>
            ))}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" /> Head Office
              </div>
              <div className="mt-1 font-medium">Pune, Maharashtra, India</div>
              <div className="text-xs text-muted-foreground">Counsellors across 25+ cities</div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -top-32 -right-32 size-80 rounded-full bg-aurora opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-gold/50 opacity-30 blur-3xl" />

            <div className="relative grid gap-5">
              <h3 className="font-display text-2xl font-semibold">Book Free Counselling</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" placeholder="Aarav Mehta" />
                <Field label="Phone" placeholder="+91 70209 34294" />
              </div>
              <Field label="Email" placeholder="you@email.com" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="City" placeholder="Pune" />
                <Field label="Interested In" placeholder="B.Tech, MBA, MBBS…" />
              </div>
              <div>
                <label className="mb-2 block text-xs tracking-wider uppercase text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals…"
                  className="w-full resize-none rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-aurora py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                {sent ? "Thanks — we'll reach out within 24h ✨" : (<>Book My Free Session <Send className="size-4" /></>)}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting you agree to our privacy policy. No spam, ever.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs tracking-wider uppercase text-muted-foreground">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
