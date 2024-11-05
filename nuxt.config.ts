import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  nitro: {
    output: {
      dir: '.output',
    },
  },
  devtools: { enabled: true },
  css: [
    '@/assets/scss/theme.scss',
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/assets/scss/reset.scss";
          @use "/assets/scss/variables.scss";
          @use "/assets/scss/mixins.scss" as *;
          `,
        },
      },
    },
  },
  fontawesome: {
    icons: {
      solid: ['sun'],
      regular: ['sun'],
    },
  },
  modules: ['@nuxtjs/i18n', '@vesp/nuxt-fontawesome'],
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
