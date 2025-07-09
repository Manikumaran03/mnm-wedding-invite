/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                signature: ['"Dancing Script"', 'cursive'], // Use your chosen cursive font name
                alexBrush: ['"Alex Brush"', 'cursive'],   // Refined, slightly less elaborate script
                herrVonMuellerhoff: ['"Herr Von Muellerhoff"', 'cursive'], // Distinctive, formal calligraphy
                pinyonScript: ['"Pinyon Script"', 'cursive'], // Clean, elegant, more condensed script
                greatVibes: ['"Great Vibes"', 'cursive'], // Elegant, flowing script
            },
            keyframes: {
                fadeInScale: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            animation: {
                fadeInScale: 'fadeInScale 0.3s ease-out forwards', // 0.3 seconds, ease-out timing, retains final state
            },
        },
    },
    plugins: [],
};
