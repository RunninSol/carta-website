import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1E3C",
        "navy-900": "#0A1428",
        "navy-700": "#16294F",
        "navy-line": "#21345C",
        "navy-mid": "#1a3060",
        gold: "#C9A84C",
        "gold-soft": "#D8BE73",
        "gold-deep": "#A8862F",
        "gold-light": "#E8D4A0",
        ivory: "#F5F0E8",
        charcoal: "#2C2C2C",
        "mid-gray": "#6B6B6B",
        "warm-bg": "#EDEBE4",
      },
      fontFamily: {
        display: ["var(--font-ebgaramond)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Helvetica", "sans-serif"],
      },
      fontSize: {
        xs: ["13px", { lineHeight: "1.5" }],
        sm: ["15px", { lineHeight: "1.55" }],
        base: ["18px", { lineHeight: "1.6" }],
        md: ["24px", { lineHeight: "1.4" }],
        lg: ["34px", { lineHeight: "1.2" }],
        xl: ["48px", { lineHeight: "1.1" }],
        "2xl": ["68px", { lineHeight: "1.05" }],
        "3xl": ["96px", { lineHeight: "1" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
        "5xl": "128px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 30, 60, 0.10)",
        float: "0 12px 48px rgba(15, 30, 60, 0.16)",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "12px",
        phone: "36px",
        "phone-inner": "16px",
      },
      maxWidth: {
        prose: "700px",
        narrow: "600px",
      },
    },
  },
  plugins: [],
};
export default config;
