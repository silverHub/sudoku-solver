module.exports = {
  purge: ["./public/index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: "Raleway",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
