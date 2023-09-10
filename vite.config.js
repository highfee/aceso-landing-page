import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "contact.html"),
        // contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
highfee1402;
