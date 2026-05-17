import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeader } from "./Section";
import { MapPin } from "lucide-react";

// Approximate normalized coordinates (x%, y%) over India outline box
const cities = [
  { name: "Delhi",    x: 38, y: 25, colleges: ["IIT Delhi", "DU", "Amity"], students: "1,800+", course: "Engineering & Law" },
  { name: "Noida",    x: 41, y: 27, colleges: ["Bennett", "Amity", "Shiv Nadar"], students: "950+",  course: "BBA & B.Tech" },
  { name: "Jaipur",   x: 32, y: 33, colleges: ["MNIT", "LNMIIT", "Manipal Jaipur"], students: "780+", course: "Engineering" },
  { name: "Mumbai",   x: 28, y: 58, colleges: ["NMIMS", "TISS", "KJ Somaiya"], students: "2,200+", course: "MBA & Finance" },
  { name: "Pune",     x: 32, y: 62, colleges: ["Symbiosis", "MIT-WPU", "DYPIU"], students: "3,400+", course: "All streams" },
  { name: "Hyderabad",x: 44, y: 67, colleges: ["ISB", "BITS", "IIIT-H"], students: "1,100+", course: "Tech & MBA" },
  { name: "Bengaluru",x: 42, y: 78, colleges: ["Christ", "Jain", "RV"], students: "1,900+", course: "Tech & Design" },
  { name: "Chennai",  x: 50, y: 82, colleges: ["SRM", "VIT-Chennai", "Anna"], students: "1,250+", course: "Engineering" },
];

export function Cities() {
  const [active, setActive] = useState(cities[4]);

  return (
    <section id="cities" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="PAN India Network"
          title={<>City-wise <span className="text-aurora">admission support</span></>}
          subtitle="From metros to emerging hubs, our counsellors are everywhere your dream campus is."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Map */}
          <div className="glass-strong relative aspect-[4/5] overflow-hidden rounded-3xl p-6 sm:aspect-[3/4]">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-aurora opacity-10 blur-3xl" />

            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
              {/* connecting lines from Pune (active default) to all */}
              {cities.map((c) => (
                <motion.line
                  key={`l-${c.name}`}
                  x1={active.x} y1={active.y} x2={c.x} y2={c.y}
                  stroke="url(#grad)"
                  strokeWidth="0.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.2 }}
                />
              ))}
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.27 305)" />
                </linearGradient>
              </defs>
            </svg>

            {cities.map((c) => {
              const isActive = c.name === active.name;
              return (
                <button
                  key={c.name}
                  onMouseEnter={() => setActive(c)}
                  onClick={() => setActive(c)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                >
                  <span className="relative grid place-items-center">
                    <motion.span
                      className="absolute size-8 rounded-full bg-neon/30"
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: c.x * 0.02 }}
                    />
                    <span
                      className={`relative size-3 rounded-full transition-all ${isActive ? "bg-purple-neon scale-150" : "bg-neon"}`}
                      style={{ boxShadow: isActive
                        ? "0 0 24px oklch(0.65 0.27 305)"
                        : "0 0 14px oklch(0.78 0.20 235)" }}
                    />
                    <span className="mt-1 text-[10px] font-medium whitespace-nowrap text-foreground/80">{c.name}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Info panel */}
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-strong relative flex flex-col overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-aurora opacity-30 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-sm text-neon">
                <MapPin className="size-4" /> Active region
              </div>
              <h3 className="mt-2 font-display text-5xl font-semibold text-aurora">{active.name}</h3>

              <div className="mt-8 space-y-5">
                <div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground">Top Colleges</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.colleges.map((c) => (
                      <span key={c} className="glass rounded-full px-3 py-1 text-sm">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-muted-foreground">Students Placed</div>
                    <div className="mt-1 font-display text-2xl font-semibold text-aurora">{active.students}</div>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-muted-foreground">Popular Course</div>
                    <div className="mt-1 text-sm font-medium">{active.course}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActive(c)}
                    className={`rounded-full px-3 py-1 text-xs transition-colors ${
                      c.name === active.name ? "bg-aurora text-background" : "glass hover:text-neon"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
