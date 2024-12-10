/** @type {import('tailwindcss').Config} */
// import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      jakarta: "'Plus Jakarta Sans', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        green: {
          50: "#DBFFF3",
          100: "#B8FFE6",
          200: "#6BFFCB",
          300: "#24FFB2",
          400: "#00DB8F",
          500: "#009260",
          600: "#00754C",
          700: "#005738",
          800: "#003824",
          900: "#001F14",
          950: "#000F0A",
        },
        red: {
          50: "#FFF0F0",
          100: "#FFDBDB",
          200: "#FFBDBD",
          300: "#FF9999",
          400: "#FF7A7A",
          500: "#FF5656",
          600: "#FF1414",
          700: "#CC0000",
          800: "#8A0000",
          900: "#420000",
          950: "#240000",
        },
      },
    },
  },
  plugins: [],
};
