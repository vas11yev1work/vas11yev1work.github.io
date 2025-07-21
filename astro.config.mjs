import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vslvv.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), vue(), mdx()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
});