<template>
  <div :class="$style.wrapper">
    <HeaderMobile :base-url="baseUrl" />
    <div :class="['content-wrapper']">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import { inject } from 'vue';

  const baseUrl = inject('baseUrl') as string;
</script>

<style module type="scss" src="./layout.module.scss"></style>
