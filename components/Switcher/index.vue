<template>
  <div :class="$style.switcher">
    <div
      :class="[
        'flex-c',
        $style.switcherButton,
        side === 'left' ? $style.left : $style.right,
      ]"
      @click="toggleTheme()"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const side = ref('left');

  const toggleTheme = () => {
    side.value = side.value === 'left' ? 'right' : 'left';
  };
</script>

<style module type="scss" src="./Switcher.module.scss"></style>
