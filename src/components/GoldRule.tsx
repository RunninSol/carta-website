interface GoldRuleProps {
  className?: string;
  wide?: boolean;
}

export function GoldRule({ className = "", wide = false }: GoldRuleProps) {
  return (
    <div
      className={`gold-rule ${wide ? "gold-rule-wide" : ""} ${className}`}
      role="presentation"
    />
  );
}
