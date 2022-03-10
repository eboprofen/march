module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      fontFamily: {
        black: ["Black"],
        bold: ["Bold"],
        light: ["Light"],
        regular: ["Regular"],
        semibold: ["SemiBold"],
        thin: ["Thin"],
      },
      colors: {
        primary: "#21cda8",
        secondary: "#FFC353",
        black: "#33363b",
        white: "#FFFFFF",
        gray: "#F4F6F8",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
