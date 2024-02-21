import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://MuhammadRizky1023.github.io/league-of-lagend-page/', // Sesuaikan dengan nama repositori GitHub Anda
  plugins: [react()],
  build: {
    outDir: 'dist', // Folder output dari proses build
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias untuk path tertentu, disesuaikan dengan struktur proyek Anda
    },
  },
});
