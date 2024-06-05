import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: 'docs',
  build: {
    assets: 'astro'
  }
});