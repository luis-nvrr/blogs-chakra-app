import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
