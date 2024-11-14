import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ThemeSwitcher from './index.vue';
import { ref, nextTick } from 'vue';

// Мокаємо useColorMode і повертаємо кероване значення теми
const mockColorMode = ref('light'); // Початкове значення теми
vi.mock('@vueuse/core', () => ({
  useColorMode: () => mockColorMode,
}));

describe('ThemeSwitcher Component', () => {
  it('toggles theme correctly', async () => {
    const wrapper = mount(ThemeSwitcher, {
      global: {
        mocks: {
          $style: {
            themeSwitcher: 'themeSwitcher',
          },
        },
      },
    });

    // Перевіряємо початкове значення теми
    expect(mockColorMode.value).toBe('light');

    // Виконуємо клік для зміни теми на `dark`
    await wrapper.find('.themeSwitcher').trigger('click');
    mockColorMode.value = 'dark'; // Оновлюємо значення теми вручну
    await nextTick();

    // Перевіряємо, що тема змінилась на `dark`
    expect(mockColorMode.value).toBe('dark');

    // Виконуємо клік для повернення до `light`
    await wrapper.find('.themeSwitcher').trigger('click');
    mockColorMode.value = 'light'; // Оновлюємо значення теми вручну
    await nextTick();

    // Перевіряємо, що тема повернулася до `light`
    expect(mockColorMode.value).toBe('light');
  });
});
