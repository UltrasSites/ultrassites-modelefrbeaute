// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // <--- C'est le SEUL import nécessaire

export default defineConfig({
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()] // <--- C'est ICI que ça se passe maintenant
  }
  // Surtout PAS de ligne "integrations: [tailwind()]"
});