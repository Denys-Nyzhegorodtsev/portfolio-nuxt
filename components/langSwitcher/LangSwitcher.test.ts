import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import { createRouter, createMemoryHistory } from 'vue-router';
import LangSwitcher from './index.vue';
import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: { message: 'Hello' },
    ua: { message: 'Привіт' },
  },
});

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/:locale',
      component: LangSwitcher,
    },
  ],
});

describe('LangSwitcher Component', () => {
  beforeEach(async () => {
    await router.push('/en');
    await router.isReady();
  });

  it('updates locale when route param is an array', async () => {
    const wrapper = mount(LangSwitcher, {
      global: {
        plugins: [router, i18n],
      },
    });

    // Змінюємо параметри маршруту, щоб активувати watch
    await router.push({ path: '/ua' });
    await nextTick();

    // Перевіряємо, чи змінився locale та selectedLocale
    const locale = i18n.global.locale as Ref<string>;

    expect(locale.value).toBe('ua');
    expect(
      (wrapper.vm as unknown as { selectedLocale: string }).selectedLocale
    ).toBe('ua');
  });
});
