// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ultrassites-modelepro+.netlify.app', // <-- Ton domaine / Netlify URL
  vite: {
    plugins: [tailwindcss()]
  }
});
