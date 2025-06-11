import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // /auth bilan boshlangan so‘rovlar https://beckend-n14.vercel.app/auth ga yo‘naltiriladi
      '/auth': {
        target: 'https://beckend-n14.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      // /users bilan boshlangan so‘rovlar ham backendga yo‘naltiriladi
      '/users': {
        target: 'https://beckend-n14.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    }
  }
});
