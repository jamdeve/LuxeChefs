import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jamdeve.github.io/',
  base: 'LuxeChefs',
  output: 'static',
  outDir: './docs',
  build: {
    assets: 'astro'
  }
});