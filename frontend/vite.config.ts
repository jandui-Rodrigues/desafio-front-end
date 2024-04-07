import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const port = process.env.PORT || 3000
const PORT = Number(port)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
})
