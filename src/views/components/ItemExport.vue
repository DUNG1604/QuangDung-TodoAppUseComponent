<template>
  <div>
    <div class="grid grid-cols-8 gap-[5px] items-center mt-[5px]">
      <div class="col-span-5">ID: {{ item.id }}</div>
      <div class="col-span-3 line-clamp-1">Task: {{ item.task }}</div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  item: {
    default: {},
  }
})

</script>

<style lang="scss" scoped>

</style>
