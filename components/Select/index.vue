<template>
  <div
    :class="[
      'custom-select',
      $style.customSelect,
      isOpen ? $style.open : $style.close,
    ]"
  >
    <div :class="$style.selectedOption" @click="toggleOptions">
      {{ selectedLabel }}
    </div>
    <div :class="$style.options">
      <div
        v-for="option in options"
        :key="option.value"
        :class="$style.option"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    onMounted,
    onBeforeUnmount,
    defineProps,
    defineEmits,
    watch,
  } from 'vue';

  interface Option {
    label: string;
    value: string;
  }

  // Приймаємо пропс та еміт для v-model
  const props = defineProps<{ modelValue: string; options: Option[] }>();
  const emit = defineEmits(['update:modelValue']);

  const isOpen = ref(false);
  const selectedLabel = ref('Select an option');
  const options = props.options;

  // Оновлюємо `selectedLabel` коли змінюється `modelValue`
  watch(
    () => props.modelValue,
    (newValue) => {
      const selectedOption = options.find(
        (option) => option.value === newValue
      );
      if (selectedOption) {
        selectedLabel.value = selectedOption.label;
      }
    },
    { immediate: true }
  );

  const handleClickOutside = (event: MouseEvent) => {
    const element = event.target;
    if (element instanceof HTMLElement && !element.closest('.custom-select')) {
      isOpen.value = false;
    }
  };

  const toggleOptions = () => {
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option: Option) => {
    selectedLabel.value = option.label;
    emit('update:modelValue', option.value); // Оновлюємо значення v-model
    isOpen.value = false;
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<style module type="scss" src="./Select.module.scss"></style>
