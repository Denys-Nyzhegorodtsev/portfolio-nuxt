<template>
  <svg
    :width="width"
    :height="height"
    :style="{ color: currentColor }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use
      :href="`/assets/images/sprite.svg?v=1.4#${currentIcon}`"
      :fill="currentColor"
      :stroke="currentColor"
    />
  </svg>
</template>

<script lang="ts" setup>
  import { watch, ref } from 'vue';

  // Приймаємо вхідні параметри: іконку, колір, ширину і висоту
  const props = defineProps({
    icon: { type: String, required: true },
    color: { type: String, default: 'currentColor' },
    width: { type: String, default: '24px' },
    height: { type: String, default: '24px' },
  });

  const { width, height } = props;

  const currentIcon = ref(props.icon);
  const currentColor = ref(props.color);

  // Спостерігаємо за змінами значень props.icon та props.color
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
</script>
