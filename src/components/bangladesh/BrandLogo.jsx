export default function BrandLogo({ className = "", label = "Brand Bangladesh" }) {
  return (
    <img src="/brand-bangladesh-logo.png" alt={label} className={`object-contain ${className}`} />
  );
}
