<template>
  <div :class="$style.wrapper">
    <HeaderMobile :base-url="baseURL" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  const baseURL = import.meta.env.BASE_URL || '/_nuxt/';
</script>

<style module type="scss" src="./layout.module.scss"></style>
