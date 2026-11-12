import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: process.env.SITE_URL || 'https://moolah.famproject.cloud',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci'),
      
    }),
  ],
});
