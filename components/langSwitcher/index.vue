<template>
  <Select v-model="selectedLocale" :options="options" />
</template>

<script lang="ts" setup>
  import { ref, watch, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();
  const router = useRouter();
  const route = useRoute();

  interface Option {
    label: string;
    value: string;
  }

  const options = ref<Option[]>([
    { label: 'en', value: 'en' },
    { label: 'ua', value: 'ua' },
  ]);

  const selectedLocale = ref(locale.value);

  const changeLocale = async () => {
    const basePath = route.path.replace(/^\/(en|ua)/, '');
    await router.push(`/${selectedLocale.value}${basePath}`);
    locale.value = selectedLocale.value;
  };

  watch(selectedLocale, changeLocale);

  watch(
    () => route.params.locale,
    (newLocale) => {
      const normalizedLocale = Array.isArray(newLocale)
        ? newLocale[0]
        : newLocale;
      if (normalizedLocale && normalizedLocale !== locale.value) {
        locale.value = normalizedLocale;
        selectedLocale.value = normalizedLocale;
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    selectedLocale.value = locale.value;
  });
</script>

<style module type="scss" src="./LangSwitcher.module.scss"></style>
