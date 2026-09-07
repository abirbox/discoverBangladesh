import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

const spanClass = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % gallery.length)), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <section className="relative section-pad bg-[hsl(var(--moss))] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Gallery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
              Bangladesh Through Every Lens
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl focus-gold ${spanClass[g.span]}`}
            >
              <Image src={g.src} alt={g.label} fittingType="fill" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="absolute bottom-3 left-4 text-xs uppercase tracking-widest text-white/90 translate-y-2 group-hover:translate-y-0 transition-transform">
                {g.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 h-11 w-11 rounded-full glass text-white grid place-items-center hover:bg-white/10 focus-gold z-10" aria-label="Close">
              <X size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 h-12 w-12 rounded-full glass text-white grid place-items-center hover:bg-white/10 focus-gold" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[80vh] rounded-2xl overflow-hidden"
            >
              <Image src={gallery[index].src} alt={gallery[index].label} fittingType="fit" className="w-full h-full" />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs uppercase tracking-widest text-[hsl(var(--gold))]">{gallery[index].label}</span>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 h-12 w-12 rounded-full glass text-white grid place-items-center hover:bg-white/10 focus-gold" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}