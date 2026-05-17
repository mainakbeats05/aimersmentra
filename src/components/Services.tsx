import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Compass, Stethoscope, Cpu, Briefcase, Globe2, Award, FileCheck, School,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./Section";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Compass, title: "Career Counselling", desc: "Discover your ideal academic and career path with expert guidance." },
  { icon: Stethoscope, title: "Medical Admissions", desc: "MBBS, BDS, BAMS, and allied health science admissions across India." },
  { icon: Cpu, title: "Engineering Admissions", desc: "B.Tech across CSE, AI/ML, Mechanical, Electronics and emerging fields." },
  { icon: Briefcase, title: "MBA Admissions", desc: "MBA & PGDM admissions at India's top business schools." },
  { icon: Globe2, title: "International Admissions", desc: "Study abroad guidance for the UK, US, Canada, Australia, and Europe." },
  { icon: Award, title: "Scholarship Assistance", desc: "Merit and need-based scholarship discovery and applications." },
  { icon: FileCheck, title: "Documentation Support", desc: "End-to-end paperwork, SOPs, LORs and application support." },
  { icon: School, title: "University Shortlisting", desc: "Data-driven shortlisting based on your profile and aspirations." },
];

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-100, 100], [10, -10]), { damping: 20 });
  const ry = useSpring(useTransform(x, [-100, 100], [-10, 10]), { damping: 20 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group glass relative overflow-hidden rounded-3xl p-7"
    >
      <div className="absolute -inset-px rounded-3xl bg-aurora opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-aurora shadow-glow">
          <s.icon className="size-5 text-background" />
        </div>
        <h3 className="font-display text-xl font-semibold">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Offer"
          title={<>Services built around <span className="text-aurora">your ambition</span></>}
          subtitle="Eight pillars of admission expertise — designed to take you from first thought to first day on campus."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
