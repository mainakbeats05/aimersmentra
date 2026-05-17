import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { Target, Brain, Network, Trophy } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Personalized Counselling", text: "1:1 mentorship tailored to each student's strengths, goals, and aspirations." },
  { icon: Target, title: "Career-Focused Guidance", text: "Data-driven roadmaps aligning courses with future-ready career paths." },
  { icon: Network, title: "PAN India Network", text: "Trusted partnerships with India's most prestigious universities." },
  { icon: Trophy, title: "Success Philosophy", text: "We measure ourselves by the outcomes our students achieve." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Who We Are"
          title={<>Crafting future leaders, <span className="text-aurora">one student at a time</span></>}
          subtitle="Aimers Mentra is a premium educational consultancy guiding ambitious students through every step of their admission journey."
        />

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-square w-full"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-aurora opacity-20 blur-3xl" />
            <div className="glass-strong relative h-full overflow-hidden rounded-[2rem] p-6">
              <div className="absolute inset-0 bg-grid opacity-30" />
              {/* concentric rings */}
              <div className="absolute inset-0 grid place-items-center">
                {[0.3, 0.5, 0.7, 0.9].map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute aspect-square rounded-full border border-neon/30"
                    style={{ width: `${s * 100}%` }}
                    animate={{ rotate: i % 2 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                  />
                ))}
                <div className="relative grid size-32 place-items-center rounded-full bg-aurora shadow-glow">
                  <Trophy className="size-12 text-background" strokeWidth={2} />
                </div>
              </div>
              {/* floating tags */}
              {[
                { l: "MBBS", x: "10%", y: "20%" },
                { l: "B.Tech", x: "75%", y: "15%" },
                { l: "MBA", x: "80%", y: "70%" },
                { l: "Design", x: "8%", y: "75%" },
              ].map((t, i) => (
                <motion.div
                  key={t.l}
                  className="glass absolute rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ left: t.x, top: t.y }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  {t.l}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards side */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-aurora opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative">
                  <div className="mb-4 grid size-11 place-items-center rounded-xl bg-aurora shadow-glow">
                    <p.icon className="size-5 text-background" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
