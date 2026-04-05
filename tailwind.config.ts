import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:           "#0C1219",
        slate:         "#141E2B",
        "slate-mid":   "#1D2D3E",
        "slate-light": "#2A3D52",
        brass:         "#B8912D",
        "brass-light": "#D4A843",
        ivory:         "#F0E8D6",
        "ivory-dim":   "#9D9080",
        parchment:     "#F7F3EC",
        "warm-white":  "#FDFAF5",
        emerald:       "#1B4332",
        /* legacy */
        navy:          "#0C1219",
        "navy-mid":    "#1D2D3E",
        "navy-light":  "#2A3D52",
        gold:          "#B8912D",
        "gold-light":  "#D4A843",
        cream:         "#F0E8D6",
        "cream-muted": "#9D9080",
        "bg-light":    "#F7F3EC",
      },
      fontFamily: {
        cormorant:     ["Cormorant Garamond", "Georgia", "serif"],
        montserrat:    ["Montserrat", "sans-serif"],
        inter:         ["Inter", "system-ui", "sans-serif"],
        "source-serif":["Inter", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        lg: "4px",
        md: "2px",
        sm: "1px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%":      { transform: "translateY(10px)", opacity: "0.4" },
        },
        pulseWa: {
          "0%":   { boxShadow: "0 0 0 0 rgba(37,211,102,0.6)" },
          "70%":  { boxShadow: "0 0 0 16px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in-up":     "fadeInUp 0.7s ease forwards",
        "fade-in":        "fadeIn 0.6s ease forwards",
        "scroll-down":    "scrollBounce 1.8s ease-in-out infinite",
        "pulse-wa":       "pulseWa 2.5s infinite",
        shimmer:          "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
