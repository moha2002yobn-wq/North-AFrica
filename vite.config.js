import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 10240,
  },
  server: {
    base: "/",
    port: 3000,
    host: true
  }
})
