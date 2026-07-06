/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F111A",
        card: "#171B27",
        surface: "#1D2333",

        primary: "#57E6D9",

        text: "#F8FAFC",
        secondary: "#A8B2C1",
        muted: "#6B7280",

        border: "#283042",
      },
    },
  },
  plugins: [],
}

