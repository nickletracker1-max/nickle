/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#B7B7B7",
        accent: "#A8956A",         // Nickel - warm silvery-gold, the characteristic tinge of nickel metal
        "accent-light": "#C4AE85", // Lighter warm silver-gold variant
        "accent-bright": "#8C7A52", // Deeper, richer nickel tone
      },
    },
  },
  plugins: [],
};
