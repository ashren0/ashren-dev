// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.ashren.dev",
  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      FRONTPAGE_POST_COUNT: envField.number({
        context: "client",
        access: "public",
        default: 3
      }),
      PAGINATE_PAGE_SIZE: envField.number({
        context: "client",
        access: "public",
        default: 6
      })
    }
  },
  markdown: {
    shikiConfig: {
      wrap: false,
      theme: "dracula"
    }
  }
});
