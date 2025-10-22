/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,jsx,ts,tsx}',
],
theme: {
extend: {
fontFamily: {
display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
},
colors: {
eluma: {
white: '#ffffff',
black: '#0a0a0a',
},
},
boxShadow: {
soft: '0 10px 25px rgba(0,0,0,0.06)'
},
borderRadius: {
xl2: '1.25rem'
}
},
},
plugins: [],
}