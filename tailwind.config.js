/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        one: "#EF9595",
        two: "#EFB495",
        three: "#EFD595",
        four: "#EBEF95",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Phudu: ["Phudu", "cursive"],
      },
    },
  },
  plugins: [],
};
