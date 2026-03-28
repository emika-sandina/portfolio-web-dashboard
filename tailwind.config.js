/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "rgb(var(--color-page) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        brandBlack: "rgb(var(--color-text-primary) / <alpha-value>)",
        brandDarkGrey: "rgb(var(--color-text-secondary) / <alpha-value>)",
        brandWhite: "rgb(var(--color-page) / <alpha-value>)",
        brandDarkBlue: "rgb(var(--color-accent-primary) / <alpha-value>)",
        brandLightBlue: "rgb(var(--color-accent-secondary) / <alpha-value>)",
        brandLightGrey: "rgb(var(--color-text-secondary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
