import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    preview: {
      allowedHosts: [
        'terra-frontend-1fma.onrender.com'
      ]
    }
  }
})