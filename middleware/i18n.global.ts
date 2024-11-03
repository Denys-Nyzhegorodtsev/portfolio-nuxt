import { defineNuxtRouteMiddleware, useNuxtApp } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp();
  const i18n = nuxtApp.$i18n;

  // Отримуємо локаль з URL
  const matchedLocale = to.path.split('/')[1];
  const locale = matchedLocale || 'en';

  // Перевіряємо, чи існує локаль в i18n, і оновлюємо, якщо вона відрізняється
  if (i18n && i18n.locale.value !== locale) {
    i18n.locale.value = locale; // Встановлюємо локаль через `value`
  }
});
