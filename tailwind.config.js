/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      covered: ["Covered By Your Grace", "cursive"],
    },
    extend: {
      backgroundImage: {
        purpleGradient:
          "linear-gradient(180deg, #786DF5 0%, #8075F7 17.33%, #A79EFF 100%)",
        landingPageHero: 'url("/src/assets/landingHero.jpg")',
        veggiesBg: 'url("/src/assets/veggiesBg.png")',
        ecoBg: 'url("/src/assets/ecoBg.png")',
      },
    },
  },
  plugins: [],
};
