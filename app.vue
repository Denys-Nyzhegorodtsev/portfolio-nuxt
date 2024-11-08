<template>
  <NuxtLayout :name="layoutName">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { computed, useViewport } from '#imports';

  const viewport = useViewport();

  const layoutName = computed(() => {
    return viewport.breakpoint.value.includes('mobile') ? 'mobile' : 'desktop';
  });
</script>
