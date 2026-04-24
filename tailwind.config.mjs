/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes :{
        ticker :{
          "0%" : {transform : "translateX(0)"},
          "100%" : {transform : "translateX(-50%)"},
        },
        
      },
      animation : {
          ticker : "ticker 40s linear infinite",
      },
      colors: {
        primary: "#000000",
        secondary: "#B7B7B7",
        accent: "#A8956A",         // Nickel - warm silvery-gold, the characteristic tinge of nickel metal
        "accent-light": "#C4AE85", // Lighter warm silver-gold variant
        "accent-bright": "#8C7A52", // Deeper, richer nickel tone,
        "li": '#3B82F6',
        'li-l': '#93C5FD',
        'li-d': '#1E40AF',
        'li-bg': '#EFF6FF',
        'li-t': 'rgba(59,130,246,.08)',
        ink: '#1A1A2E',
        ink2: '#2D2D44',
        ink3: '#4A4A6A',
        muted: '#8888AA',
        bdr: 'rgba(26,26,46,.10)',
        page: '#F7F5F0',
        grn: '#1A7A4A',
        'grn-bg': '#E8F5ED',
        red: '#C0392B',
        'red-bg': '#FDECEA',
        amb: '#92400E',
        'amb-bg': '#FEF3C7',
      },
    },
  },
  plugins: [
     function({addUtilities}){
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
      })
    }
  ],
};
