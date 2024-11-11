<template>
  <div :class="$style.wrapper">
    <Header :base-url="baseURL" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Header from '@/components/Header/index.vue';

  const baseURL = import.meta.env.BASE_URL || '/_nuxt/';
</script>

<style module type="scss" src="./layout.module.scss"></style>
