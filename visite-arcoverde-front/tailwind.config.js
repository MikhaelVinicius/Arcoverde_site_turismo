/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: '#B34724', // Barro, sertão, força
        laranja: '#F26D21',   // Fogo do São João, calor
        azul: '#007BA7',      // Céu cerúleo, Portal do Sertão
        areia: '#F5F5DC'      // Fundo neutro e acolhedor
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'] // Títulos imponentes
      },
    }
  },
  plugins: [],
}