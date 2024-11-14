<template>
  <div :class="$style.mobileMenuWrapper">
    <div
      :class="['flex-c', $style.menuButton, isOpen ? $style.open : null]"
      @click="toggleMenu"
    >
      <span :class="$style.firstLine" />
      <span :class="$style.secondLine" />
      <span :class="$style.thirdLine" />
    </div>

    <div :class="[$style.menuContent, isOpen ? $style.show : null]">
      <div :class="['content-wrapper']">
        <div :class="$style.menuWrapper">
          <Menu type="mobile" />
        </div>

        <div :class="['flex-r', $style.buttonsWrapper]">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>

        <Button
          text="Download CV"
          type="download"
          size="big"
          :url="`${props.baseUrl}/public/docs/CV-Denys-Nyzhehorodtsev.pdf`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const props = defineProps<{
    baseUrl: string;
  }>();

  const isOpen = ref(false);

  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<style module type="scss" src="./MobileMenu.module.scss"></style>
