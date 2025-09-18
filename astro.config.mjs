import { defineConfig, passthroughImageService } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://alee14.me',
  integrations: [icon(), react(), svelte()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: false
    }
  }),
  image: {
    service: passthroughImageService()
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // https://shikiji.netlify.app/guide/dual-themes#light-dark-dual-themes
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shikiji.netlify.app/guide/transformers
      // Find common transformers: https://shikiji.netlify.app/packages/transformers
      transformers: []
    }
  }
});
