<template>
  <header v-if="isMounted" :class="$style.header">
    <div :class="['content-wrapper', 'flex-r', $style.hederContent]">
      <NuxtLink to="/"> Logo </NuxtLink>
      <div>
        <form>
          <select
            id="locale-select"
            v-model="selectedLocale"
            @change="changeLocale"
          >
            <option value="en">en</option>
            <option value="ua">ua</option>
          </select>
        </form>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { ref, watch, onMounted, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();
  const router = useRouter();
  const route = useRoute();

  const isMounted = ref(false);

  const selectedLocale = ref(locale.value);

  const changeLocale = async () => {
    const basePath = route.path.replace(/^\/(en|ua)/, ''); // Очищаємо URL від попередньої локалі
    await router.push(`/${selectedLocale.value}${basePath}`); // Додаємо нову локаль до URL
    locale.value = selectedLocale.value; // Оновлюємо значення локалі
  };

  // Спостерігаємо за змінами параметра `locale` в URL
  watch(
    () => route.params.locale,
    (newLocale) => {
      const normalizedLocale = Array.isArray(newLocale)
        ? newLocale[0]
        : newLocale;
      if (normalizedLocale && normalizedLocale !== locale.value) {
        locale.value = normalizedLocale; // Оновлюємо поточну локаль
        selectedLocale.value = normalizedLocale; // Оновлюємо вибрану локаль
      }
    },
    { immediate: true } // Викликаємо watch одразу при завантаженні
  );

  // Синхронізуємо `selectedLocale` при завантаженні сторінки
  onMounted(() => {
    isMounted.value = true;
    selectedLocale.value = locale.value;
  });
</script>

<style module type="scss" src="./Header.module.scss"></style>
