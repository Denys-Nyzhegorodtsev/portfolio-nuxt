import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon.png',
        },
      ],
    },
  },
  nitro: {
    output: {
      dir: '.output',
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/scss/theme.scss', '@/assets/scss/main.scss'],
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
          api: 'modern-compiler',
          additionalData: `
          @use "/assets/scss/reset.scss";
          @use "/assets/scss/variables.scss";
          @use "/assets/scss/mixins.scss" as *;
          `,
        },
      },
    },
  },
  modules: ['@nuxtjs/i18n', 'nuxt-viewport'],
  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'ua', language: 'uk-UA', file: 'ua.json' },
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
