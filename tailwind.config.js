/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#1C1C1C",
        brandDarkGrey: "#5E5E5E",
        brandLightGrey: "#848484",
        brandWhite: "#FFFFFF",
        brandLightBlue: "#2B9FDE",
        brandDarkBlue: "#0E3CBD",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 30px rgba(28, 28, 28, 0.12)",
      },
    },
  },
  plugins: [],
};
