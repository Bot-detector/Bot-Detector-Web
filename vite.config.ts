import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import content from '@originjs/vite-plugin-content';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), content()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // IMPORTANT!: Proxy are only for local development to prevent CORS issues
    proxy: {
      "/api/osrsbotdetector/": {
        target: "https://osrsbotdetector.com/api/",
        changeOrigin: true,
        ws: false,
        rewrite: (path) => path.replace("/api/osrsbotdetector/", ""),
      },
      "/api/runelite/": {
        target: "https://api.runelite.net/",
        changeOrigin: true,
        ws: false,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
});
