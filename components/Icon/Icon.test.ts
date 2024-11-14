import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Icon from './index.vue';

describe('SvgIcon Component', () => {
  it('renders with default properties', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'test-icon',
      },
      global: {
        mocks: {
          $style: { themeSwitcher: 'themeSwitcher' },
        },
      },
    });

    const svgElement = wrapper.find('svg');
    expect(svgElement.attributes('width')).toBe('24px');
    expect(svgElement.attributes('height')).toBe('24px');
    expect(svgElement.attributes('style')).toContain('color: currentColor');

    const useElement = wrapper.find('use');
    expect(useElement.attributes('href')).toContain(
      '/assets/images/sprite.svg?v=1.3#test-icon'
    );
  });

  it('renders with custom properties', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'test-icon',
        color: '#FF5733',
        width: '48px',
        height: '48px',
      },
    });

    const svgElement = wrapper.find('svg');
    expect(svgElement.attributes('width')).toBe('48px');
    expect(svgElement.attributes('height')).toBe('48px');

    const colorStyle = svgElement.attributes('style') || '';
    expect(colorStyle.includes('color: rgb(255, 87, 51);')).toBe(true);

    const useElement = wrapper.find('use');
    expect(useElement.attributes('href')).toContain(
      '/assets/images/sprite.svg?v=1.3#test-icon'
    );
  });

  it('updates icon and color when props change', async () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'initial-icon',
        color: '#FF5733',
      },
    });

    await wrapper.setProps({ icon: 'updated-icon', color: '#000000' });

    const useElement = wrapper.find('use');
    expect(useElement.attributes('href')).toContain(
      '/assets/images/sprite.svg?v=1.3#updated-icon'
    );

    const svgElement = wrapper.find('svg');
    const updatedColorStyle = svgElement.attributes('style') || '';
    expect(updatedColorStyle.includes('color: rgb(0, 0, 0);')).toBe(true);
  });
});
