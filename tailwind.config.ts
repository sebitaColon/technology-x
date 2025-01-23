import { color } from "framer-motion";

/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        '4xl' : '0px 0px 10px rgb(0, 255, 0)',
        '5xl' : '0px 0px 50px rgb(0, 255, 0)',
      },
      boxShadow: {
        'custom-green': '0 0 10px rgba(0, 255, 0, 0.5)', // Sombra verde
      },
      colors: {
        customGreen: '#00FF00',
        customGray: '#3C3C3B',
        customBlack: '#181818',
        customGrayDark : '#212121',
      },
    },
  },
  plugins: [heroui()],
};
