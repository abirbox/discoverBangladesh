import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/bangladesh";
import BrandLogo from "@/components/bangladesh/BrandLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 240;
      setNearBottom(atBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating top navigation */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          nearBottom ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100"
        } ${scrolled ? "top-5" : "top-6"}`}
      >
        <div className="glass-dark rounded-full pl-3 pr-2 py-2 flex items-center gap-3 shadow-2xl shadow-black/40">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); go("#hero"); }}
            className="flex items-center gap-2.5 focus-gold rounded-full"
            aria-label="Back to the top"
          >
            <BrandLogo className="h-9 w-9" />
            <span className="font-display text-lg font-semibold text-gradient-gold tracking-wide hidden sm:block">Discover Bangladesh</span>
          </a>
          <button
            onClick={() => setOpen(true)}
            className="ml-1 h-10 w-10 rounded-full bg-[hsl(var(--gold))] text-[hsl(var(--moss-deep))] grid place-items-center focus-gold hover:brightness-110 transition"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.div>

      {/* Fullscreen glass menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[hsl(var(--moss-deep))]/70 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex justify-between items-center px-6 sm:px-12 py-7">
              <a href="#hero" onClick={(e) => { e.preventDefault(); go("#hero"); }} className="flex items-center gap-3 rounded-lg focus-gold" aria-label="Back to the top">
                <BrandLogo className="h-10 w-10" />
                <span className="font-display text-2xl text-gradient-gold">Discover Bangladesh</span>
              </a>
              <button
                onClick={() => setOpen(false)}
                className="h-11 w-11 rounded-full glass text-foreground grid place-items-center focus-gold"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 sm:gap-3">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href); }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 font-display text-4xl sm:text-6xl text-foreground/80 hover:text-[hsl(var(--gold))] transition-colors"
                >
                  <span className="text-xs font-body text-[hsl(var(--gold))] opacity-0 group-hover:opacity-100 transition">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-6 sm:px-12 py-7 flex items-center justify-between text-xs text-muted-foreground font-body">
              <span className="font-bangla">বাংলাদেশ</span>
              <span>© 2026 Discover Bangladesh</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
