import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  base: 'LuxeChefs/',
  output: 'server',
  outDir: './docs',
  build: {
    assets: 'astro'
  },
  adapter: vercel()
});