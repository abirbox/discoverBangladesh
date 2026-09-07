import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/data/bangladesh";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { Image } from "@/components/ui/image";

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden bg-[hsl(var(--moss-deep))]">
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0 -z-10">
        <Image src={IMAGES.sunsetRiver} alt="Cinematic sunset over a Bangladesh river" fittingType="fill" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--moss-deep))]/70 via-[hsl(var(--moss-deep))]/40 to-[hsl(var(--moss-deep))]/95" />

      {/* floating embers */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[hsl(var(--gold))]/50 animate-float-slow"
          style={{
            width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`,
            bottom: `${(i * 23) % 60}%`, left: `${(i * 41) % 95}%`,
            animationDelay: `${i * 0.5}s`, animationDuration: `${6 + (i % 4)}s`,
          }}
        />
      ))}

      <div className="relative text-center px-6 max-w-3xl">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Your Invitation</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display font-medium leading-[1] text-6xl sm:text-7xl md:text-8xl text-white">
            Your Journey <span className="italic text-gradient-gold">Starts Here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto">
            Discover the beauty, culture and stories of Bangladesh.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton onClick={() => document.querySelector("#destinations")?.scrollIntoView({ behavior: "smooth" })} variant="primary">
              Explore Destinations
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })}>
              Discover Bangladesh
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}