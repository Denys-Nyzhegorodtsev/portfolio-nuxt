import { mount } from '@vue/test-utils';
import DesktopLayout from '../layouts/desktop.vue';
import Header from '../components/Header/index.vue';
import { describe, it, expect, vi } from 'vitest';

// Мокаємо baseUrl перед кожним тестом
vi.mock('../__mocks__/baseUrlMock', () => ({
  baseUrl: '/mocked_base_url/',
}));

describe('DesktopLayout Component', () => {
  it('renders correctly and passes baseURL to Header', () => {
    const wrapper = mount(DesktopLayout, {
      global: {
        stubs: {
          NuxtPage: true,
          Footer: { template: '<div class="footer-mock" />' },
        },
      },
    });

    // Перевірка наявності Header компонента і передачі base-url
    const headerComponent = wrapper.findComponent(Header);
    expect(headerComponent.exists()).toBe(true);
    expect(headerComponent.props('baseUrl')).toBe('/mocked_base_url/');

    // Перевірка наявності NuxtPage
    const nuxtPage = wrapper.findComponent({ name: 'NuxtPage' });
    expect(nuxtPage.exists()).toBe(true);

    // Перевірка наявності Footer
    const footerComponent = wrapper.find('.footer-mock');
    expect(footerComponent.exists()).toBe(true);
  });
});
