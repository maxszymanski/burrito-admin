/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bg: 'rgb(250, 250, 250)',
				darkbg: '#051923',
				darkSecondBg: '#09202c',
				darkPrimary: '#00a6fb',
				darktext: '#ebebeb',
				darkborder: '#163849',
			},
		},
	},
	plugins: [],
}
