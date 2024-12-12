<template>
  <header v-if="isMounted" :class="$style.header">
    <div :class="['content-wrapper', 'flex-r', $style.hederContent]">
      <NuxtLink :class="$style.logo" to="/">
        <Logo />
      </NuxtLink>

      <Menu :links="menu" />

      <div :class="['flex-r', $style.buttonsWrapper]">
        <LangSwitcher />
        <ThemeSwitcher />
        <Button
          text="Download CV"
          type="download"
          :url="`${props.baseUrl}public/docs/CV-Denys-Nyzhehorodtsev.pdf`"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import menuData from '../Menu/menu.json';

  const props = defineProps<{
    baseUrl: string;
  }>();

  const { menu } = menuData;
  const isMounted = ref(false);

  onMounted(() => {
    isMounted.value = true;
  });
</script>

<style module type="scss" src="./Header.module.scss"></style>
