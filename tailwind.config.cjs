const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			zIndex: {
				1000: '1000'
			}
		}
	},
	daisyui: {
	      themes: [
		{
		  mytheme: {
			"primary": "#FFD700",
          		"secondary": "#0057B7",
        		"accent": "#FF6978",
			"neutral": "#191D24",
			"base-100": "#2A303C",
			"info": "#FF6978",
			"success": "#0057B7",
			"warning": "#0057B7",
			"error": "#0057B7",
		  },
		},
	      ],
	    },

	plugins: [require('daisyui')]
};

module.exports = config;
