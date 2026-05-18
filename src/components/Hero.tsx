import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, GraduationCap, Compass } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import mitwpu from "@/assets/uni-mitwpu.jpg";
import sspu from "@/assets/uni-sspu.jpg";
import dypiu from "@/assets/uni-dypiu.jpg";
import srm from "@/assets/uni-srm.jpg";
import { useCounselling } from "./CounsellingDialog";

const slides = [
  { src: mitwpu, name: "MIT-WPU, Pune" },
  { src: sspu, name: "SSPU, Pune" },
  { src: dypiu, name: "DY Patil International University" },
  { src: srm, name: "SRM University, Chennai" },
];

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
  const { setOpen } = useCounselling();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-200, 200], [6, -6]), { damping: 20 });
  const ry = useSpring(useTransform(mx, [-200, 200], [-6, 6]), { damping: 20 });

  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Slideshow background */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[i].src}
              alt={slides[i].name}
              className="size-full animate-ken-burns object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>
        {/* Light wash overlays for premium readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-gold shadow-[0_0_12px_oklch(0.80_0.16_80)]" />
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
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full bg-aurora px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            <GraduationCap className="size-4" /> Book Free Counselling
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#colleges"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors hover:text-primary"
          >
            <Compass className="size-4" /> Explore Colleges
          </a>
        </motion.div>

        {/* Floating campus chip + dots */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative mx-auto mt-16 flex flex-col items-center gap-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[i].name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="glass-strong inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-xs tracking-wider uppercase"
            >
              <span className="size-1.5 rounded-full bg-gold" />
              Now featuring <span className="font-semibold text-foreground">{slides[i].name}</span>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-aurora" : "w-3 bg-foreground/20 hover:bg-foreground/40"}`}
              />
            ))}
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
