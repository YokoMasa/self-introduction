import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
        playground: resolve(__dirname, 'playground/index.html'),
        another: resolve(__dirname, 'playground/another.html'),
        visibilityEventTest: resolve(__dirname, 'visibility_event_test/index.html')
      },
    },
  },
})