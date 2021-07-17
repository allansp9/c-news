module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "mobile-small": "320px",
      // => @media (min-width: 320px) { ... }

      mobile: "751px",
      // => @media (min-width: 751px) { ... }

      desktop: "1171px",
      // => @media (min-width: 1171px) { ... }
    },
    extend: {
      colors: {
        tech: "#4990E2",
        techlight: "#5E9BE2",
        politics: "#D0021B",
        business: "#BD10E0",
        science: "#7CBB37",
        sports: "#F5A623",
      },

      fontFamily: {
        lato: ["Lato-Regular", "Helvetica", "Arial", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      spacing: {
        5.5: "1.375rem",
        // sizes for the images
        167: "167px",
        185: "185px",
        220: "220px",
        354: "354px",
        460: "460px",
      },
    },
  },
  variants: {
    container: [],
    extend: {},
  },
  plugins: [],
};
