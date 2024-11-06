<template>
  <div
    class="flex items-center cursor-pointer"
    @click="toggle"
    :class="{ 'text-blue-500': modelValue, 'text-gray-700': !modelValue }"
  >
    <div
      class="w-6 h-6 border-2 rounded-sm mr-2 flex items-center justify-center transition-colors duration-200"
      :class="modelValue ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'"
    >
      <span v-if="modelValue" class="text-white text-lg font-bold">X</span>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps, watch, defineEmits} from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const checkTick = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const toggle = () => {
  checkTick.value = !checkTick.value;
  emit('update:modelValue', checkTick.value);
};

watch(() => props.modelValue, (newValue) => {
  checkTick.value = newValue;
});
</script>

<style scoped>

</style>
