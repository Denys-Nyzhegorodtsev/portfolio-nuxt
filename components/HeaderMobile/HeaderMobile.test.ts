import { mount } from '@vue/test-utils';
import MobileHeader from './index.vue';
import { describe, it, expect } from 'vitest';

describe('MobileHeader Component', () => {
  it('renders correctly after mounting', async () => {
    const wrapper = mount(MobileHeader, {
      props: {
        baseUrl: '/mocked_base_url',
      },
      global: {
        mocks: {
          $style: {
            header: 'header',
            hederContent: 'hederContent',
            logo: 'logo',
          },
        },
        stubs: {
          NuxtLink: { template: '<a><slot /></a>' },
          Logo: { template: '<div class="stubbed-Logo"></div>' },
          MobileMenu: {
            template: '<div class="stubbed-MobileMenu"></div>',
            props: ['baseUrl'],
          },
        },
      },
    });

    // Перевіряємо, що `header` спочатку не відображається до монтування
    expect(wrapper.find('header').exists()).toBe(false);

    // Емуляція монтування
    await wrapper.vm.$nextTick();

    // Після монтування `header` має відображатися
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('header').classes()).toContain('header');

    // Перевірка наявності логотипу через клас
    const logoLink = wrapper.find('.logo');
    expect(logoLink.exists()).toBe(true);

    // Пошук MobileMenu за класом
    const mobileMenu = wrapper.find('.stubbed-MobileMenu');
    expect(mobileMenu.exists()).toBe(true);
  });
});
