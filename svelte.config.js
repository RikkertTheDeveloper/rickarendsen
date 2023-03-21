import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

    compilerOptions: {
        preserveComments: false,
        preserveWhitespace: false,
        immutable: true,
        css: "injected"
    },

	kit: {
		adapter: adapter()
	}
};

export default config;
