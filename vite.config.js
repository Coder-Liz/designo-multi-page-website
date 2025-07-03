// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        locations: resolve(__dirname, 'locations.html'),
        'app-design': resolve(__dirname, 'app-design.html'),
        'graphic-design': resolve(__dirname, 'graphic-design.html'),
        'web-design': resolve(__dirname, 'web-design.html'),
      },
    },
  },
});
