import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochromatic palette based on a light green tone used across the entire layout.
        page: "#e2d4b3",
        highlight: "#336569",
        sand: {
          light: "#f2fbf3",
          DEFAULT: "#e0f4e4",
          dark: "#c7e9d0",
        },
        clay: {
          DEFAULT: "#a7dcb7",
          dark: "#89c39c",
        },
        forest: {
          light: "#7fc497",
          DEFAULT: "#62ad80",
          dark: "#3f7d54",
        },
        moss: "#2f5f3c",
        accent: {
          DEFAULT: "#b5e7c7",
          dark: "#8dcfa6",
        },
        gold: "#e0f4e4",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 15px 45px rgba(63, 125, 84, 0.15)",
      },
      borderRadius: {
        pill: "999px",
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at top, rgba(255,255,255,0.35), transparent 55%), linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.05))",
      },
    },
  },
  plugins: [],
};

export default config;
