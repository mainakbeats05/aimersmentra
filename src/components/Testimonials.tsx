import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { Quote } from "lucide-react";

const items = [
  { name: "Aarav Mehta", course: "B.Tech CSE, MIT-WPU", text: "Aimers Mentra didn't just guide me to a college — they helped me discover what I actually wanted to build my life around. The mentorship was unreal." },
  { name: "Sanya Kapoor", course: "MBBS, DY Patil", text: "From NEET counselling to documentation, every step felt premium and personal. I had clarity at every turn." },
  { name: "Rohan Iyer", course: "MBA, NMIMS Mumbai", text: "Their network and shortlisting strategy got me into a school I didn't think I could touch. Worth every minute." },
  { name: "Ishita Sharma", course: "BBA, Christ University", text: "I came in confused. I left with a 4-year roadmap and a campus I love. They genuinely care." },
  { name: "Kabir Singh", course: "B.Des, MIT-ADT", text: "Their team understood my creative profile and curated the perfect set of design schools to apply to." },
  { name: "Neha Reddy", course: "Engineering, VIT", text: "Smooth, transparent, and they never disappeared after the payment. That meant everything to my parents." },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Student Stories"
          title={<>Real journeys. <span className="text-aurora">Real outcomes.</span></>}
        />

        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {loop.map((t, i) => (
              <div
                key={i}
                className="glass-strong relative w-[360px] shrink-0 overflow-hidden rounded-3xl p-7"
              >
                <div className="absolute -top-10 -right-10 size-32 rounded-full bg-aurora opacity-20 blur-2xl" />
                <Quote className="size-8 text-neon opacity-80" />
                <p className="relative mt-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid size-10 place-items-center rounded-full bg-aurora font-display text-sm font-semibold text-background">
                    {t.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
