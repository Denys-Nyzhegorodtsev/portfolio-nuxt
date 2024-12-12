<template>
  <footer>
    <div
      :class="[
        'content-wrapper',
        dir === 'row' ? 'flex-r' : $style.mobileFooter,
        $style.footerContent,
      ]"
    >
      <section :class="$style.footerBlock">
        <h4 :class="$style.title">Menu</h4>
        <Menu dir="col" :links="menu" />
      </section>
      <section :class="[$style.footerBlock, $style.contacts]">
        <h4 :class="$style.title">Contacts</h4>
        <Menu
          v-if="isMounted"
          dir="block"
          :links="computedIconsColor"
          icons="true"
        />
      </section>
      <section :class="[$style.footerBlock, $style.contacts]">
        <h4 :class="$style.title">Site Variants</h4>
        <Menu dir="block" :links="variants" icons="true" />
      </section>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue';
  import { useColorMode } from '@vueuse/core';
  import type { PropType } from 'vue';
  import menuData from '../Menu/menu.json';
  import socialsData from './socials.json';
  import socialsDataDark from './socials-dark.json';
  import variantsData from './variants.json';

  const props = defineProps({
    dir: { type: String as PropType<'row' | 'col'>, default: 'row' },
  });

  const { dir } = props;

  const colorMode = useColorMode();

  const isMounted = ref(false);

  const { menu } = menuData;
  const { menu: variants } = variantsData;

  // Визначення кольору іконок в залежності від теми
  const computedIconsColor = computed(() => {
    return colorMode.value === 'dark' ? socialsDataDark.menu : socialsData.menu;
  });

  // Монтуємо компонент
  onMounted(() => {
    isMounted.value = true;
  });
</script>

<style module type="scss" src="./Footer.module.scss"></style>
