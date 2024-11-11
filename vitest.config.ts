import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
    alias: {
      '#app': fileURLToPath(new URL('./__mocks__/app.ts', import.meta.url)), // Вказуємо точний файл
    },
    exclude: ['**/node_modules/**', '**/.history/**'], // Виняток для node_modules
  },
});
