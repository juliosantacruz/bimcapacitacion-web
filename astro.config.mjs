import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react({
      include: ["**/react/*"],
    }),
  ],
  site: "https://www.bimcapacitacion.com",
  base: "/",
  image: {
    service: passthroughImageService(),
  },
});
