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
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("daisyui")],
});