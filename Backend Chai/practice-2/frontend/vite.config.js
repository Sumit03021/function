import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    proxy:{
      '/api':'http://localhost:3000',//whenever call /api then use localhost api appended this first.
    },
  },
  plugins: [react()],
})
