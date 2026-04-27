import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base relative : OK pour le domaine personnalisé (racine) et pour user.github.io/nom-depot/.
// Surcharge : VITE_BASE=/ (env). Voir https://vite.dev/config/shared-options.html#base
export default defineConfig({
  base: process.env.VITE_BASE?.trim() || './',
  plugins: [react(), tailwindcss()],
})
