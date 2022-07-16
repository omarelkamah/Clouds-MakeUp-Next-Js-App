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
        backGray: "#acacac",
        backLightGray: "#e5e7eb",
        backYellow: "#ffce53",
      },
      flex: {
        2: "2 2 0%",
      },
      container: {
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
