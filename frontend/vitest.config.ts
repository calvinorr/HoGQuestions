import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Force tests to resolve react/react-dom to the project's copies
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    // Inline deps was deprecated; keep minimal deps config but ensure same React copy via alias above
    deps: {
      inline: ['react', 'react-dom'],
    },
    // increase test timeout slightly if needed
    testTimeout: 5000,
  },
})
