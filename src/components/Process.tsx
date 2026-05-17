import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { MessageCircle, Brain, ListChecks, FileText, ShieldCheck, GraduationCap } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Free Consultation", desc: "Discovery call to understand goals, profile and timeline." },
  { icon: Brain, title: "Career Analysis", desc: "Psychometric and academic assessment for the right direction." },
  { icon: ListChecks, title: "College Shortlisting", desc: "Curated list tailored to your profile and aspirations." },
  { icon: FileText, title: "Documentation", desc: "SOPs, LORs, transcripts — handled end-to-end by experts." },
  { icon: ShieldCheck, title: "Admission Support", desc: "Application tracking, interview prep and follow-ups." },
  { icon: GraduationCap, title: "Final Enrollment", desc: "Visa, hostel, fee structure and day-one readiness." },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The Journey"
          title={<>A six-step <span className="text-aurora">admission roadmap</span></>}
          subtitle="From the first hello to first day on campus — a process engineered for clarity and momentum."
        />

        <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass relative overflow-hidden rounded-3xl p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />
              <div className="flex items-start gap-5">
                <div className="relative">
                  <div className="grid size-14 place-items-center rounded-2xl bg-aurora shadow-glow">
                    <s.icon className="size-6 text-background" />
                  </div>
                  <div className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-background text-[10px] font-bold text-neon ring-1 ring-neon/50">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
