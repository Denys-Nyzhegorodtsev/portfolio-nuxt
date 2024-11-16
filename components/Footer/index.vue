<template>
  <footer>
    <div :class="['content-wrapper', 'flex-r', $style.footerContent]">
      <Menu dir="col" :links="menu" />
      <Menu
        v-if="isMounted"
        dir="col"
        :links="computedIconsColor"
        icons="true"
      />
      <Menu dir="col" :links="variants" icons="true" />
    </div>
  </footer>
</template>

<script lang="ts" setup>
  import { ref, watch, onMounted, computed } from 'vue';
  import { useColorMode } from '@vueuse/core';
  import menuData from '../Menu/menu.json';
  import socialsData from './socials.json';
  import socialsDataDark from './socials-dark.json';
  import variantsData from './variants.json';

  const colorMode = useColorMode();

  const isMounted = ref(false);

  const { menu } = menuData;
  const { menu: variants } = variantsData;

  // Визначення кольору іконок в залежності від теми
  const computedIconsColor = computed(() => {
    return colorMode.value === 'dark' ? socialsDataDark.menu : socialsData.menu;
  });

  // Відстеження зміни теми
  watch(
    () => colorMode.value,
    (newMode) => {
      console.log('Theme changed to:', newMode);
    }
  );

  // Монтуємо компонент
  onMounted(() => {
    isMounted.value = true;
  });
</script>

<style module type="scss" src="./Footer.module.scss"></style>
