import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    ViteAliases({
      useTypescript: true,
      createGlobalAlias: true,
    }),
  ],
});
