/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        textColor:'#4c2213',

        dark_primary: "#06223F",
        bg_light_primary: "#faf4f0",
        // bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        // primaryLinear: "#9a3412",
        primaryLinear: "linear-gradient(180deg, #bb9476 0.48%, #bb9476 100%)",
        Bg: '#4c2213',
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
