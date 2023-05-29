/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				46: '11.75rem',
			},

			colors: {
				white: '#d4d4d4',
				'white-emphasis': '#a8a29e',
				'primary-text': '#262626',
				'card-background': '#fcd34d',
				'primary-background': '#E54222',
				'primary-background-emphasis': '#d4d4d4',
				'secondary-background': '#4DAD5B',
				'secondary-background-emphasis': '#d4d4d4',
				'tertiary-background': '#5EBDFC',
				'tertiary-background-emphasis': '#d4d4d4',
			},

			borderWidth: {
				10: '10px',
			},

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
