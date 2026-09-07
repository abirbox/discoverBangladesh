import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

export default function Introduction() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const decoY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="intro" ref={ref} className="relative section-pad bg-[hsl(var(--moss-deep))] overflow-hidden">
      {/* Decorative river line */}
      <motion.svg
        style={{ y: decoY }}
        className="absolute -right-10 top-10 w-[40vw] opacity-20 pointer-events-none"
        viewBox="0 0 400 600"
        fill="none"
      >
        <path d="M380 0 C 300 120, 360 220, 250 320 S 120 460, 200 600" stroke="hsl(var(--gold))" strokeWidth="1.5" />
        <path d="M360 0 C 280 140, 340 240, 230 340 S 100 480, 180 600" stroke="hsl(var(--gold))" strokeWidth="1" opacity="0.5" />
      </motion.svg>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">
              <span className="h-px w-8 bg-[hsl(var(--gold))]" /> About Bangladesh
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display font-medium leading-[1.02] text-[10vw] sm:text-6xl md:text-7xl text-foreground">
              More Than a Country.
              <br />
              <span className="italic text-gradient-gold">A Thousand Stories.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
              Bangladesh is a land shaped by water — a delta where 700 rivers braid the earth into
              green, where ancient history sleeps beside modern cities, and where warm people carry
              a culture as colorful as a Pohela Boishakh morning. From the misty Sundarbans to the
              endless beach of Cox's Bazar, every corner holds a story waiting to be lived.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { k: "147,570", v: "sq km" },
                { k: "1971", v: "Independence" },
                { k: "Bangla", v: "Language" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gradient-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image with parallax + decorative boat */}
        <div className="order-1 lg:order-2 relative">
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/4] rounded-3xl overflow-hidden glass-dark">
              <motion.div style={{ y: imgY }} className="absolute inset-0 h-[124%] -top-[12%]">
                <Image
                  src={IMAGES.introBoat}
                  alt="Traditional boat on a calm Bangladesh river at dawn"
                  fittingType="fill"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--moss-deep))]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-bangla text-2xl text-white/90">নদীর দেশ</p>
                <p className="text-sm text-white/60 font-body">Land of Rivers</p>
              </div>
            </div>

            {/* Floating glass stat card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 sm:-left-8 glass-dark rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="text-3xl font-display text-gradient-gold">700+</div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Rivers</div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}