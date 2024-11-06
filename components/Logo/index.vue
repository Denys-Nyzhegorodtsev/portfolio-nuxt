<template>
  <div :class="[$style.logo, $style[colorMode]]" />
</template>

<script lang="ts" setup>
  import { useColorMode } from '@vueuse/core';

  const colorMode = useColorMode();
</script>

<style module type="scss" src="./Logo.module.scss"></style>
