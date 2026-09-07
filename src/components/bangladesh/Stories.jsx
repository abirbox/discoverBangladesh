import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { stories } from "@/data/bangladesh";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

export default function Stories() {
  return (
    <section id="stories" className="relative section-pad bg-[hsl(var(--moss-deep))] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">Featured Stories</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl text-foreground">
                Stories From Bangladesh
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-foreground">Editorial dispatches from the rivers, forests and hills.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-3xl overflow-hidden glass-dark cursor-pointer focus-gold ${
                i === 0 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image src={s.image} alt={s.title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[hsl(var(--gold))] mb-3">
                  <Clock size={12} /> {s.read} min read
                </div>
                <h3 className={`font-display font-medium text-white leading-tight ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                  {s.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed line-clamp-2">{s.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))] group-hover:gap-3 transition-all">
                  Read Story <ArrowRight size={15} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}