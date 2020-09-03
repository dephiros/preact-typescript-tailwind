/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    mode: "all",
    content: [
      "./src/**/*.html",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
