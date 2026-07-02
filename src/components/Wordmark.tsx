interface WordmarkProps {
  variant?: "ivory" | "navy";
  className?: string;
}

export function Wordmark({ variant = "ivory", className = "" }: WordmarkProps) {
  const color = variant === "ivory" ? "text-ivory" : "text-navy";

  return (
    <span
      className={`font-display text-sm font-light tracking-[0.45em] ${color} ${className}`}
    >
      CARTA
    </span>
  );
}
