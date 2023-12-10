/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins,sans-serif",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: "#8A270A",
        secondary: "#A86C58",
      },
    },
  },
  plugins: [],
};
