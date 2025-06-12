// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import cloudflare from "@astrojs/cloudflare";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {    
    plugins: [
      tailwindcss()
    ],  
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "@components": resolve(__dirname, "./src/components"),
        "@layouts": resolve(__dirname, "./src/layouts"),
        "@images": resolve(__dirname, "./src/assets/images"),
        "@styles": resolve(__dirname, "./src/styles"),
        "@i18n":resolve(__dirname,"./src/I18n")
      },
    },
  },
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    routing: {
      prefixDefaultLocale: true,
    }
  }
});
