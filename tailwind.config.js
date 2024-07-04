/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ['class', '[data-theme="dark"]'],
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'textLight': '#776B5D',
                'foregroundLight': '#EBE3D5',
                'elementLight': '#F2F2F2',
                'iconLight': '#B0A695',
                'backgroundLight': '#F3EEEA',
                'spanLight': '#B0A695',
                'textDark': '#F0F2F584',
                'foregroundDark': '#292929',
                'elementDark': '#262626',
                'iconDark': '#FFC600',
                'backgroundDark': '#262626',
                'spanDark': '#FFC600',
            },
            fontFamily: {
                'lora': ['Lora'],
                'poorstory': ['Poor Story'],
                'jetbrains': ['Jetbrains Mono']
            },
        },
    },
    plugins: []
}