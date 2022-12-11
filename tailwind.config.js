/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'primary': '#00B0EF',
                'secondary': '#0A0A0A',
                'description': '#A4A4A4',
            },
            margin: {},
        },
    },
    
    plugins: [],
};
