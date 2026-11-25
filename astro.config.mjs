// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Legacy path redirects — Astro generates HTML redirects in dist/
 * (works in `astro preview`). Cloudflare `_redirects` still supplies
 * real HTTP 301s in production.
 */
const legacyRedirects = {
  '/blog': '/tools',
  '/product/ahrefs-group-buy-unlimited-plan': '/ahrefs-group-buy',
  '/ahrefs-pricing': '/ahrefs-group-buy',
  '/envato-elements-pricing': '/envato-elements-group-buy',
  '/semrush-pricing': '/semrush-group-buy',
  '/secure/member': '/secure/login',
  '/signup': '/secure/signup',
  '/login': '/secure/login',
  '/sitemap.xml': '/sitemap-index.xml',
  '/sitemap_index.xml': '/sitemap-index.xml',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://buyahref.com',
  // Allow /path and /path/ so old backlinks with a trailing slash are not hard-404'd
  // before redirects run. Canonicals + sitemap stay slash-free; CF _redirects strip slash.
  trailingSlash: 'ignore',
  redirects: legacyRedirects,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // Keep URLs slash-free to match canonical style
      serialize(item) {
        if (item.url.endsWith('/') && item.url !== 'https://buyahref.com/') {
          item.url = item.url.replace(/\/$/, '');
        }
        return item;
      },
    }),
  ],
  build: {
    // Inline CSS to remove render-blocking stylesheet chain (mobile LCP)
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
