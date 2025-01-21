import { color } from "framer-motion";

/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#00FF00',
        customGray: '#3C3C3B'
      },
    },
  },
  plugins: [heroui()],
};
