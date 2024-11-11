import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LangSwitcher from './index.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import { nextTick, ref } from 'vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/:locale', component: LangSwitcher }],
});

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en: {}, ua: {} },
});

describe('LangSwitcher Component', () => {
  beforeEach(async () => {
    await router.push({ path: '/en/about' });
    await router.isReady();
  });

  const wrapper = mount(LangSwitcher, {
    global: {
      plugins: [router, i18n],
    },
  });

  it('updates locale when route param is a single value', async () => {
    // Встановлюємо `locale` як одиничне значення
    await router.push('/ua');
    await router.isReady();

    const locale = i18n.global.locale as Ref<string>;
    expect(locale.value).toBe('ua');
    expect((wrapper.vm as any).selectedLocale).toBe('ua');
  });

  it('updates locale when route param is an array', async () => {
    // Встановлюємо `locale` як масив
    router.currentRoute.value.params.locale = ['ua'];
    await nextTick();

    const locale = i18n.global.locale as Ref<string>;
    expect(locale.value).toBe('ua');
    expect((wrapper.vm as any).selectedLocale).toBe('ua');
  });
});
