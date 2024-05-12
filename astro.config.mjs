import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { mdsvex } from 'mdsvex';
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://aluf.dev',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false
    }
  },
  output: 'hybrid',
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), svelte({
    extensions: ['.svelte', '.svx'],
    preprocess: mdsvex()
  }), react(), markdoc(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])]
});