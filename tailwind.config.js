/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: '"Inter","sans-serif"',
            },
            backgroundColor: {
                "blue-section": "#0A0F1F",
                "blue-light-card": "#101629",
                "number-circle": "#2673BA3D",
            },
        },
    },
    plugins: [],
};