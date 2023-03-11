/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-color": "#FCD043",
        "primary-color": "#313F38",
        "white-color": "#FFFCF6",
        "text-green": "#FCD043",
        "error-color": "#B03E3E",
        "success-color": "#2A5B46",
        "attention-color": "#DC9B39",
        "dark-btn": "rgba(49, 63, 56, 0.48);",
        "h1-color": "#1B3B36",
      },
      fontFamily: {
        headerFont: ["Miracle", "sans-serif"],
        bodyFont: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
