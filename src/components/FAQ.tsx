import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./Section";

const faqs = [
  { q: "Is the counselling session really free?",
    a: "Yes — your first 30-minute 1:1 advisor call is completely free. You'll receive a personalised college shortlist and a clear next-step roadmap, with no obligation." },
  { q: "Which courses and entrance exams do you support?",
    a: "We support admissions for B.Tech, M.Tech, B.Arch, BBA, MBA, B.Com, MBBS, BDS, B.Des, BA LLB and more — across CAT, NEET, JEE, MHT-CET, CLAT, NATA, UCEED, NMAT, GMAT and university-specific exams." },
  { q: "Do you only cover Pune-based colleges?",
    a: "No. We have a PAN-India network across 25+ cities including Pune, Mumbai, Delhi, Bengaluru, Hyderabad, Jaipur and Chennai, plus international admissions for UK, US, Canada and Australia." },
  { q: "What is your success rate?",
    a: "95% of students we onboard secure admission into one of their top three shortlisted colleges. Every plan is built around your profile, scores and aspirations." },
  { q: "When should I start the admission process?",
    a: "Ideally 6–12 months before your target intake. Earlier engagement gives more time for profile building, entrance prep alignment, scholarship discovery and documentation." },
  { q: "How are the fees structured?",
    a: "Our fees are transparent and depend on the course, college tier and level of services chosen. You'll receive a clear written quote after your free counselling session — never any hidden costs." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Frequently Asked"
          title={<>Answers, <span className="text-aurora">straight up.</span></>}
          subtitle="Everything families ask us before getting started."
        />

        <div className="mt-16 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`glass overflow-hidden rounded-2xl transition-colors ${isOpen ? "ring-1 ring-primary/30" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold sm:text-lg">{f.q}</span>
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full bg-aurora text-primary-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
