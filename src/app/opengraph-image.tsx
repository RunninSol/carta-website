import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Carta · The expert who impresses you with care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F1E3C",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Compass mark */}
        <svg width="110" height="110" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="24.5" stroke="#C9A84C" strokeWidth="0.75" />
          <line x1="26" y1="4" x2="26" y2="48" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
          <line x1="4" y1="26" x2="48" y2="26" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
          <line x1="8.9" y1="8.9" x2="43.1" y2="43.1" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
          <line x1="43.1" y1="8.9" x2="8.9" y2="43.1" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
          <circle cx="26" cy="26" r="12" stroke="#C9A84C" strokeWidth="0.75" opacity="0.5" />
          <polygon points="26,10 28,24 26,22 24,24" fill="#C9A84C" />
          <polygon points="26,42 28,28 26,30 24,28" fill="#C9A84C" opacity="0.4" />
          <circle cx="26" cy="26" r="2" fill="#C9A84C" />
        </svg>

        <div
          style={{
            fontSize: 84,
            letterSpacing: 28,
            color: "#F5F0E8",
            fontWeight: 300,
            marginTop: 40,
            paddingLeft: 28,
          }}
        >
          CARTA
        </div>

        <div
          style={{
            width: 80,
            height: 2,
            background: "linear-gradient(to right,#C9A84C,#E8D4A0,#C9A84C)",
            margin: "32px 0",
          }}
        />

        <div
          style={{
            fontSize: 30,
            color: "rgba(245,240,232,0.65)",
            fontStyle: "italic",
          }}
        >
          The expert who impresses you with care
        </div>
      </div>
    ),
    { ...size }
  );
}
