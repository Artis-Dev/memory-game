import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    base: '/memory-game/',
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      eslintPlugin({
        cache: false,
        include: ['./src/**/*.js', './src/**/*.jsx'],
        exclude: [],
      }),
    ],
  };
});
