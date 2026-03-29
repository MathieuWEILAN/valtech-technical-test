/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: "#171717",
        secondary: "#4C4C49",
        tertiary: "#D64545",
        neutral: "#F3F2EF",
      },
    },
  },
  plugins: [],
};
