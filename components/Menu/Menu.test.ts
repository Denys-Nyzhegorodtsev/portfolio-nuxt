import { mount } from '@vue/test-utils';
import Menu from './index.vue';
import { describe, it, expect } from 'vitest';

describe('Menu Component', () => {
  const mockLinks = [
    { id: '1', title: 'About', url: '/about', color: 'red' },
    { id: '2', title: 'Info', url: '/info', color: 'blue' },
    { id: '3', title: 'Blog', url: '/blog', color: 'green' },
  ];

  it('renders correctly with default type', () => {
    const wrapper = mount(Menu, {
      props: {
        type: '',
        links: mockLinks,
      },
      global: {
        mocks: {
          $style: {
            menu: 'menu',
            mobile: 'mobile',
            menuList: 'menuList',
          },
        },
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    // Збираємо всі заголовки з елементів списку
    const menuItemsText = wrapper.findAll('ul > li').map((item) => item.text());

    // Перевіряємо, чи містить кожен пункт меню очікувані значення
    expect(menuItemsText).toContain('About');
    expect(menuItemsText).toContain('Info');
    expect(menuItemsText).toContain('Blog');
  });

  it('applies mobile class when type is mobile', () => {
    const wrapper = mount(Menu, {
      props: {
        type: 'mobile',
      },
      global: {
        mocks: {
          $style: {
            menu: 'menu',
            mobile: 'mobile',
            menuList: 'menuList',
          },
        },
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    expect(wrapper.find('nav').classes()).toContain('menu');
    expect(wrapper.find('nav').classes()).toContain('mobile');
  });
});
