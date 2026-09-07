import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { destinationCards } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

export default function Destinations() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * (trackRef.current.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="destinations" className="relative section-pad bg-[hsl(var(--clay))] text-[hsl(var(--clay-foreground))] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--crimson))]">Destinations</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl">
                Places You Must Experience
              </h2>
            </Reveal>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollBy(-1)} className="h-11 w-11 rounded-full glass-dark text-foreground grid place-items-center hover:bg-black/10 transition focus-gold" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollBy(1)} className="h-11 w-11 rounded-full glass-dark text-foreground grid place-items-center hover:bg-black/10 transition focus-gold" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 lg:px-20 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {destinationCards.map((d, i) => (
          <motion.article
            key={d.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl cursor-pointer focus-gold"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image src={d.image} alt={d.name} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

            {/* tag */}
            <span className="absolute top-5 left-5 glass-dark text-xs px-3 py-1 rounded-full text-white/90">
              {d.tag}
            </span>

            {/* content */}
            <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-3">
              <div className="flex items-center gap-1.5 text-[hsl(var(--gold))] text-xs mb-2">
                <MapPin size={12} /> {d.region}
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">{d.name}</h3>
              <p className="font-bangla text-sm text-white/70">{d.bangla}</p>

              {/* reveal-on-hover description */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <p className="overflow-hidden text-white/80 text-sm leading-relaxed pt-3">
                  {d.description}
                </p>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-6 px-6 sm:px-12 lg:px-20 text-sm text-muted-foreground/80 md:hidden">
        ← Swipe to explore →
      </p>
    </section>
  );
}