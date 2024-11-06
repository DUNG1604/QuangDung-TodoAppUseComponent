<!-- ButtonComponent.vue -->
<template>
  <button
    type="submit"
    :class="[
      'px-4 py-2 font-semibold rounded focus:outline-none transition-colors text-white',
      bgColor,
      hoverBgColor,
    ]"
    :style="{ width: width }"
  >
    {{ content }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  content: {
    type: String,
    default: "Button",
  },
  width: {
    type: String,
    default: "auto",
  },
  color: {
    type: String,
    default: "blue",
  },
});

const bgColor = computed(() => {
  return (
    {
      blue: "bg-blue-500",
      red: "bg-red-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500",
    }[props.color] || "bg-blue-500"
  );
});

const hoverBgColor = computed(() => {
  return (
    {
      blue: "hover:bg-blue-600",
      red: "hover:bg-red-600",
      green: "hover:bg-green-600",
      yellow: "hover:bg-yellow-600",
    }[props.color] || "hover:bg-blue-600"
  );
});

</script>

<style scoped></style>
