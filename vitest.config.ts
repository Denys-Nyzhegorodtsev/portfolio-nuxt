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
      '#i18n': fileURLToPath(new URL('./__mocks__/i18n.ts', import.meta.url)),
      '@': fileURLToPath(new URL('./', import.meta.url)), // Додаємо підтримку для '@'
    },
    exclude: ['**/node_modules/**', '**/.history/**'], // Виняток для node_modules
  },
});
