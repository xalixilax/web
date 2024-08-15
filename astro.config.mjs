import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: 'https://xalixilax.github.io',
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
	],
});
