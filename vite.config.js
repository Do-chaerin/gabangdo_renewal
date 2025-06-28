

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueDevTools from "vite-plugin-vue-devtools";


export default defineConfig({
  plugins: [
    vue(),
      vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),      
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 매번 상단에 주입할 SCSS (변수/믹스인 등)
        additionalData: `@import "@/Variables.scss";`,
        // alias가 SCSS에서도 동작하도록 includePaths 추가
        includePaths: [path.resolve(__dirname, "src")],
      },
    },
  },
});
