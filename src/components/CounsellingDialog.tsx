import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, Phone, MessageCircle } from "lucide-react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const DialogCtx = createContext<Ctx | null>(null);

export function useCounselling() {
  const ctx = useContext(DialogCtx);
  if (!ctx) throw new Error("useCounselling must be used within CounsellingProvider");
  return ctx;
}

export function CounsellingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  // Auto-open once per session after 8s
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("am-popup-seen");
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("am-popup-seen", "1");
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <DialogCtx.Provider value={{ open, setOpen }}>
      {children}
      <CounsellingDialog />
    </DialogCtx.Provider>
  );
}

function CounsellingDialog() {
  const { open, setOpen } = useCounselling();
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-midnight/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong relative z-10 w-full max-w-lg overflow-hidden rounded-3xl p-8"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-aurora opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-gold/40 opacity-40 blur-3xl" />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            <div className="relative">
              <div className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                <Sparkles className="size-3 text-gold" /> Limited Slots This Week
              </div>
              <h3 className="font-display text-3xl leading-tight font-semibold tracking-tight">
                Book your <span className="text-aurora">free counselling</span> session
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A 30-minute 1:1 call with an Aimers Mentra advisor — get clarity on your top colleges, eligibility, and timeline.
              </p>

              {sent ? (
                <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center">
                  <div className="font-display text-lg font-semibold">Thanks — you're in. ✨</div>
                  <p className="mt-1 text-sm text-muted-foreground">Our advisor will reach out within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-5 grid gap-3"
                >
                  <input required placeholder="Full name" className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input required type="tel" placeholder="Phone" className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <select required defaultValue="" className="rounded-xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="" disabled>Interested course</option>
                    {["B.Tech","M.Tech","B.Arch","BBA","MBA","B.Com","MBBS","BDS","B.Des","Other"].map(c =>
                      <option key={c} value={c}>{c}</option>
                    )}
                  </select>
                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-aurora py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                  >
                    Book My Free Session <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}

              <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                <a href="https://wa.me/917020934294" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <MessageCircle className="size-4" /> WhatsApp +91 70209 34294
                </a>
                <a href="tel:+917020934294" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="size-4" /> Call now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
