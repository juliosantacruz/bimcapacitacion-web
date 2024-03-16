import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    partytown(),
    react({
      include: ["**/react/*"],
    }),
  ],
  site: "https://juliosantacruz.dev",
  base: "/",
});
