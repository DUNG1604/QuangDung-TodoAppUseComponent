<template>
  <div>
    <div class="grid grid-cols-8 gap-[5px] items-center mt-[5px]">
      <div class="col-span-1">
        <CheckboxComponent
          :model-value="item.isCheck"
          @update:modelValue="(newCheck)=>updateCheck(item.id, newCheck)"
        ></CheckboxComponent>
      </div>
      <div class="col-span-3 line-clamp-1">{{ item.task }}</div>
      <div class="col-span-2">
        <SelectComponent
          :modelValue="item.status"
          @update:modelValue="(newStatus) => updateStatus(item.id, newStatus)"
        />
      </div>
      <div class="col-span-2 mx-auto">
        <button-component @click="handleUpdate(item.id, item.task)" content="Update" color="yellow"></button-component>
      </div>
    </div>
  </div>
</template>

<script setup>

import ButtonComponent from "@/views/components/ButtonComponent.vue";
import SelectComponent from "@/views/components/SelectComponent.vue";
import CheckboxComponent from "@/views/components/CheckboxComponent.vue";
import {TodoStore} from "@/stores/storeTodo.js";

defineProps({
  item: {
    default:{},
  }
})
const store = TodoStore();
const updateStatus = (id, newStatus) => {
  const todo = store.listTodo.find((item) => item.id === id);
  if (todo) {
    todo.status = newStatus;
  }
};

const updateCheck = (id, newCheck) => {
  const todo = store.listTodo.find((item) => item.id === id);
  if (todo) {
    todo.isCheck = newCheck;
  }
  // console.log(id)
};

const handleUpdate = (id, task) => {
  store.inputValue = task;
  store.isUpdate = true;
  store.indexUpdate = id;
}
</script>

<style lang="scss" scoped>

</style>
