import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      }
    }
  },
  build: {
    outDir: 'modules',
    assetsDir: 'assets',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  }
})
