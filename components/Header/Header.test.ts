// components/Header/Header.test.ts
// import { createI18n } from 'vue-i18n';
// import en from '../../locales/en.json';
// import ua from '../../locales/ua.json';
// import { useNuxtApp } from '../../__mocks__/app';

import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './index.vue';

describe('Header render', () => {
  it('render correctly', () => {
    const wrapper = mount(Header);

    expect(wrapper.exists()).toBe(true);
  });
});

// const i18n = createI18n({
//   legacy: false,
//   locale: 'en',
//   messages: {
//     en,
//     ua,
//   },
// });

// beforeEach(() => {
//   // Використовуємо мок для `useNuxtApp`
//   (
//     global as unknown as {
//       useNuxtApp: () => { $toggleTheme: ReturnType<typeof vi.fn> };
//     }
//   ).useNuxtApp = () => ({
//     $toggleTheme: vi.fn(),
//   });
// });

// // Мок для `useRouter`
// vi.mock('vue-router', () => ({
//   useRouter: () => ({
//     push: vi.fn(),
//   }),
//   useRoute: () => ({
//     params: {
//       locale: 'en', // Початкова локаль, яку можна змінювати для тестів
//     },
//     path: '/',
//   }),
// }));

// // Визначаємо глобальний мок для `NuxtApp`
// beforeEach(() => {
//   (
//     global as unknown as {
//       useNuxtApp: () => { $toggleTheme: ReturnType<typeof vi.fn> };
//     }
//   ).useNuxtApp = () => ({
//     $toggleTheme: vi.fn(),
//   });
// });

// describe('Header Component', () => {
//   it('renders the NuxtLink with the correct text', async () => {
//     const wrapper = mount(Header, {
//       global: {
//         plugins: [i18n],
//         stubs: {
//           NuxtLink: {
//             template: '<a><slot /></a>',
//           },
//         },
//       },
//     });

//     await wrapper.vm.$nextTick();
//     const logoLink = wrapper.find('a');
//     expect(logoLink.exists()).toBe(true);
//   });

//   it('calls $toggleTheme when triggered', () => {
//     const { $toggleTheme } = useNuxtApp() as unknown as {
//       $toggleTheme: ReturnType<typeof vi.fn>;
//     };

//     expect($toggleTheme).not.toHaveBeenCalled();
//     $toggleTheme();
//     expect($toggleTheme).toHaveBeenCalled();
//   });
// });
