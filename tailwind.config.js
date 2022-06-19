/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: "Poppins, sans-serif",
        krona: '"Krona One", sans-serif',
      },
      colors: {
        backDark: "#0c080b",
        backLightDark: "#1e3329",
        backGray: "#b8b8b8",
        backLightGray: "#fafafa",
        backYellow: "#ffce53",
      },
    },
  },
  plugins: [],
};
