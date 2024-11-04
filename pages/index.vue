<template>
  <div>
    <h1>Home page</h1>

    <NuxtLink :to="localePath('about')">About</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  import { useLocalePath } from '#i18n'; // Імпортуємо useLocalePath

  const localePath = useLocalePath();
</script>

<style></style>
