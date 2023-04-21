/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urban: ["Urbanist", "sans-serif"],
      },
      colors: {
        primaryPurple: "#5361e1",
        primaryOrange: "#ed6f36",
        primaryText: "#231f40",
        primaryGray: "#6f6b80",
        primaryBG: "#f7f1f3",
      },
    },
  },
  plugins: [],
};
