import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/results/',
  resolve: {
    alias: {
      '@theme': resolve(__dirname, '../../packages/theme-nexuslabz'),
      '@assets': resolve(__dirname, '../../shared/assets'),
    },
  },
});
