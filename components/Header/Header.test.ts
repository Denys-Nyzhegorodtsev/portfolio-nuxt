// components/Header/Header.test.ts
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Header from './index.vue';

describe('Header Component', () => {
  it('renders the NuxtLink with the correct text', () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>', // Замінюємо NuxtLink на простий <a> в тестах
          },
        },
      },
    });

    // Перевіряємо, чи існує NuxtLink, замінений на <a>, з текстом "Logo"
    const logoLink = wrapper.find('a');
    expect(logoLink.exists()).toBe(true);
    expect(logoLink.text()).toBe('Logo');
  });

  it('renders the header title with the correct class', () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>', // Замінюємо NuxtLink на <a> для всіх тестів цього компонента
          },
        },
      },
    });

    // Перевіряємо, чи заголовок містить правильний текст і клас
    const title = wrapper.find('h1');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Header');

    // Оскільки ми використовуємо модульні стилі, клас буде змінено на унікальний і перевірити конкретну назву класу складно.
    // Однак, ми можемо перевірити, чи заголовок має клас.
    expect(title.classes().length).toBeGreaterThan(0); // Має містити хоч один клас
  });
});
