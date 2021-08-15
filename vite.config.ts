import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
