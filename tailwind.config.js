module.exports = {
  purge: ["./public/index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: "Montserrat",
        title: "Raleway",
        board: "Rubik"
      },
      spacing: {
        "sud-sm": "270px",
        "sud-bg": "522px"
      },
      boxShadow: {
        "key": "0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset"
      }
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      transform: ["disabled"],
      backgroundColor:["disabled"]
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
