/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basis: "#01a8df",
        beta: "#dbdbdb",
        charlie: "#f0f0f0",
        delta: "#595959",
        echo: "#2b2b2b",
        excel: "#3ca874",
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
