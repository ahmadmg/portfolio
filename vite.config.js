import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/portfolio/', not needed to delpoy to Hostinger
  plugins: [react()],
 
})
