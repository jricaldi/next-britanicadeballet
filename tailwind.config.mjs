/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "black",
        color2: "#b15063",
        color3: "snow",
        color4: "rgba(195, 215, 238, 0.3)",
        color5: "#3e3a3a",
      }
    },
  },
  plugins: [],
};
