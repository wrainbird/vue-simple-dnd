import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
		colors: {
			accent: colors.emerald,
			gray: colors.slate
		}
	},
  },
  plugins: [starlightPlugin()],
};
