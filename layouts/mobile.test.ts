import { mount, type VueWrapper } from '@vue/test-utils';
import MobileLayout from '@/layouts/mobile.vue';
import { describe, it, expect, beforeEach } from 'vitest';

describe('MobileLayout Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof MobileLayout>>;

  beforeEach(() => {
    wrapper = mount(MobileLayout, {
      global: {
        provide: {
          baseUrl: '/mocked_base_url/', // Мокаємо значення baseUrl
        },
        stubs: {
          NuxtPage: true,
          Footer: { template: '<div class="footer-mock" />' },
          HeaderMobile: {
            template:
              '<div class="header-mobile-mock" :data-base-url="baseUrl"></div>',
            props: ['baseUrl'],
          },
        },
      },
    });
  });

  it('renders HeaderMobile with correct baseUrl', () => {
    const headerMobileComponent = wrapper.find('.header-mobile-mock');
    expect(headerMobileComponent.exists()).toBe(true);
    expect(headerMobileComponent.attributes('data-base-url')).toBe(
      '/mocked_base_url/'
    );
  });

  it('renders NuxtPage and Footer components', () => {
    const nuxtPage = wrapper.findComponent({ name: 'NuxtPage' });
    expect(nuxtPage.exists()).toBe(true);

    const footerComponent = wrapper.find('.footer-mock');
    expect(footerComponent.exists()).toBe(true);
  });
});
