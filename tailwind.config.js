/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    screens: {
      lg: { max: "1800px" },
      lgm: { max: "1140px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },

  },
  plugins: [],
}