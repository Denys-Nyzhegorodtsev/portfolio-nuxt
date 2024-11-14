import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Logo from './index.vue';
import { useColorMode } from '@vueuse/core';

// Мокуємо `useColorMode` для контролю над його значенням
vi.mock('@vueuse/core', () => ({
  useColorMode: vi.fn(),
}));

describe('Logo Component', () => {
  it('renders correctly with default color mode', () => {
    (useColorMode as ReturnType<typeof vi.fn>).mockReturnValue('light'); // встановлюємо режим 'light'

    const wrapper = mount(Logo);

    // Перевіряємо, що компонент рендериться
    expect(wrapper.exists()).toBe(true);

    // Перевіряємо, що клас для 'light' режиму присутній
    expect(wrapper.classes().some((c) => c.includes('light'))).toBe(true);
  });

  it('applies dark mode class correctly', () => {
    (useColorMode as ReturnType<typeof vi.fn>).mockReturnValue('dark'); // встановлюємо режим 'dark'

    const wrapper = mount(Logo);

    // Перевіряємо, що клас для 'dark' режиму присутній
    expect(wrapper.classes().some((c) => c.includes('dark'))).toBe(true);
  });
});
