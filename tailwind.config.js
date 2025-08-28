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
        CPC: {
          white: "#edf6f9",
          sky: "#83c5be",
          ocean: "#006d77",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: [],
  },
};
