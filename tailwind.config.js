/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./contact.html",
    "./about.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        one: "#EF9595",
        two: "#EFB495",
        three: "#EFD595",
        four: "#EBEF95",
        lime: "lime",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Phudu: ["Phudu", "cursive"],
      },
      gridTemplateColumns: {
        "2/3": " 2fr 3fr",
        autofill: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      backgroundImage: {
        hero: "url('../images/hero1.jpg')",
        "hero-mobile": "url('../images/hero-mobile.jpg')",
        "concat-header": "url('../images/contact.jpeg')",
        "about-header": "url('../images/about1.jpg')",
      },
    },
  },
  plugins: [],
};
