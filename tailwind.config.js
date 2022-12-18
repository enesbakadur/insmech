/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '0.75rem',
        },
        extend: {
            colors: {
                'primary': '#00B0EF',
                'secondary': '#0A0A0A',
                'description': '#A4A4A4',
                'blue-black': '#070708',
                'card-gray': '#0D0D0D',
                'card-stroke': '#151515',
            },
            margin: {},
        },
    },
    
    plugins: [],
};
