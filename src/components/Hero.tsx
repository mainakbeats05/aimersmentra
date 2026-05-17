import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, GraduationCap, Compass } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 80 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString() + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const t = setTimeout(() => mv.set(to), 300);
    return () => clearTimeout(t);
  }, [to, mv]);
  useEffect(() => display.on("change", (v) => { if (ref.current) ref.current.textContent = v; }), [display]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-200, 200], [8, -8]), { damping: 20 });
  const ry = useSpring(useTransform(mx, [-200, 200], [-8, 8]), { damping: 20 });

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-neon shadow-[0_0_12px_oklch(0.78_0.20_235)]" />
          India's Premier Admission Consultancy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">Your Pathway</span>
          <br />
          <span className="text-aurora">To Top Colleges.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          We help students secure admissions in top colleges across India with expert
          counselling, career guidance, and complete admission support — from dreams to enrollment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-aurora px-7 py-3.5 text-sm font-medium text-background shadow-glow transition-transform hover:scale-[1.03]"
          >
            <GraduationCap className="size-4" /> Book Free Counselling
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#colleges"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors hover:text-neon"
          >
            <Compass className="size-4" /> Explore Colleges
          </a>
        </motion.div>

        {/* floating 3D orb */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative mx-auto mt-20 h-64 w-full max-w-3xl"
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative size-56">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-neon/40"
                style={{ boxShadow: "inset 0 0 60px oklch(0.70 0.22 255 / 0.3), 0 0 80px oklch(0.65 0.27 305 / 0.4)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-purple-neon/40"
              />
              <div className="absolute inset-12 rounded-full bg-aurora opacity-80 blur-xl" />
              <div className="absolute inset-16 rounded-full bg-aurora shadow-glow" />
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow"
                  style={{
                    boxShadow: "0 0 20px oklch(0.85 0.18 200)",
                    transform: `rotate(${deg}deg) translateX(140px)`,
                  }}
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { v: 10000, s: "+", label: "Students Guided" },
            { v: 500, s: "+", label: "Partner Colleges" },
            { v: 95, s: "%", label: "Admission Success" },
          ].map((it) => (
            <div key={it.label} className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-4xl font-semibold text-aurora">
                <Counter to={it.v} suffix={it.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{it.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
