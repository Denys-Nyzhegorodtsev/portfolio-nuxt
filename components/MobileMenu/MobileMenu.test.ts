import { mount } from '@vue/test-utils';
import MobileMenu from './index.vue';
import { describe, it, expect } from 'vitest';

describe('MobileMenu Component', () => {
  it('renders correctly with mocked BASE_URL', () => {
    const wrapper = mount(MobileMenu, {
      props: {
        baseUrl: '/mocked_base_url',
      },
      global: {
        mocks: {
          $style: {
            mobileMenuWrapper: 'mobileMenuWrapper',
            menuButton: 'menuButton',
            firstLine: 'firstLine',
            secondLine: 'secondLine',
            thirdLine: 'thirdLine',
            menuContent: 'menuContent',
            show: 'show',
            open: 'open',
            menuWrapper: 'menuWrapper',
            buttonsWrapper: 'buttonsWrapper',
          },
        },
        stubs: {
          Menu: { template: '<div class="stubbed-Menu"></div>' },
          LangSwitcher: {
            template: '<div class="stubbed-LangSwitcher"></div>',
          },
          ThemeSwitcher: {
            template: '<div class="stubbed-ThemeSwitcher"></div>',
          },
          Button: {
            template: `<a class="stubbed-Button" :href="url"></a>`,
            props: ['url'],
          },
        },
      },
    });

    // Перевірка наявності кнопки для завантаження
    const downloadButton = wrapper.find('.stubbed-Button');
    expect(downloadButton.exists()).toBe(true);
    expect(downloadButton.attributes('href')).toBe(
      '/mocked_base_url/public/docs/CV-Denys-Nyzhehorodtsev.pdf'
    );
  });

  it('toggles menu visibility when menu button is clicked', async () => {
    const wrapper = mount(MobileMenu, {
      props: {
        baseUrl: '/mocked_base_url',
      },
      global: {
        mocks: {
          $style: {
            menuButton: 'menuButton',
            open: 'open',
            menuContent: 'menuContent',
            show: 'show',
          },
        },
      },
    });

    const menuButton = wrapper.find('.menuButton');
    const menuContent = wrapper.find('.menuContent');

    expect(menuButton.exists()).toBe(true);
    expect(menuContent.exists()).toBe(true);

    // Початковий стан: меню має бути прихованим
    expect(menuContent.classes()).not.toContain('show');

    // Клік для відкриття меню
    await menuButton.trigger('click');
    expect(menuContent.classes()).toContain('show');

    // Клік для закриття меню
    await menuButton.trigger('click');
    expect(menuContent.classes()).not.toContain('show');
  });
});
