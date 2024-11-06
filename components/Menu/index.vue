<template>
  <nav :class="$style.menu">
    <ul :class="['flex-r', $style.menuList]">
      <li v-for="item in menu">
        <NuxtLink :to="localePath(item.url)">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import { useLocalePath } from '#i18n';

  const localePath = useLocalePath();
  import menuData from './menu.json';

  const { menu } = menuData;

  console.log('menuData', menu);
</script>

<style module type="scss" src="./Menu.module.scss"></style>
