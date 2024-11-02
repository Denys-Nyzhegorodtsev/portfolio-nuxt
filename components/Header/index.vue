<template>
  <header>
    <NuxtLink to="/">Logo</NuxtLink>

    <div>
      <h1 :class="$style.title">Header</h1>
      <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
    </div>
    <div>
      <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">en</option>
          <option value="ua">ua</option>
        </select>
      </form>
      <button @click="$toggleTheme()">Змінити тему</button>
    </div>
  </header>
</template>

<script lang="ts" setup>
  const { $toggleTheme } = useNuxtApp();
</script>

<style module type="scss" src="./Header.module.scss"></style>
