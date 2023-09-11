/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     fontFamily: {
//       roboto: "var(--font-roboto)",
//     },
//   },
//   darkMode: ["class", '[data-theme="dark"]'],
//   plugins: [require("daisyui", "@material-tailwind/react/utils/withMT")],
// };

const withMT = require("@material-tailwind/react/utils/withMT", "daisyui");

module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    fontFamily: {
      roboto: "var(--font-roboto)",
    },
    colors: {

      "main": "#f50",

      "secondary": "#f2b14f",

      "accent": "#1b5677",

      "neutral": "#211523",

      "base-100": "#34393d",

      "info": "#92b9dd",

      "success": "#18c98e",

      "warning": "#dd8108",

      "error": "#f4627c",
    }

  },

  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("daisyui")],
});

