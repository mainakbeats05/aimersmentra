import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { Users, HeartHandshake, Network, MapPinned, ShieldCheck, Rocket } from "lucide-react";

const items = [
  { icon: Users, title: "Expert Counsellors", desc: "15+ years of admission expertise from ex-university officials." },
  { icon: HeartHandshake, title: "Personalized Mentorship", desc: "Every student gets a dedicated mentor through enrollment." },
  { icon: Network, title: "Strong College Network", desc: "Direct relationships with 500+ premium institutions." },
  { icon: MapPinned, title: "PAN India Reach", desc: "Counsellors in 25+ cities ready to support you locally." },
  { icon: ShieldCheck, title: "Transparent Process", desc: "Clear fees, honest advice, zero hidden steps." },
  { icon: Rocket, title: "Career-First Guidance", desc: "Decisions backed by industry data and outcomes." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Aimers Mentra"
          title={<>Six reasons families <span className="text-aurora">trust us</span></>}
        />

        <div className="relative mt-20">
          {/* central vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neon/40 to-transparent lg:block" />
          <div className="space-y-10 lg:space-y-16">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid items-center gap-6 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${i % 2 ? "lg:text-left lg:pl-16" : "lg:text-right lg:pr-16"}`}>
                  <div className="font-display text-5xl font-semibold text-aurora opacity-40">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground">{it.desc}</p>
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora shadow-glow lg:block" />
                  <div className="glass mx-auto grid size-32 place-items-center rounded-3xl shadow-card">
                    <it.icon className="size-12 text-neon" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
