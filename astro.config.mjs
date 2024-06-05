import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: 'https://jamdeve.github.io/',
  base: 'LuxeChefs',
  output: 'server',
  outDir: './docs',
  build: {
    assets: 'astro'
  },
  adapter: vercel()
});