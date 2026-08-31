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

      keyframes: {
        morph: {
          "0%": {
            borderRadius: "30% 70% 60% 40% / 40% 50% 50% 60%",
          },

          "25%": {
            borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          },

          "50%": {
            borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%",
          },

          "75%": {
            borderRadius: "70% 30% 40% 60% / 40% 60% 50% 50%",
          },

          "100%": {
            borderRadius: "30% 70% 60% 40% / 40% 50% 50% 60%",
          },
        },
      },

      animation: {
        morph: "morph 8s ease-in-out infinite",
      },

    },
  },

  plugins: [],
}