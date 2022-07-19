import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      //@ts-expect-error import.meta.url is needed, this is a bug
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
           target: "https://api.astrobit.space/",
           changeOrigin: true,   
           ws: false,
           rewrite: path => path.replace('/api', ''),
       }
    }
  }
});
