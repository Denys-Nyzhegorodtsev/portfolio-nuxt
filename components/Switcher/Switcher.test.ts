import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Switcher from './index.vue';

describe('Switcher Component', () => {
  it('toggles side when button is clicked', async () => {
    const wrapper = mount(Switcher, {
      global: {
        mocks: {
          $style: {
            switcher: 'switcher',
            switcherButton: 'switcherButton',
            left: 'left',
            right: 'right',
          },
        },
      },
    });

    // Перевіряємо початковий стан класів
    expect(wrapper.find('.switcherButton').classes()).toContain('left');

    // Клікаємо для зміни значення side
    await wrapper.find('.switcherButton').trigger('click');
    expect(wrapper.find('.switcherButton').classes()).toContain('right');

    // Ще раз клікаємо для повернення до 'left'
    await wrapper.find('.switcherButton').trigger('click');
    expect(wrapper.find('.switcherButton').classes()).toContain('left');
  });
});
