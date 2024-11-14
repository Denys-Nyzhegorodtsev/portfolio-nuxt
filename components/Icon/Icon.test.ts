import { mount } from '@vue/test-utils';
import Icon from './index.vue';
import { describe, it, expect } from 'vitest';

describe('SvgIcon Component', () => {
  it('updates icon and color when props change', async () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'initial-icon',
        color: 'initialColor',
      },
      global: {
        provide: {
          baseUrl: '/assets/', // передаємо baseUrl через provide
        },
      },
    });

    const useElement = wrapper.find('use');

    // Перевірка початкового значення href
    expect(useElement.attributes('href')).toContain(
      '/assets/images/sprite.svg?v=1.3#initial-icon'
    );

    // Оновлення props іконки
    await wrapper.setProps({ icon: 'updated-icon' });
    expect(useElement.attributes('href')).toContain(
      '/assets/images/sprite.svg?v=1.3#updated-icon'
    );

    // Оновлення props кольору
    await wrapper.setProps({ color: 'newColor' });
    expect(useElement.attributes('fill')).toBe('newColor');
    expect(useElement.attributes('stroke')).toBe('newColor');
  });
});
