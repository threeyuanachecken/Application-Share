import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '192.168.1.9',
    port: 1234,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vant': ['vant'],
          'axios': ['axios'],
          'vue-router': ['vue-router'],
          'vue': ['vue'],
          'pinia': ['pinia']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'axios',
      'vant',
      'vue-router',
      'vue',
      'pinia'
    ]
  },
  base: '/<REPO>/'
})
