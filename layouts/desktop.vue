<template>
  <div :class="$style.wrapper">
    <Header :base-url="baseUrl" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Header from '../components/Header/index.vue';
  import { baseUrl } from '../__mocks__/baseUrlMock';
</script>

<style module type="scss" src="./layout.module.scss"></style>
