/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0f0f0f",
        pearl: "#e8e8e8",
        accent: "#00d9ff",
        snow: "#ffffff",
        chrome: "#1a1a1a",
        mist: "#333333",
        silver: "#b0b0b0",
        glow: "#00ffff",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 217, 255, 0.5)",
        "card-hover": "0 0 30px rgba(0, 217, 255, 0.2)",
      },
    },
  },
  plugins: [],
}

