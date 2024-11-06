<template>
  <button v-if="type === 'button'" :class="$style.button">{{ text }}</button>
  <a
    v-if="type === 'download'"
    :href="url"
    :class="$style.button"
    download="CV-Denys-Nyzhehorodtsev.pdf"
  >
    {{ text }}
  </a>
  <a v-if="type === 'link'" :href="url" :class="$style.button">
    {{ text }}
  </a>
</template>

<script lang="ts" setup>
  defineProps(['text', 'url', 'type']);
</script>

<style module type="scss" src="./Button.module.scss"></style>
