<template>
  <nav :class="$style.menu">
    <ul :class="['flex-r', $style.menuList]">
      <li v-for="item in menu" :key="item.id">
        <NuxtLink :to="localePath(item.url)">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import { useLocalePath } from '#i18n';
  import menuData from './menu.json';

  const localePath = useLocalePath();

  const { menu } = menuData;
</script>

<style module type="scss" src="./Menu.module.scss"></style>
