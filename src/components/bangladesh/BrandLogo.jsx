export default function BrandLogo({ className = "", label = "Discover Bangladesh" }) {
  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${className}`} role="img" aria-label={label}>
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
        <rect x="2.5" y="2.5" width="43" height="43" rx="14" fill="hsl(var(--moss))" stroke="hsl(var(--gold) / 0.65)" />
        <circle cx="25" cy="20" r="10" fill="hsl(var(--crimson))" />
        <path d="M9 31.5C13 28.5 17 34.5 21 31.5C25 28.5 29 34.5 33 31.5C36 29.3 38.5 30 40 31.2" stroke="hsl(var(--gold))" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M9 36C13 33 17 39 21 36C25 33 29 39 33 36C36 33.8 38.5 34.5 40 35.7" stroke="hsl(var(--gold) / 0.65)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
