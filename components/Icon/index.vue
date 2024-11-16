<template>
  <svg
    :width="width"
    :height="height"
    v-bind="computedAttributesSvg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use
      :href="`/assets/images/sprite.svg?v=3.1#${currentIcon}`"
      v-bind="computedAttributesUse"
    />
  </svg>
</template>

<script lang="ts" setup>
  import { ref, computed, watch } from 'vue';
  import { useColorMode } from '@vueuse/core';

  const props = defineProps({
    icon: { type: String, required: true },
    color: { type: String, default: '' },
    width: { type: String, default: '24px' },
    height: { type: String, default: '24px' },
    stroke: { type: String, default: 'transparent' },
    fill: { type: String, default: 'transparent' },
    bg: { type: String, default: 'transparent' },
  });

  const { width, height } = props;

  const currentIcon = ref(props.icon);
  const currentColor = ref(props.color || ''); // Використовуємо дефолтний або заданий колір
  const currentFill = ref(props.fill || '');
  const currentStroke = ref(props.stroke || '');

  // Використання useColorMode для отримання поточної теми
  const colorMode = useColorMode();

  // Реактивні атрибути для <svg>
  const computedAttributesSvg = computed(() => {
    const attributes: Record<string, string> = {
      width: props.width,
      height: props.height,
    };

    if (currentColor.value) {
      attributes.style = `color: ${currentColor.value}`;
    }

    if (props.bg) {
      attributes.style = `background-color: ${props.bg}`;
    }

    return attributes;
  });

  // Реактивні атрибути для <use>
  // const computedAttributesUse = computed(() => {
  //   const attributes: Record<string, string> = {
  //     fill: currentFill.value || 'transparent',
  //     stroke: currentStroke.value || 'transparent',
  //   };

  //   if (currentStroke.value) {
  //     attributes.stroke = currentStroke.value;
  //   }

  //   if (currentFill.value) {
  //     attributes.fill = currentFill.value;
  //   }
  //   return attributes;
  // });
  // ---------
  // const computedAttributesUse = computed(() => {
  //   const attributes: Record<string, string> = {};

  //   // Використовуємо колір, якщо він вказаний, або значення fill за замовчуванням
  //   attributes.fill = currentColor.value || currentFill.value || 'transparent';

  //   // Використовуємо значення stroke, якщо воно вказане
  //   attributes.stroke = currentStroke.value || 'transparent';

  //   return attributes;
  // });
  // ---------
  // const computedAttributesUse = computed(() => {
  //   const attributes: Record<string, string> = {};

  //   // Використовуємо fill, якщо воно вказане, інакше беремо color
  //   attributes.fill = currentFill.value || currentColor.value || 'transparent';

  //   // Використовуємо stroke, якщо воно вказане
  //   attributes.stroke = currentStroke.value || 'transparent';

  //   return attributes;
  // });
  // ==========
  const computedAttributesUse = computed(() => {
    const attributes: Record<string, string> = {};

    // Якщо fill явно не заданий або дорівнює "transparent", використовуємо color
    attributes.fill =
      currentFill.value && currentFill.value !== 'transparent'
        ? currentFill.value
        : currentColor.value || 'transparent';

    attributes.stroke = currentStroke.value || 'transparent';

    return attributes;
  });
  // Слідкування за зміною теми
  watch(
    () => colorMode.value,
    (newTheme) => {
      if (currentIcon.value === 'github') {
        // Перевіряємо, чи іконка — github
        currentFill.value = newTheme === 'dark' ? '#fff' : '#000';
      }
      if (currentIcon.value === 'sun') {
        // Перевіряємо, чи іконка — github
        currentStroke.value = newTheme === 'dark' ? '#fff' : '#000';
      }
    },
    { immediate: true }
  );

  // Спостерігаємо за зміною props
  watch(
    () => props.icon,
    (newIcon) => {
      currentIcon.value = newIcon;
    }
  );

  watch(
    () => props.color,
    (newColor) => {
      currentColor.value = newColor;
    }
  );

  watch(
    () => props.stroke,
    (newStroke) => {
      currentStroke.value = newStroke;
    }
  );

  watch(
    () => props.fill,
    (newFill) => {
      currentFill.value = newFill;
    }
  );
</script>
