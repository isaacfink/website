import { slate } from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svx}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            "code::before": {
              content: "''",
            },
            "code::after": {
              content: "''",
            },
          },
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        main: slate,
        primary: {
          50: "#f2f9f9",
          100: "#ddeff0",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#438e96",
          600: "#3b757f",
          700: "#356169",
          800: "#325158",
          900: "#2d464c",
          950: "#1a2c32",
        },
        // 'primary': {
        // 	'50': '#ecfffe',
        // 	'100': '#d0fdfc',
        // 	'200': '#a6fbfb',
        // 	'300': '#45f4f5',
        // 	'400': '#25e7eb',
        // 	'500': '#09cad1',
        // 	'600': '#0aa2b0',
        // 	'700': '#10818e',
        // 	'800': '#166774',
        // 	'900': '#175662',
        // 	'950': '#093943',
        // },
        // 'primary': {
        // 	'50': '#fbffe6',
        // 	'100': '#f4fdca',
        // 	'200': '#e9fc9a',
        // 	'300': '#d6f660',
        // 	'400': '#c1eb30',
        // 	'500': '#a2d111',
        // 	'600': '#7ea709',
        // 	'700': '#5f7f0c',
        // 	'800': '#4c6410',
        // 	'900': '#405512',
        // 	'950': '#212f04',
        // },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
