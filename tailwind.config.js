/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryeRegular: ["Regular"],
        primaryeMedium: ["Medium"],
        primaryeBold: ["Bold"],
      },
      colors: {
        mainColor: "#D01025",
        secoundColor: "#fff",
      },
      backgroundColor: {
        mainBgColor: "#7E7D7D",
        secoundBgColor: "#cccccc",
      },
    },
  },
  plugins: [],
};
