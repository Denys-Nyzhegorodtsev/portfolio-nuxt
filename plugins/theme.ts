export default defineNuxtPlugin((nuxtApp) => {
  const isClient = !nuxtApp.ssrContext; // Перевірка, чи код виконується на клієнті

  const toggleTheme = () => {
    if (isClient) {
      const currentTheme = localStorage.getItem('theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  const setInitialTheme = () => {
    if (isClient) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  };

  // Встановлення початкової теми при завантаженні
  setInitialTheme();

  // Додаємо методи до Nuxt, щоб вони були доступні в компонентах
  nuxtApp.provide('toggleTheme', toggleTheme);
});
