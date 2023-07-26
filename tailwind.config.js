/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      accentColor: "#751fff",
      backgroundColor: "#e1e1e1",
      textColor: "#424242",
      fontFamily: "Roboto Condensed",
    },
  },
  plugins: [],
};
