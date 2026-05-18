import { motion } from "motion/react";
import { ShieldCheck, FileText, Lock, RefreshCcw } from "lucide-react";
import { SectionHeader } from "./Section";

const policies = [
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    intro: "Your data is yours. Period.",
    points: [
      "We collect only the information needed to advise you on admissions.",
      "Your personal details are never sold, rented, or shared with third parties for marketing.",
      "Information may be shared with the universities you choose to apply to, with your consent.",
      "You can request deletion of your data anytime by writing to aimersmentra@gmail.com.",
    ],
  },
  {
    icon: FileText,
    title: "Terms of Service",
    intro: "Clear, honest, and student-first.",
    points: [
      "Counselling sessions and recommendations are advisory; final admission decisions rest with universities.",
      "Our fees, scope and timelines are documented in writing before any engagement begins.",
      "Outcome estimates are based on historical data and student profile fit — not guaranteed promises.",
      "You agree to share accurate academic and personal information to enable correct guidance.",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Refund Policy",
    intro: "Fair refunds when commitments aren't met.",
    points: [
      "Initial counselling sessions are always free.",
      "Service fees are refundable on a pro-rata basis if we are unable to begin delivery within 14 days.",
      "Refund requests must be raised within 30 days of payment via email to aimersmentra@gmail.com.",
      "Third-party costs (entrance fees, application fees, university charges) are non-refundable.",
    ],
  },
  {
    icon: Lock,
    title: "Cookie & Data Use",
    intro: "Minimal tracking. Maximum value.",
    points: [
      "We use essential cookies to keep the site running and analytics cookies to improve experience.",
      "No advertising or cross-site tracking cookies are used.",
      "You can disable non-essential cookies in your browser at any time.",
      "Aggregate, anonymised data may be used to improve our counselling models.",
    ],
  },
];

export function Policies() {
  return (
    <section id="policies" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Policies"
          title={<>Built on <span className="text-aurora">trust & transparency</span></>}
          subtitle="The rules we hold ourselves to — so families can engage with complete peace of mind."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {policies.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl p-8"
            >
              <div className="absolute -top-16 -right-16 size-40 rounded-full bg-aurora opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-aurora shadow-glow">
                    <p.icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm font-medium text-primary">{p.intro}</p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {p.points.map((pt, k) => (
                    <li key={k} className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          For any policy clarifications, write to{" "}
          <a href="mailto:aimersmentra@gmail.com" className="text-primary hover:underline">aimersmentra@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}
