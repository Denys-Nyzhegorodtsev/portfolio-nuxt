import { mount } from '@vue/test-utils';
import Icon from './index.vue';
import { describe, it, expect } from 'vitest';

describe('SvgIcon Component', () => {
  it('updates icon and attributes when props change', async () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'initial-icon',
        color: 'initialColor',
        fill: 'initialFill',
        stroke: 'initialStroke',
      },
    });

    const useElement = wrapper.find('use');

    console.log('useElement', useElement.attributes('fill'));

    // Перевірка початкових значень атрибутів
    expect(useElement.attributes('href')).toContain('#initial-icon');
    expect(useElement.attributes('fill')).toBe('initialFill'); // color використовується, якщо fill відсутній
    expect(useElement.attributes('stroke')).toBe('initialStroke');

    // Оновлення props fill
    await wrapper.setProps({ fill: 'newFill' });
    expect(useElement.attributes('fill')).toBe('newFill'); // fill має вищий пріоритет

    // Оновлення props stroke
    await wrapper.setProps({ stroke: 'newStroke' });
    expect(useElement.attributes('stroke')).toBe('newStroke');

    // Оновлення props color
    await wrapper.setProps({ color: 'newColor' });
    expect(useElement.attributes('fill')).toBe('newFill'); // fill залишається пріоритетним
  });
});
