<template>
  <Switcher>
    <div :class="$style.themeSwitcher" @click="toggleTheme()">
      <Icon :icon="iconName" :color="iconColor" width="20px" height="20px" />
    </div>
  </Switcher>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useColorMode } from '@vueuse/core';
  const colorMode = useColorMode();

  const iconName = computed(() => {
    return colorMode.value === 'dark' ? 'sun' : 'moon';
  });

  const iconColor = computed(() =>
    colorMode.value === 'dark' ? '#fff' : '#000'
  );

  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
  };
</script>

<style module type="scss" src="./ThemeSwitcher.module.scss"></style>
