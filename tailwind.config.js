/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    gridTemplateColumns: {
      dash: "200px 1fr",
      main: "repeat(auto-fit, minmax(300px, 1fr))",
    },
  },
  plugins: [],
};
