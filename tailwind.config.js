/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cc-white": "#FFFFFE",
        "cc-black": "#121826",
        "cc-dark": "#364153",
        "cc-light": "#CED6E1",
        "cc-blue": "#406AFF",
      },
      fontSize: {
        "cs-50": "10px",
        "cs-100": "16px",
        "cs-200": "32px",
        "cs-300": "40px",
      },
    },
  },
  plugins: [],
};
