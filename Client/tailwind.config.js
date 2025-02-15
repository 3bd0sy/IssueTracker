/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4338ca", // indigo-800
          dark: "#f97316", // blue-900
        },
      },
    },
  },
  plugins: [],
};
