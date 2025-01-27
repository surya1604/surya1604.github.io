import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure base is '/' unless hosting under a subpath
  build: {
    outDir: 'dist',
  },
});
