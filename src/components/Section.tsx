import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow && (
        <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <span className="size-1 rounded-full bg-neon" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
