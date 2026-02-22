import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/nexuslabz-showcase/team/',
  resolve: {
    alias: {
      '@theme': resolve(__dirname, '../../packages/theme-nexuslabz'),
    },
  },
});
