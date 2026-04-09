import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Automatically use the correct base path for GitHub Pages OR Vercel
  base: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/GesaPortofolio/' : '/',
})
