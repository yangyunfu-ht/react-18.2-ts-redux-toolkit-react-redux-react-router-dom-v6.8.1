import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    open: true,
    port: 3000
  },
  build: {
    minify: false,
  }
})