const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      green: colors.green,
      teal: colors.teal,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: {
        defult: colors.emerald,
        light: colors.emerald,
        dark: colors.emerald,
      },
      secondary: {
        defult: colors.emerald,
        light: colors.emerald,
        dark: colors.emerald,
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
