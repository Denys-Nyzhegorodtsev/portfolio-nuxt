import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Header from './index.vue';

describe('Header Component', () => {
  it('renders correctly with mocked BASE_URL', async () => {
    const wrapper = mount(Header, {
      props: {
        baseUrl: '/mocked_url/', // Передаємо baseURL як пропс
      },
      global: {
        stubs: [
          'NuxtLink',
          'Logo',
          'Menu',
          'LangSwitcher',
          'ThemeSwitcher',
          'Button',
        ],
      },
    });

    Object.defineProperty(wrapper.vm, 'isMounted', {
      value: true,
      writable: true,
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toContain('/mocked_url/');
  });
});
