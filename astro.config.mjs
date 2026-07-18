// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://parvjain108.github.io',
  base: '/manchitra-transit-maps/',
  integrations: [sitemap()],
});