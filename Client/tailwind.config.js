/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0c1317",
        "primary-strong": "#111b21",
        "primary-strong-dark": "#e9edef",
        "secondary-": "##667781",
        "secondary-dark": "#8696a0",
      },
    },
  },
  plugins: [],
};
