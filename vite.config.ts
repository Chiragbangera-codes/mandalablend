import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        // ── Vendor splitting ─────────────────────────────────────
        // Ensures large shared libraries are in their own cached chunks
        // and are never duplicated across page chunks.
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // Framer Motion
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          // React Icons
          if (id.includes('node_modules/react-icons')) {
            return 'vendor-icons';
          }
        },

        // ── Readable chunk file names ────────────────────────────
        // e.g. page-home-BkAbc123.js
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
