<template>
  <header>
    <NuxtLink to="/">Logo</NuxtLink>

    <div>
      <h1 :class="$style.title">Header</h1>
    </div>
    <button @click="$toggleTheme()">Змінити тему</button>
  </header>
</template>

<script lang="ts" setup>
  const { $toggleTheme } = useNuxtApp();
</script>

<style module type="scss" src="./Header.module.scss"></style>
