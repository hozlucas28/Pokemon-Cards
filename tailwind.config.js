/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				fullRotate: 'fullRotate 64s linear infinite',
			},

			keyframes: {
				fullRotate: {
					'100%': { transform: 'rotate(360deg)' },
				},
			},
		},
	},
	plugins: [],
}
