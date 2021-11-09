module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        sans: ["Kumbh Sans"],
      },
      colors: {
        mentor: {
          orange: "hsl(26, 100%, 55%)",
          paleOrange: "hsl(25, 100%, 94%)",
          varkBlue: "hsl(220, 13%, 13%)",
          darkGrayishBlue: "hsl(219, 9%, 45%)",
          grayishBlue: "hsl(220, 14%, 75%)",
          lightGrayishBlue: "hsl(223, 64%, 98%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
