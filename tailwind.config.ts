import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#0f172a",
          900: "#0a101f",
          950: "#050a15",
        },
        secondary: {
          50: "#f7eafa",
          100: "#ebd3f3",
          200: "#dfbbea",
          300: "#d4a3e2",
          400: "#c88bda",
          500: "#bd73d2",
          600: "#975cb1",
          700: "#714590",
          800: "#4c2e6f",
          900: "#2a184d",
          950: "#150a2e",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },

      spacing: {
        128: "32rem",
        144: "36rem",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
