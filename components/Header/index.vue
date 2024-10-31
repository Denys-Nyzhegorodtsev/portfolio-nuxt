<template>
  <header>
    <NuxtLink to="/">Logo</NuxtLink>

    <div>
      <h1 :class="$style.title">Header</h1>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style module type="scss" src="./Header.module.scss"></style>
