/// <reference types="vitest" />

import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"

import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom"
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
