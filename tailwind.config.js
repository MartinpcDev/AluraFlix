/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				fondoPrincipal: '#252525',
				encabezado: '#333333',
				textoPrincipal: '#FFFFFF',
				textoSecundario: '#CCCCCC',
				botones: '#FFD166',
				resaltado: '#FFD166',
				fondoVideo: '#000000'
			},
			fontFamily: {
				code: ['Source Code Pro', 'monospace']
			},
			fontWeight: {
				400: '400',
				700: '700'
			}
		}
	},
	plugins: []
};
