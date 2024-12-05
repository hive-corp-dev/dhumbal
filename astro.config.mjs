import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["en", "ja"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_mixin.scss" as mixin;
          @use "./src/styles/_var.scss" as var;
          `,
        },
      },
    },
  },

  integrations: [react()],
});
