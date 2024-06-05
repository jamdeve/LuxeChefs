import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: 'https://luxe-chefs.vercel.app/',
  base: 'LuxeChefs',
  output: 'server',
  outDir: './docs',
  build: {
    assets: 'astro'
  },
  adapter: vercel()
});