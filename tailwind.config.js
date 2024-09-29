/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
        teal: "hsl(174, 62%, 47%)",
        coral: "hsl(12, 100%, 64%)",
        lightGray: "hsl(0, 0%, 90%)",
        warmGray: "hsl(210, 16%, 82%)",
        softYellow: "hsl(45, 100%, 80%)",
        softOrange: "hsl(36, 100%, 70%)",
        purpleLight: "#7064fc",
        purpleLighter: "#8A81FF",
        purpleStrong: "#6B5BFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
