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
          DEFAULT: "#0B0C10",
          light: "#1F2833",
        },
        foreground: "#C5C6C7",
        highlight: "#66FCF1",
        accent: "#45A29E",
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        container: "1400px",
        "container-sm": "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
