<template>
  <header v-if="isMounted" :class="$style.header">
    <div :class="['content-wrapper', 'flex-r', $style.hederContent]">
      <NuxtLink :class="$style.logo" to="/">
        <Logo />
      </NuxtLink>
      <div :class="['flex-r', $style.buttonsWrapper]">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  const isMounted = ref(false);

  // Синхронізуємо `selectedLocale` при завантаженні сторінки
  onMounted(() => {
    isMounted.value = true;
    // selectedLocale.value = locale.value;
  });
</script>

<style module type="scss" src="./Header.module.scss"></style>
