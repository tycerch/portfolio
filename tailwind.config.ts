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
          DEFAULT: "#222629",
          light: "#474B4F",
        },
        foreground: "#6B6E70",
        highlight: "#86C232",
        accent: "#61892F",
        slate: {
          light: "#6B6E70",
          DEFAULT: "#474B4F",
          dark: "#222629",
        },
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
