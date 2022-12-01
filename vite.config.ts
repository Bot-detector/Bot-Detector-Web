import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // IMPORTANT!: Proxy are only for local development
    proxy: {
      '/api/osrsbotdetector/': {
        target: 'https://osrsbotdetector.com/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/osrsbotdetector/, '')
      },
      '/api/runelite/': {
        target: 'https://api.runelite.net/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
