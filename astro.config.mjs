import {defineConfig, passthroughImageService} from 'astro/config';
import icon from "astro-icon";

import vue from '@astrojs/vue';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), vue()],
  output: "server",
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  }
});
