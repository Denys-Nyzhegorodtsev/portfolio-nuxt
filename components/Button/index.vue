<template>
  <button
    v-if="type === 'button'"
    :class="[$style.button, size === 'big' ? $style.big : '']"
  >
    {{ text }}
  </button>
  <a
    v-if="type === 'download'"
    :href="url"
    :class="[$style.button, size === 'big' ? $style.big : '']"
    download="CV-Denys-Nyzhehorodtsev.pdf"
  >
    {{ text }}
  </a>
  <a v-if="type === 'link'" :href="url" :class="$style.button">
    {{ text }}
  </a>
</template>

<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  });

  const { text, url, type } = props;
</script>

<style module type="scss" src="./Button.module.scss"></style>
