// components/Header/Header.test.ts
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './index.vue';

// Оголошуємо тип для useNuxtApp
interface NuxtAppMock {
  $toggleTheme: ReturnType<typeof vi.fn>;
}

// Створюємо глобальний мок для useNuxtApp з точним типом
beforeEach(() => {
  (global as any).useNuxtApp = () =>
    ({
      $toggleTheme: vi.fn(),
    } as unknown as NuxtAppMock); // Проміжне перетворення типу для уникнення конфліктів
});

describe('Header Component', () => {
  it('renders the NuxtLink with the correct text', () => {
    const wrapper = mount(Header, {
      global: {
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
    const { $toggleTheme } = useNuxtApp() as unknown as NuxtAppMock;

    expect($toggleTheme).not.toHaveBeenCalled();
    $toggleTheme();
    expect($toggleTheme).toHaveBeenCalled();
  });
});
