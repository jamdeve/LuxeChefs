import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  outDir: './docs',
  build: {
    assets: 'astro'
  },
  adapter: netlify()
});