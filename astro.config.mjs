import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["en", "ja"],
  },

  integrations: [react()],
});