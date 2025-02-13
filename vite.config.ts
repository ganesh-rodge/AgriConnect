import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows external access
    port: 5173, // Set a fixed port
    strictPort: true,
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["lucide-react"],
  },
})
