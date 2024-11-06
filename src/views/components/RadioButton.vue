<template>
  <div
    class="flex items-center cursor-pointer"
    @click="toggle"
    :class="{ 'text-blue-500': isSelected, 'text-gray-700': !isSelected }"
  >
    <div
      class="w-6 h-6 border-2 rounded-full mr-2 flex items-center justify-center transition-colors duration-200"
      :class="isSelected ? 'border-blue-500' : 'border-gray-300'"
    >
      <div class="w-4 h-4 rounded-full" :class="{ 'bg-blue-500': isSelected }"></div>
    </div>
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const isSelected = ref(props.modelValue === props.value);

const toggle = () => {
  if (!isSelected.value) {
    emit('update:modelValue', props.value);
  }
};

watch(() => props.modelValue, (newValue) => {
  isSelected.value = newValue === props.value;
});
</script>

<style scoped>

</style>
