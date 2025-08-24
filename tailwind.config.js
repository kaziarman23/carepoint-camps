/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "serif"],
      },
      colors: {
        brand: {
          900: "#231942", // deep indigo
          700: "#5e548e", // muted purple
          500: "#9f86c0", // lavender purple
          300: "#be95c4", // soft violet
          100: "#e0b1cb", // pale pinkish purple
        },
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: [],
  },
};
