module.exports = {
  purge: ["./public/index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: "Raleway",
        board: "Rubik"
      },
      spacing: {
        "sud-sm": "270px",
        "sud-bg": "522px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
