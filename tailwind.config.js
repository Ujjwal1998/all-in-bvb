/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jaro: ['"Jaro"', "serif"],
        chakra: ["Chakra Petch", "serif"],
      },
    },
  },
  plugins: [],
};
