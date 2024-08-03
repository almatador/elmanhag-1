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
        thirdColor: "#6B6B6B",
      },
      backgroundColor: {
        mainBgColor: "#7E7D7D",
        secoundBgColor: "#cccccc",
      },
      screens: {
        // sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
