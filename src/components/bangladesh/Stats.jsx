import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/bangladesh";
import { useCountUp } from "./useCountUp";
import Reveal from "./Reveal";

function Stat({ stat, start }) {
  const value = useCountUp(stat.value, 2200, start);
  return (
    <div className="relative text-center px-4">
      <div className="font-display font-medium leading-none text-5xl sm:text-6xl md:text-7xl text-gradient-gold">
        {stat.isText ? stat.textValue : value}
        <span className="text-[hsl(var(--gold))]">{stat.suffix}</span>
      </div>
      <div className="mt-4 text-sm uppercase tracking-[0.25em] text-foreground/70">{stat.label}</div>
      <div className="font-bangla text-base text-muted-foreground mt-1">{stat.bangla}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative section-pad bg-[hsl(var(--moss-deep))] overflow-hidden">
      {/* animated lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full shimmer-line"
            style={{ top: `${15 + i * 14}%` }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 1 }}
          />
        ))}
      </div>
      {/* particles */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[hsl(var(--gold))]/30 animate-float-slow"
          style={{
            width: "2px", height: "2px",
            top: `${(i * 47) % 95}%`, left: `${(i * 31) % 95}%`,
            animationDelay: `${i * 0.4}s`, animationDuration: `${7 + (i % 4)}s`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Bangladesh in Numbers</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
              A Nation, Measured
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-4">
          {stats.map((s) => (
            <Stat key={s.label} stat={s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}