import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Play, Compass } from "lucide-react";
import { IMAGES } from "@/data/bangladesh";
import MagneticButton from "./MagneticButton";
import { Image } from "@/components/ui/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToNext = () => {
    document.querySelector("#intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative isolate h-[100svh] w-full overflow-hidden bg-[hsl(var(--moss-deep))]">
      {/* Cinematic background with ken-burns + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 h-[120%] -z-10">
        <Image
          src={IMAGES.hero}
          alt="Aerial view of the Bangladesh delta at golden hour"
          fittingType="fill"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-black/40 via-[hsl(var(--moss-deep))]/35 to-[hsl(var(--moss-deep))]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--moss-deep))]/60 via-transparent to-transparent" />

      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[hsl(var(--gold))]/40 animate-float-slow"
          style={{
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            top: `${(i * 37) % 90}%`,
            left: `${(i * 53) % 95}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Birds */}
      <div className="absolute top-[22%] left-0 w-full pointer-events-none opacity-70">
        {[0, 1, 2].map((i) => (
          <span key={i} className="absolute animate-bird" style={{ animationDelay: `${i * 6}s`, animationDuration: `${22 + i * 4}s` }}>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className="text-white/70">
              <path d="M1 5 Q5 1 11 5 Q17 1 21 5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-foreground/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))]" />
          A Cinematic Journey
        </motion.span>

        {/* Giant Bengali text behind */}
        <motion.h2
          initial={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
          animate={{ opacity: 0.16, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-bangla absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] sm:text-[22vw] md:text-[18vw] font-bold text-white select-none pointer-events-none whitespace-nowrap"
        >
          বাংলাদেশ
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative font-display font-semibold leading-[0.95] text-[15vw] sm:text-[12vw] md:text-[9vw] lg:text-[8rem] text-white"
        >
          Discover
          <br />
          <span className="text-gradient-gold italic">Bangladesh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-7 max-w-xl font-body text-base sm:text-lg text-foreground/75"
        >
          Where Rivers, Nature, Culture and Stories Come Alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton onClick={scrollToNext} variant="primary">
            <Compass size={16} /> Start Exploring
          </MagneticButton>
          <MagneticButton variant="ghost">
            <Play size={15} /> Watch Our Story
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/60 hover:text-[hsl(var(--gold))] transition-colors focus-gold rounded-full"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-foreground/30">
          <span className="mt-1.5 h-1.5 w-1 rounded-full bg-[hsl(var(--gold))] animate-scroll-hint" />
        </span>
        <ChevronDown size={14} />
      </motion.button>
    </section>
  );
}