import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { dayNight } from "@/data/bangladesh";
import { Image } from "@/components/ui/image";

function PhaseLayer({ phase, index, progress }) {
  const seg = 1 / dayNight.length;
  const opacity = useTransform(progress, [index * seg, index * seg + seg * 0.6, (index + 1) * seg], [0, 1, 0]);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <Image src={phase.image} alt={phase.label} fittingType="fill" className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, transparent, hsl(${phase.tint} / 0.25), hsl(var(--moss-deep) / 0.85))` }}
      />
    </motion.div>
  );
}

function PhaseMarker({ p, index, progress }) {
  const seg = 1 / dayNight.length;
  const opacity = useTransform(progress, [index * seg, index * seg + seg * 0.5, (index + 1) * seg], [0.4, 1, 0.4]);
  return (
    <motion.div style={{ opacity }} className="flex flex-col items-center gap-1">
      <span className="text-xl">{p.icon}</span>
      <span className="text-[10px] uppercase tracking-widest text-white/80">{p.label}</span>
      <span className="font-bangla text-xs text-[hsl(var(--gold))]/80">{p.bangla}</span>
    </motion.div>
  );
}

export default function DayToNight() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const tint = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["hsl(38 70% 80%)", "hsl(45 70% 60%)", "hsl(20 75% 50%)", "hsl(220 60% 16%)"]
  );

  return (
    <section ref={ref} className="relative h-[300vh] bg-[hsl(var(--moss-deep))]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {dayNight.map((p, i) => (
          <PhaseLayer key={p.id} phase={p} index={i} progress={scrollYProgress} />
        ))}

        <motion.div className="absolute inset-0 pointer-events-none mix-blend-soft-light" style={{ background: tint }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.div style={{ opacity: titleOpacity }} className="text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">A Day in Bangladesh</span>
            <h2 className="mt-4 font-display font-medium text-4xl sm:text-6xl md:text-7xl text-white drop-shadow-lg">
              From Dawn to Night
            </h2>
          </motion.div>
        </div>

        <div className="absolute bottom-10 inset-x-0 flex justify-center gap-6 sm:gap-10">
          {dayNight.map((p, i) => (
            <PhaseMarker key={p.id} p={p} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}