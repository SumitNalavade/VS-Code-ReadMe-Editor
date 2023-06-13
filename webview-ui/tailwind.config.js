/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef476f",
        secondary: "#06d6a0"
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ef476f",
          "secondary": "#06d6a0",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
    darkTheme: "light",
  }
}