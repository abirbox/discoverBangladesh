import { useRef } from "react";
import { motion } from "framer-motion";
import { foods } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

export default function Food() {
  const trackRef = useRef(null);

  return (
    <section id="food" className="relative section-pad bg-[hsl(var(--moss-deep))] overflow-hidden">
      {/* decorative bengali pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
        <pattern id="alpana" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M60 10 C 80 30, 110 30, 90 60 C 110 80, 80 110, 60 90 C 40 110, 10 80, 30 60 C 10 30, 40 30, 60 10" fill="none" stroke="hsl(var(--gold))" strokeWidth="1" />
          <circle cx="60" cy="60" r="6" fill="none" stroke="hsl(var(--gold))" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#alpana)" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Cuisine</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
              Taste Bangladesh
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg">
              A cuisine built on rice, river-fish, spice and centuries of slow, loving cooking.
            </p>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 lg:px-20 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {foods.map((f, i) => (
          <motion.article
            key={f.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative snap-start shrink-0 w-[78vw] sm:w-[44vw] md:w-[32vw] lg:w-[26vw] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl focus-gold"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image src={f.image} alt={f.name} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

            <span className="absolute top-5 left-5 text-3xl">{f.icon}</span>

            <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-display text-3xl text-white">{f.name}</h3>
              <p className="font-bangla text-sm text-[hsl(var(--gold))]/90">{f.bangla}</p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <p className="overflow-hidden text-white/80 text-sm leading-relaxed pt-3">{f.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-6 px-6 sm:px-12 lg:px-20 text-sm text-muted-foreground/80 md:hidden">← Swipe to taste →</p>
    </section>
  );
}