/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#0a0a0a",
        surface: "#121212",
        "surface-elevated": "#171717",
        card: "#141414",
        "card-hover": "#1a1a1a",
        border: "rgba(255, 255, 255, 0.08)",
        "border-strong": "rgba(255, 255, 255, 0.16)",
        primary: "#f0f0f0",
        secondary: "#a0a0a0",
        muted: "#666666",
        accent: {
          DEFAULT: "#22D3EE", // Cyan-400
          hover: "#06B6D4",
          light: "rgba(34, 211, 238, 0.1)",
          border: "rgba(34, 211, 238, 0.25)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(34, 211, 238, 0.12)",
        "glow-lg": "0 0 50px -10px rgba(34, 211, 238, 0.18)",
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
