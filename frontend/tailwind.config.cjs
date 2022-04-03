const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			zIndex: {
				1000: '1000'
			}
		}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
