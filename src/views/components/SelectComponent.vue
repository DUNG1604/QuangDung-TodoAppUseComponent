<template>
  <div class="relative">
    <div
      @click="toggleDropdown"
      class="cursor-pointer border border-gray-300 rounded-md p-2 flex justify-between items-center"
    >
      <span>{{ selectedOption || 'Select' }}</span>
      <svg
        class="w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :class="isDropdownOpen ? 'transform rotate-180' : ''"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div
      v-if="isDropdownOpen"
      class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
    >
      <div
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        class="cursor-pointer hover:bg-gray-100 p-2"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineEmits, watch} from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const options = ['Todo', 'Done', 'Reject'];
const selectedOption = ref(props.modelValue);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  emit('update:modelValue', option);
  isDropdownOpen.value = false;
};

watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue;
});
</script>

<style scoped>

</style>
