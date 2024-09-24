/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url(./image/pattern.svg)",
        parkingimage: "url(./image/parking.svg)",
        "colour-2": "linear-gradient(180deg, #065D44 0%, #023627 100%)",
"colour-1": "linear-gradient(90deg, #F2F32D 0%, #FECBD9 100%)",
        colours: "linear-gradient(180deg, #42CD6B 0%, #088E3F 100%)",
      },
      colors: {
        colour1: "#5C5C5F26",
        primary: "#065D44",
        secondary: "#F1F524",
      },
    },
  },
  plugins: [],
};
