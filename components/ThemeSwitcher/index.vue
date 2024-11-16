<template>
  <Switcher>
    <div :class="$style.themeSwitcher" @click="toggleTheme()">
      <Icon
        :icon="iconName"
        :fill="iconFill"
        :stroke="iconStroke"
        width="20px"
        height="20px"
      />
    </div>
  </Switcher>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useColorMode } from '@vueuse/core';

  const colorMode = useColorMode();

  // Динамічне визначення іконки
  const iconName = computed(() => {
    return colorMode.value === 'dark' ? 'sun' : 'moon';
  });

  // Динамічне визначення кольору fill
  const iconFill = computed(() => {
    return colorMode.value === 'dark' ? '#fff' : '#000';
  });

  // Динамічне визначення кольору stroke
  const iconStroke = computed(() => {
    return colorMode.value === 'dark' ? '#fff' : '#000';
  });

  // Функція перемикання теми
  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
  };
</script>

<style module type="scss" src="./ThemeSwitcher.module.scss"></style>
