import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        petroleum: "#1F4E5F",
        sage: "#8DA58B",
        sand: "#F4F0E6",
        graphite: "#2D2D2D",
        gold: "#B89B5E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(31,78,95,0.16)",
        soft: "0 14px 40px rgba(45,45,45,0.08)",
      },
      backgroundImage: {
        "radial-premium": "radial-gradient(circle at top left, rgba(184,155,94,0.24), transparent 28%), radial-gradient(circle at 80% 20%, rgba(141,165,139,0.22), transparent 26%), linear-gradient(135deg, #F4F0E6 0%, #fffaf0 100%)",
        "grid-premium": "linear-gradient(rgba(31,78,95,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,78,95,0.06) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseSlow: "pulseSlow 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        orbit: "orbit 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
