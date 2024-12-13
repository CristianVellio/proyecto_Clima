/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4DF51A",
        secondary: "#FFEE3B",
        tertiary: "#7BF1F5",
        quaternary: "#766022",
        whiteBG: "#F2F2F2",
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"],
      },
    },
  },
  plugins: [],
};
