<template>
  <svg
    :width="width"
    :height="height"
    :style="{ color }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use
      :href="`${baseURL}assets/images/sprite.svg?v=1.3#${icon}`"
      :fill="color"
      :stroke="color"
    />
  </svg>
</template>

<script lang="ts" setup>
  import { computed, inject, watch } from 'vue';
  import { useNuxtApp } from '#app';

  // Базовий URL для випадку, якщо файл SVG спрайта розміщено в /assets/images/
  const baseURL = import.meta.env.BASE_URL || '/_nuxt/';

  // Приймаємо вхідні параметри: іконку, колір, ширину і висоту
  const props = defineProps({
    icon: { type: String, required: true },
    color: { type: String, default: 'currentColor' },
    width: { type: String, default: '24px' },
    height: { type: String, default: '24px' },
  });

  const { icon, color, width, height } = props;

  // watch(
  //   () => icon,
  //   (newVal) => {
  //     console.log('icon', icon);
  //     console.log('newVal', newVal);
  //   }
  // );

  // const { theme } = useNuxtApp();
  // const theme = inject<Ref<string>>('theme');
  // if (!theme) throw new Error('Theme not provided');

  // const currentIcon = computed(() =>
  //   theme.value === 'dark' ? 'dark' : 'light'
  // );

  // console.log('currentIcon', currentIcon);
</script>
