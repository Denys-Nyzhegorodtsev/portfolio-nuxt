export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  nitro: {
    output: {
      dir: '.output',
    },
  },
  devtools: { enabled: true },
  vite: {
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['components/**/*.test.ts'],
    },
  },
});
