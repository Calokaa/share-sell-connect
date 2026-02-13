import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/share-sell-connect/', // 👈 ureke double quotes niba phone yawe ibyanga
  plugins: [react()]
})
