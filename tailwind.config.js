/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
  "./*.html",
  "./**/*.html",
  "./assets/js/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#A894FF",
        "primary-dark": "#8D78E5",
        "primary-light": "#F0E9FF",
        "primary-tint": "#F7F3FF",

        "warm-100": "#FAF8F5",
        "warm-200": "#F3F0EB",
        "warm-300": "#E8E3DD",
        "warm-500": "#A29C94",
        "warm-700": "#524E48",

        success: "#43C285",
        warning: "#F5A623",
        error: "#E35D6A",

        "night-bg": "#17141F",
        "night-surface": "#221E2B",
        "night-muted": "#6C6480",
        "night-text": "#F3ECFF",
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.06)",
      },
      maxWidth: {
        content: "72rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [],
};
