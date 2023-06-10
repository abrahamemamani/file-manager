/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      main: colors.indigo[600],
      "main-light": colors.slate[100],
      "primary-gray": colors.neutral[900],
      "secondary-gray": colors.gray[400],
      "primary-dark": colors.gray[900],
      "secondary-dark": colors.gray[800],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

/*
  texts: gray-400;
  titles: neutral-900;
  main: indigo-600;
*/
