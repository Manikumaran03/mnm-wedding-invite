/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        signature: ['"Dancing Script"', 'cursive'], // Use your chosen cursive font name
        caveat: ['"Caveat"', 'cursive'], // Use your chosen cursive font name
      },
    },
  },
  plugins: [],
};
