import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: 'server',
  outDir: './docs',
  build: {
    assets: 'astro'
  },
  adapter: vercel()
});