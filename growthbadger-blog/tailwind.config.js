const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        lightBlue: colors.lightBlue,
        warmGray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
