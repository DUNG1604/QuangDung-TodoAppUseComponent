<template>
  <div>
    <div class="grid grid-cols-8 mt-[5px] font-[600] border-b-gray-300 border-b-[2px] pb-[10px]">
      <div class="col-span-1">
        <CheckboxComponent
          :model-value="store.isCheckALl"
          @update:modelValue="(newCheckAll)=>updateCheckALl(newCheckAll)"
        >
        </CheckboxComponent>
      </div>
      <div class="col-span-3">Task</div>
      <div class="col-span-2 text-center">Status</div>
      <div class="col-span-2 text-center">Action</div>
    </div>
    <div v-for="item in listTodo" :key="item.id">
      <ItemTodo :item="item"></ItemTodo>
    </div>
  </div>
</template>

<script setup>
import CheckboxComponent from "@/views/components/CheckboxComponent.vue";
import {TodoStore} from "@/stores/storeTodo.js";
import ItemTodo from "@/views/components/ItemTodo.vue";

const store = TodoStore();

defineProps({
  listTodo: {
    required: true,
    default: []
  },
})

const updateCheckALl = (newCheckAll) => {
  store.isCheckALl = newCheckAll;
  for (let i = 0; i < store.listTodo.length; i++) {
    store.listTodo[i].isCheck = newCheckAll;
  }
};
</script>
