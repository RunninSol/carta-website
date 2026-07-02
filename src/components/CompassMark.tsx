type CompassVariant = "gold" | "navy";

interface CompassMarkProps {
  size?: number;
  variant?: CompassVariant;
  className?: string;
  rotate?: boolean;
}

const strokeColors: Record<CompassVariant, string> = {
  gold: "#C9A84C",
  navy: "#0F1E3C",
};

export function CompassMark({
  size = 52,
  variant = "gold",
  className = "",
  rotate = false,
}: CompassMarkProps) {
  const stroke = strokeColors[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotate ? "compass-rotate" : ""} ${className}`}
      aria-hidden
    >
      <circle cx="26" cy="26" r="24.5" stroke={stroke} strokeWidth="0.75" />
      <line
        x1="26"
        y1="4"
        x2="26"
        y2="48"
        stroke={stroke}
        strokeWidth="0.5"
        opacity="0.4"
      />
      <line
        x1="4"
        y1="26"
        x2="48"
        y2="26"
        stroke={stroke}
        strokeWidth="0.5"
        opacity="0.4"
      />
      <line
        x1="8.9"
        y1="8.9"
        x2="43.1"
        y2="43.1"
        stroke={stroke}
        strokeWidth="0.5"
        opacity="0.2"
      />
      <line
        x1="43.1"
        y1="8.9"
        x2="8.9"
        y2="43.1"
        stroke={stroke}
        strokeWidth="0.5"
        opacity="0.2"
      />
      <circle
        cx="26"
        cy="26"
        r="12"
        stroke={stroke}
        strokeWidth="0.75"
        opacity="0.5"
      />
      <polygon points="26,10 28,24 26,22 24,24" fill={stroke} />
      <polygon
        points="26,42 28,28 26,30 24,28"
        fill={stroke}
        opacity="0.4"
      />
      <circle cx="26" cy="26" r="2" fill={stroke} />
      <rect x="25.2" y="3" width="1.6" height="3" rx="0.5" fill={stroke} />
      <rect x="25.2" y="46" width="1.6" height="3" rx="0.5" fill={stroke} />
      <rect x="3" y="25.2" width="3" height="1.6" rx="0.5" fill={stroke} />
      <rect x="46" y="25.2" width="3" height="1.6" rx="0.5" fill={stroke} />
    </svg>
  );
}
