import { motion } from "motion/react";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* glowing orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 size-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.22 255 / 0.55), transparent 65%)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-40 size-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.27 305 / 0.45), transparent 65%)" }}
        animate={{ x: [0, -50, 20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 size-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 200 / 0.35), transparent 65%)" }}
        animate={{ x: [0, 40, -30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute size-1 rounded-full bg-cyan-glow/70"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            boxShadow: "0 0 12px oklch(0.85 0.18 200 / 0.9)",
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
