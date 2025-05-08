import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['d3-hierarchy', 'd3-selection'],
    },
    ssr: {
      noExternal: ['d3-hierarchy', 'd3-selection']
    }
  },
});