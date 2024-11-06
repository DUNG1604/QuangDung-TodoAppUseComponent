<template>
  <div>
    <input
      :placeholder="placeholder"
      :style="{ width: width }"
      :class="`px-4 py-2 border rounded focus:outline-none focus:ring ${borderColor} ${textColor}`"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Typing todo',
  },
  width: {
    type: String,
    default: '100%',
  },
  color: {
    type: String,
    default: "blue",
  },
});

const emit = defineEmits(['update:modelValue']);
const updateValue = (event) => {
  // store.inputValue = event.target.value;
  emit('update:modelValue', event.target.value);
};

const borderColor = `border-${props.color}-500 focus:ring-${props.color}-300`;
const textColor = 'text-gray-700';
</script>
