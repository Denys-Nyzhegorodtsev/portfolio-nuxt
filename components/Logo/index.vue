<template>
  <!-- <div :class="$style.logo">
    <div :class="$style.firstLetter">
      <span>D</span>
      <span>D</span>
    </div>
    <span>N</span>
  </div> -->
  <div :class="[$style.logo, $style[colorMode]]"></div>
</template>

<script lang="ts" setup>
  import { useColorMode } from '@vueuse/core';

  const colorMode = useColorMode();
</script>

<style module type="scss" src="./Logo.module.scss"></style>
