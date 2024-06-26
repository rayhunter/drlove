import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare()
});

/* 
setup fir github pages

import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://rayhunter.github.io',
  base: 'drlove',
}) */