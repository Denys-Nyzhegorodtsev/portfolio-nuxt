import { defineNuxtConfig } from 'nuxt/config';

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
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'ua', iso: 'uk-UA', file: 'ua.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
});
