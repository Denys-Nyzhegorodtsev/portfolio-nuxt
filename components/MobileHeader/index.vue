<template>
  <header v-if="isMounted" :class="$style.header">
    <div :class="['content-wrapper', 'flex-r', $style.hederContent]">
      <NuxtLink :class="$style.logo" to="/">
        <Logo />
      </NuxtLink>

      <MobileMenu />
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  const isMounted = ref(false);

  // Синхронізуємо `selectedLocale` при завантаженні сторінки
  onMounted(() => {
    isMounted.value = true;
  });
</script>

<style module type="scss" src="./MobileHeader.module.scss"></style>
