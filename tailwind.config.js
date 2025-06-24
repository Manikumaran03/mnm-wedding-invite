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
        },
    },
    plugins: [],
};
