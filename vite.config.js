import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: false, // Deshabilitar Fast Refresh temporalmente
    }),
  ],
});
