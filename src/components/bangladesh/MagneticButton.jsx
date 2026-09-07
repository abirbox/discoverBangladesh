import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MagneticButton({ children, onClick, variant = "primary", className = "", as = "button", ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-gold disabled:opacity-50";
  const variants = {
    primary: "bg-[hsl(var(--gold))] text-[hsl(var(--moss-deep))] hover:brightness-110",
    crimson: "bg-[hsl(var(--crimson))] text-white hover:brightness-110",
    ghost: "glass text-foreground hover:bg-white/10",
    outline: "border border-white/30 text-foreground hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]",
  };

  const MotionTag = motion[as] || motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  );
}