/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        xl: "1332px",
        "2xl": "1332px",
      },
    },
    extend: {
      colors: {
        primary: "#454545",
        second: "#F2F2F2",
      },
      screens: {
        mb: "400px",
        mmb: "310px",
      },
    },
  },
  plugins: [],
};
