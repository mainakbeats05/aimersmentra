import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { GraduationCap } from "lucide-react";

const colleges = [
  { name: "Symbiosis International University", short: "SIU", city: "Pune", tag: "Top NAAC A++" },
  { name: "MIT Art, Design & Technology University", short: "MIT-ADT", city: "Pune", tag: "Creative Tech" },
  { name: "DY Patil International University", short: "DYPIU", city: "Pune", tag: "Multidisciplinary" },
  { name: "Bharati Vidyapeeth", short: "BVP", city: "Pune", tag: "Deemed-to-be" },
  { name: "NMIMS University", short: "NMIMS", city: "Mumbai", tag: "Business Excellence" },
  { name: "MIT World Peace University", short: "MIT-WPU", city: "Pune", tag: "Future-ready" },
  { name: "Christ University", short: "Christ", city: "Bengaluru", tag: "Holistic Education" },
  { name: "Jain University", short: "Jain", city: "Bengaluru", tag: "Innovation Hub" },
  { name: "SRM Institute", short: "SRM", city: "Chennai", tag: "Research Driven" },
  { name: "VIT University", short: "VIT", city: "Vellore", tag: "Global Recognition" },
];

export function Colleges() {
  const loop = [...colleges, ...colleges];
  return (
    <section id="colleges" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Partner Institutions"
          title={<>India's most respected <span className="text-aurora">universities</span></>}
          subtitle="A curated network of premium institutions where our students build their futures."
        />

        {/* Marquee logo wall */}
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((c, i) => (
              <div key={i} className="glass flex h-20 w-56 shrink-0 items-center gap-3 rounded-2xl px-5">
                <div className="grid size-10 place-items-center rounded-lg bg-aurora">
                  <GraduationCap className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.short}</div>
                  <div className="text-xs text-muted-foreground">{c.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured college cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.slice(0, 6).map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass group relative overflow-hidden rounded-3xl p-7"
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-aurora opacity-20 blur-3xl transition-opacity group-hover:opacity-60" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="glass rounded-full px-3 py-1 text-[11px] tracking-wider uppercase text-muted-foreground">{c.tag}</span>
                  <span className="font-display text-3xl text-aurora opacity-80">{c.short}</span>
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold leading-snug">{c.name}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{c.city}, India</div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Admission Open</span>
                  <span className="text-neon">2025–26 →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
