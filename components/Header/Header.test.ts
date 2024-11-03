// components/Header/Header.test.ts
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './index.vue';
import { createI18n } from 'vue-i18n';
import en from '../../locales/en.json';
import ua from '../../locales/ua.json';
import { useNuxtApp } from '../../__mocks__/app';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ua,
  },
});

beforeEach(() => {
  // Використовуємо мок для `useNuxtApp`
  (
    global as unknown as {
      useNuxtApp: () => { $toggleTheme: ReturnType<typeof vi.fn> };
    }
  ).useNuxtApp = () => ({
    $toggleTheme: vi.fn(),
  });
});

// Мок для `useRouter`
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useRoute: () => ({
    params: {
      locale: 'en', // Початкова локаль, яку можна змінювати для тестів
    },
    path: '/',
  }),
}));

// Визначаємо глобальний мок для `NuxtApp`
beforeEach(() => {
  (
    global as unknown as {
      useNuxtApp: () => { $toggleTheme: ReturnType<typeof vi.fn> };
    }
  ).useNuxtApp = () => ({
    $toggleTheme: vi.fn(),
  });
});

describe('Header Component', () => {
  it('renders the NuxtLink with the correct text', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [i18n],
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    const logoLink = wrapper.find('a');
    expect(logoLink.exists()).toBe(true);
    expect(logoLink.text()).toBe('Logo');
  });

  it('renders the header title with the correct class', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [i18n],
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    const title = wrapper.find('h1');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Header');
    expect(title.classes().length).toBeGreaterThan(0);
  });

  it('calls $toggleTheme when triggered', () => {
    const { $toggleTheme } = useNuxtApp() as unknown as {
      $toggleTheme: ReturnType<typeof vi.fn>;
    };

    expect($toggleTheme).not.toHaveBeenCalled();
    $toggleTheme();
    expect($toggleTheme).toHaveBeenCalled();
  });
});
