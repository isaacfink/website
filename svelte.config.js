import { vitePreprocess } from '@astrojs/svelte';
import { markdown } from 'svelte-preprocess-markdown'

export default {
	extensions: ['.svelte', '.md'],
	preprocess: [markdown(), vitePreprocess()]
};
