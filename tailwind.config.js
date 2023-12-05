/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f2f2f2",
          300: "#e5e5e5",
          400: "#c4c4c4",
          500: "#9d9494",
          700: "#646464",
          "700_e5": "#5b5b5be5",
        },
        black: {
          900: "#000000",
          "900_cc": "#000000cc",
          "900_c4": "#000000c4",
          "900_7f": "#0000007f",
          "900_19": "#00000019",
          "900_99": "#00000099",
        },
        white: { A700: "#ffffff" },
        colors: "#ffffffff",
        orange: { 400: "#ffb02e" },
        amber: { A200: "#fcd53f" },
        blue_gray: { 400: "#8b8b8b" },
        deep_orange: { A700: "#fe1010" },
      },
      fontFamily: {
        raleway: "Raleway",
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #00000019",
        bs: "0px 10px  4px 0px #00000019",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
