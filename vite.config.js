import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import * as path from "path";

const root = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "dist");

export default defineConfig({
  root,
  resolve: {
    alias: {
      "@": path.resolve(root),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(root, "index.html"),
      },
    },
  },
  plugins: [vue(), vuetify({ autoImport: true })],
});
