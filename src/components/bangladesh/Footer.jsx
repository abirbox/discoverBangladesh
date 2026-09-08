import { Facebook, Instagram, Youtube, Twitter, MapPin } from "lucide-react";
import { navLinks } from "@/data/bangladesh";
import BrandLogo from "@/components/bangladesh/BrandLogo";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  const go = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[hsl(var(--moss-deep))] pt-24 pb-10">
      {/* sunset horizon gradient */}
      <div className="absolute inset-x-0 top-0 h-64 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(20 75% 45% / 0.25), transparent)" }} />
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(80% 50% at 50% 0%, hsl(var(--gold)/0.2), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#hero" onClick={(e) => { e.preventDefault(); go("#hero"); }} className="inline-flex items-center gap-3 rounded-lg focus-gold" aria-label="Back to the top">
              <BrandLogo className="h-12 w-12" />
              <span className="font-display text-3xl font-semibold text-gradient-gold">Discover Bangladesh</span>
            </a>
            <p className="font-bangla text-lg text-muted-foreground mt-1">বাংলাদেশ আবিষ্কার করুন</p>
            <p className="mt-5 max-w-sm text-muted-foreground leading-relaxed">
              An immersive journey through the rivers, nature, culture and stories of a nation shaped by water.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full glass grid place-items-center text-foreground/70 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold))]/40 transition focus-gold"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--gold))] mb-5">Navigate</h4>
            <ul className="grid grid-cols-2 gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); go(l.href); }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--gold))] mb-5">Visit</h4>
            <p className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
              Dhaka, Bangladesh — at the heart of the Ganges-Brahmaputra delta.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Discover Bangladesh. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground transition">Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground transition">Terms</a>
            <span className="font-bangla">We Love Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
