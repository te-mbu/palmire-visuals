/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["groteskFont", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        light: "#F8F9FA",
        dark: "#121212",
        grey: {
          50: "#808080",
        },
      },
      fontSize: {
        vw: "4vw",
      },
    },
    plugins: [],
  },
};
