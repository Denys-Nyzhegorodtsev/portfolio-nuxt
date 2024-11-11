import { describe, it, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import LangSwitcher from './index.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import { nextTick } from 'vue';
import Select from '../Select/index.vue';
import en from '../../locales/en.json';
import ua from '../../locales/ua.json';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/:locale', component: LangSwitcher }],
});

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en, ua },
});

describe('LangSwitcher Component', () => {
  const wrapper = mount(LangSwitcher, {
    global: {
      plugins: [router, i18n],
    },
  });

  it('renders correctly with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('updates locale and selectedLocale when route param changes', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/:locale', component: LangSwitcher }],
    });

    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      messages: { en, ua },
    });

    const wrapper = mount(LangSwitcher, {
      global: {
        plugins: [router, i18n],
      },
    });

    // Перевіряємо початкове значення
    expect(i18n.global.locale.value).toBe('en');
    expect((wrapper.vm as any).selectedLocale).toBe('en');

    // Імітуємо зміну параметра `locale` в маршруті на `ua`
    await router.push('/ua');
    await router.isReady();
    await nextTick();

    // Перевірка оновлених значень
    expect(i18n.global.locale.value).toBe('ua');
    expect((wrapper.vm as any).selectedLocale).toBe('ua');
  });
});
