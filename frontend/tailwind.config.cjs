/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      primary: "#494949",
      secondary: "#1A1A1A",
      resume: "#F2F2F2",
      para: "#878787",
      nav: "#5D5A5A",
      white: "#FFFFFF",
      white2: "#EEEEEE",
      grey2: "#F8F8F8",
      darkgrey: "#1E1E1E",
      black: "#302E2E",
      bgwhite: "#FOF0F0",
      black2: "#000000",
      bgblack: "#181918",
      blacktoggle: "#0D0C0C",
      gray: "#B2B2B3",
    },
    extend: {},
  },
  plugins: [],
};


