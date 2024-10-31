export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  nitro: {
    output: {
      dir: '.output',
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/scss/theme.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/assets/scss/variables.scss";`,
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['components/**/*.test.ts'],
    },
  },
});
