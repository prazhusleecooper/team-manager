/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {

			colors: {
				primaryBlue: {
					light: '#465BE0',
					default: '#2B3990',
					dark: '#161D4A',
				},
				secondaryBlue: {
					light: '#3286FC',
					default: '#0169FE',
					dark: '#033C8F',
				},
				primaryIndigo: {
					light: '#7878AB',
					default: '#545479',
					dark: '#34344A',
				},
			},

			fontFamily: {
				roboto: ['Roboto Slab'],
			},

			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.15rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},

			dropShadow: {
				// 'shadow': '10px 10px 15px 0px rgba(0, 0, 0, 0.75)',
				default: '10px 10px 15px 0px rgba(191,88,191,1)',
			}
		},
	},
	plugins: [
	],
}
