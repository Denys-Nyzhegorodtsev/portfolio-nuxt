// (globalThis as any).importMetaEnv = { BASE_URL: '/test_base_url/' };
import { setup } from '@nuxt/test-utils';

export default async function () {
  await setup({
    rootDir: process.cwd(), // Вказуємо кореневу директорію проекту
    server: false, // Відключаємо сервер Nuxt під час тестів
    nuxtConfig: {
      components: true,
      vite: {
        resolve: {
          alias: {
            '~/components': 'components', // Може допомогти з автоімпортом компонентів
          },
        },
      },
    },
  });
}
