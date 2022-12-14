/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Open Sans', 'sans-serif'] 
		},
		colors: {
			'darkblue': '#022A46',
			'darkgreen': '#04AB83',
			'lightgreen': '#73F4C2',
			'white': '#FFF',
		},
		extend: {},
	},
	plugins: [],
}
