import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { culture } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

export default function Culture() {
  const [active, setActive] = useState(null);

  return (
    <section id="culture" className="relative section-pad bg-[hsl(var(--moss))] overflow-hidden">
      {/* floating decorative motifs */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl opacity-20 pointer-events-none select-none"
          style={{ top: `${(i * 53) % 90}%`, left: `${(i * 37) % 92}%` }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {["❋", "✦", "❀", "◈"][i % 4]}
        </motion.span>
      ))}

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Culture & Tradition</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
              The Soul of Bangladesh
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg">
              Tap a thread of the culture to unfold its story.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {culture.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass-dark text-left focus-gold"
            >
              <Image src={c.image} alt={c.name} fittingType="fill" className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--moss-deep))] via-[hsl(var(--moss-deep))]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-2 font-display text-2xl text-white">{c.name}</h3>
                <p className="font-bangla text-sm text-[hsl(var(--gold))]/80">{c.bangla}</p>
                <p className="mt-2 text-xs text-white/70 line-clamp-2">{c.short}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl glass-dark rounded-3xl overflow-hidden grid md:grid-cols-2 max-h-[88vh]"
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                <Image src={active.image} alt={active.name} fittingType="fill" className="w-full h-full object-cover" />
              </div>
              <div className="p-7 sm:p-9 flex flex-col">
                <button onClick={() => setActive(null)} className="self-end h-9 w-9 rounded-full glass grid place-items-center text-foreground hover:bg-white/10 focus-gold" aria-label="Close">
                  <X size={16} />
                </button>
                <span className="mt-4 text-3xl">{active.icon}</span>
                <h3 className="mt-3 font-display text-4xl text-gradient-gold">{active.name}</h3>
                <p className="font-bangla text-lg text-muted-foreground">{active.bangla}</p>
                <p className="mt-5 text-foreground/80 leading-relaxed">{active.story}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}