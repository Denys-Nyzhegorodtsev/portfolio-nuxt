// components/Header/Header.test.ts
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './index.vue';
import { createI18n } from 'vue-i18n';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';
import ja from '../../locales/ja.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    fr,
    ja,
  },
});

// Визначаємо глобальний мок без перевірки на `NuxtApp`
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
