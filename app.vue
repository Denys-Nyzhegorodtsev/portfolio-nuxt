<template>
  <NuxtLayout :name="layoutName">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { computed, useViewport } from '#imports';
  import { provide } from 'vue';
  import { baseUrl } from './__mocks__/baseUrlMock';

  const viewport = useViewport();

  provide('baseUrl', baseUrl);

  const layoutName = computed(() => {
    return viewport.breakpoint.value.includes('mobile') ? 'mobile' : 'desktop';
  });
</script>
