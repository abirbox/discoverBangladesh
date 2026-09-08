import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

// Bangladesh country boundary, simplified from an openly available country GeoJSON.
const MAP_PATH =
  "M316 304.6 L314.7 349.3 L293 339.8 L297 390 L279.2 357.5 L275.6 325.8 L263.8 295.8 L237.7 259.5 L180.3 257 L186 282.7 L166.4 317.4 L139.9 304.7 L130.8 316.1 L113.2 309.3 L89.1 303.7 L79.4 252.4 L57.8 205.5 L68.4 167.9 L30 151.2 L43.8 128.5 L82.8 105.3 L37.8 72.3 L59.8 30 L109.2 56.9 L139 60 L144.5 103.3 L203.8 111.9 L261.6 111 L297.5 121.6 L268.8 174.4 L240.9 178 L221.6 213.4 L255.8 245.7 L266 205.9 L283.2 205.7 Z";

export default function InteractiveMap() {
  const [active, setActive] = useState(destinations[0]);

  return (
    <section id="map" className="relative section-pad bg-[hsl(var(--moss))] overflow-hidden">
      {/* ambient glow following active tint */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "radial-gradient(60% 60% at 70% 70%, hsl(var(--gold)/0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Explore</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
              Choose Your Journey
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg">
              Every corner of Bangladesh has a story waiting to be discovered.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Map */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="relative aspect-[4/3] w-full glass-dark rounded-3xl p-4 sm:p-8 overflow-hidden">
              {/* topographic grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="none">
                {[...Array(9)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 37} x2="400" y2={i * 37} stroke="hsl(var(--gold))" strokeWidth="0.5" />
                ))}
                {[...Array(11)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke="hsl(var(--gold))" strokeWidth="0.5" />
                ))}
              </svg>

              {/* Bangladesh silhouette */}
              <svg viewBox="0 0 350 420" className="relative w-full h-full" role="img" aria-label="Map of Bangladesh">
                <title>Bangladesh</title>
                <defs>
                  <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(150 45% 18%)" />
                    <stop offset="100%" stopColor="hsl(150 40% 12%)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={MAP_PATH}
                  fill="url(#landGrad)"
                  stroke="hsl(var(--gold))"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  animate={{ scale: active ? 1 : 1 }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>

              {/* Pins */}
              {destinations.map((d) => {
                const isActive = active?.id === d.id;
                return (
                  <button
                    key={d.id}
                    onMouseEnter={() => setActive(d)}
                    onClick={() => setActive(d)}
                    style={{ left: `${d.pin.x}%`, top: `${d.pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus-gold rounded-full"
                    aria-label={d.name}
                  >
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      {isActive && (
                        <span className="absolute h-4 w-4 rounded-full bg-[hsl(var(--gold))] animate-pulse-ring" />
                      )}
                      <span
                        className={`relative h-3 w-3 rounded-full ring-2 ring-white/40 transition-all ${
                          isActive ? "bg-[hsl(var(--gold))] scale-150" : "bg-white group-hover:bg-[hsl(var(--gold))]"
                        }`}
                      />
                    </span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[10px] sm:text-xs font-medium transition-all ${
                        isActive ? "text-[hsl(var(--gold))] opacity-100" : "text-foreground/70 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {d.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Info card */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-dark rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={active.image} alt={active.name} fittingType="fill" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--gold))]">{active.region}</span>
                    <h3 className="font-display text-3xl text-white mt-1">{active.name}</h3>
                    <p className="font-bangla text-sm text-white/70">{active.bangla}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{active.description}</p>
                  <button
                    onClick={() => document.querySelector("#destinations")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))] hover:gap-3 transition-all focus-gold rounded-full"
                  >
                    Explore <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex flex-wrap gap-2">
              {destinations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActive(d)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all ${
                    active.id === d.id
                      ? "bg-[hsl(var(--gold))] text-[hsl(var(--moss-deep))]"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MapPin size={11} /> {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
