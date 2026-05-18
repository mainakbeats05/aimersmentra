import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import {
  Cpu, Cog, Building2, Briefcase, GraduationCap, Calculator,
  Stethoscope, Smile, Palette, Scale, FlaskConical, BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCounselling } from "./CounsellingDialog";

const departments: { code: string; name: string; desc: string; icon: LucideIcon; specs: string[] }[] = [
  { code: "B.Tech",  name: "Bachelor of Technology", desc: "CSE, AI/ML, Data Science, Mechanical, ECE, Civil.", icon: Cpu,         specs: ["CSE","AI/ML","ECE","Mechanical"] },
  { code: "M.Tech",  name: "Master of Technology",   desc: "Specialised PG engineering with research depth.",   icon: Cog,         specs: ["VLSI","Robotics","Data Sci","Cyber Sec"] },
  { code: "B.Arch",  name: "Bachelor of Architecture", desc: "5-year COA-approved architecture programs.",      icon: Building2,   specs: ["NATA","Design","Planning"] },
  { code: "BBA",     name: "Bachelor of Business Admin.", desc: "Management foundation for future leaders.",     icon: Briefcase,   specs: ["Marketing","Finance","Analytics"] },
  { code: "MBA",     name: "Master of Business Admin.", desc: "Top B-schools — CAT, GMAT, NMAT pathways.",       icon: GraduationCap, specs: ["Finance","HR","Ops","Product"] },
  { code: "B.Com",   name: "Bachelor of Commerce",      desc: "Honours, Professional and CA-integrated tracks.", icon: Calculator,  specs: ["Hons","BAF","BFM","CA-int."] },
  { code: "MBBS",    name: "Bachelor of Medicine",      desc: "NEET counselling for Govt & Deemed colleges.",    icon: Stethoscope, specs: ["NEET-UG","Deemed","All-India"] },
  { code: "BDS",     name: "Bachelor of Dental Surgery",desc: "Dental admissions across India's top institutes.",icon: Smile,       specs: ["NEET-UG","Govt","Private"] },
  { code: "B.Des",   name: "Bachelor of Design",        desc: "UI/UX, Product, Fashion, Communication design.",  icon: Palette,     specs: ["UCEED","NID","Pearl","MIT-ADT"] },
  { code: "BA LLB",  name: "Integrated Law",            desc: "5-year integrated law at premium law schools.",   icon: Scale,       specs: ["CLAT","LSAT","SET"] },
  { code: "B.Sc",    name: "Bachelor of Science",       desc: "Pure sciences, biotech, forensics, nursing.",     icon: FlaskConical,specs: ["Bio","Chem","Nursing"] },
  { code: "BA",      name: "Bachelor of Arts",          desc: "Liberal arts, psychology, journalism, eco hons.", icon: BookOpen,    specs: ["Psych","Eco","Journ"] },
];

export function Departments() {
  const { setOpen } = useCounselling();
  return (
    <section id="departments" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Departments We Cover"
          title={<>Admissions across <span className="text-aurora">every discipline</span></>}
          subtitle="From engineering to medicine, design to commerce — we open the right door for every ambition."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((d, i) => (
            <motion.button
              key={d.code}
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 text-left"
            >
              <div className="absolute -top-14 -right-14 size-36 rounded-full bg-aurora opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-aurora shadow-glow">
                    <d.icon className="size-5 text-primary-foreground" />
                  </div>
                  <span className="font-display text-xl font-semibold text-aurora">{d.code}</span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug">{d.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.specs.map((s) => (
                    <span key={s} className="rounded-full bg-primary/8 px-2.5 py-0.5 text-[11px] text-primary/90">{s}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
