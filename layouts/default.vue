<template>
  <div :class="$style.wrapper">
    <Header />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  import Header from '@/components/Header/index.vue';
</script>

<style module type="scss" src="./layout.module.scss"></style>
