/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0c1220",
        pearl: "#e7ecff",
        accent: "#5ce0ff",
        snow: "#f8fbff",
        chrome: "#1f293a",
        mist: "#c7d3e8",
        silver: "#9fb8d4",
        glow: "#7af1ff",
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

