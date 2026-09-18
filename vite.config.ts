import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Relative base so the build works at any path (Cloudflare root, GitHub
  // Pages subpath, file://). Dev needs an absolute base.
  base: command === 'build' ? './' : '/',
  plugins: [vue(), tailwindcss()],
}))
