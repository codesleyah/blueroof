/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "transparent-white": "rgba(255, 255, 255, 0.3)",
      },
      backgroundImage: {
        hero: "url('/images/gg.png')",
      },
    },
  },
  plugins: [],
};
