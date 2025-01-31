import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0b0e11",
          light: "#1a1f25",
        },
        foreground: "#b2b8bf",
        highlight: "#5FFFD7",
        secondary: "#ff6f61",
        blue: {
          light: "#1a1f25",
          DEFAULT: "#526CFE",
        },
        slate: {
          light: "#ccd6f6",
          DEFAULT: "#8892b0",
          dark: "#495670",
        }
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem"
      },
      maxWidth: {
        container: "1400px",
        "container-sm": "1200px",
      }
    },
  },
  plugins: [],
} satisfies Config;
