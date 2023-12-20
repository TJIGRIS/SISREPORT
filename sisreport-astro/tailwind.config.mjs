/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#76f195',
				'secondary': '#19181b',
				'ternary': '#1F5F5B',
				'quaternary': '#a01010'
			}
		},
	},
	plugins: [],
}
