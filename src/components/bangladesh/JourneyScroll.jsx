import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeyStops } from "@/data/bangladesh";
import { Image } from "@/components/ui/image";

function Stop({ stop, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative h-[90vh] sm:h-screen w-full overflow-hidden"
      style={{ background: `linear-gradient(180deg, hsl(var(--moss-deep)), hsl(${stop.tint} / 0.04))` }}
    >
      <motion.div style={{ y: imgY, scale }} className="absolute inset-0 h-[130%] -top-[15%]">
        <Image src={stop.image} alt={stop.label} fittingType="fill" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--moss-deep))]/85 via-[hsl(var(--moss-deep))]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--moss-deep))] via-transparent to-[hsl(var(--moss-deep))]/40" />

      <motion.div
        style={{ y: textY }}
        className={`relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto ${isLeft ? "items-start text-left" : "items-end text-right ml-auto"}`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={isLeft ? "" : "text-right"}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display text-5xl">{stop.icon}</span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">
              Stop {String(index + 1).padStart(2, "0")} · {stop.label}
            </span>
          </div>
          <p className="font-bangla text-2xl text-white/70 mb-3">{stop.bangla}</p>
          <h3 className="font-display font-medium leading-[1] text-5xl sm:text-7xl md:text-8xl text-white max-w-2xl">
            {stop.text}
          </h3>
          <p className="mt-6 max-w-md text-muted-foreground text-lg leading-relaxed">{stop.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function JourneyScroll() {
  return (
    <section id="journey" className="relative bg-[hsl(var(--moss-deep))]">
      <div className="text-center pt-24 sm:pt-32 px-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">The Story</span>
        <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
          A Journey Through Bangladesh
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg">
          Scroll slowly. Let each landscape carry you to the next.
        </p>
      </div>
      <div className="mt-16">
        {journeyStops.map((stop, i) => (
          <Stop key={stop.id} stop={stop} index={i} />
        ))}
      </div>
    </section>
  );
}