<template>
  <div class="p-[10px] w-[700px] mx-auto rounded-[10px] border border-black mt-[50px]">
    <form class="flex gap-[10px]" @submit.prevent="handleSubmit">
      <InputComponent v-model="store.inputValue" class="flex-1"></InputComponent>
      <ButtonComponent content="Add" width="100px"></ButtonComponent>
    </form>
    <div class="mt-4 flex justify-between">
      <div class="flex gap-[15px]">
        <RadioButton v-model="data.typeStatusFilter" value="All" label="All"/>
        <RadioButton v-model="data.typeStatusFilter" value="Todo" label="Todo"/>
        <RadioButton v-model="data.typeStatusFilter" value="Done" label="Done"/>
        <RadioButton v-model="data.typeStatusFilter" value="Reject" label="Reject"/>
      </div>
      <div class="flex gap-[15px]">
        <ButtonComponent data-bs-toggle="modal" data-bs-target="#exampleModal" content="Export" color="brow"></ButtonComponent>
        <ButtonComponent @click="handleDelete()" content="Delete" color="red"></ButtonComponent>
      </div>
    </div>
    <div class="mt-[10px]">
      <InputComponent @update:modelValue="(inputSearch)=>{handleSearch(inputSearch)}" v-model="store.inputSearch"
                      placeholder="Typing to search"></InputComponent>
    </div>
    <TableComponent :list-todo="filteredTodos" class="mt-[10px]"></TableComponent>
    <div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Data Export</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div v-for="item in filteredExport" :key="item.id">
                <ItemExport :item="item"></ItemExport>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import ButtonComponent from '@/views/components/ButtonComponent.vue';
import InputComponent from '@/views/components/InputComponent.vue';
import {computed, ref, watch} from "vue";
import RadioButton from "@/views/components/RadioButton.vue";
import TableComponent from "@/views/components/TableComponent.vue";
import {TodoStore} from "@/stores/storeTodo.js";
import {v4 as uuidv4} from 'uuid';
import ItemExport from "@/views/components/ItemExport.vue";

const store = TodoStore();

const data = ref({
  inputValue: "",
  typeStatusFilter: "All",
  selectedOption: "",
});

const handleSubmit = () => {
  if (!store.isUpdate) {
    const item = {
      id: uuidv4(),
      task: store.inputValue,
      status: "Todo",
      isCheck: false,
    }
    store.listTodo.push(item);
  } else {
    for (let i = 0; i < store.listTodo.length; i++) {
      if (store.listTodo[i].id === store.indexUpdate) {
        store.listTodo[i].task = store.inputValue;
        store.isUpdate = false;
        store.inputValue = "";
        return;
      }
    }
  }
  store.inputValue = "";
};
const handleDelete = () => {
  store.listTodo = store.listTodo.filter((item) => !item.isCheck);
}

const handleSearch = (inputSearch) => {
  store.inputSearch = inputSearch;
  console.log(inputSearch);
}

const filteredTodos = computed(() => {
  let filteredList = store.listTodo;

  if (data.value.typeStatusFilter !== 'All') {
    filteredList = filteredList.filter(item => item.status === data.value.typeStatusFilter);
  }

  if (store.inputSearch) {
    filteredList = filteredList.filter(item =>
      item.task.toLowerCase().includes(store.inputSearch.toLowerCase()) ||
      item.status.toLowerCase().includes(store.inputSearch.toLowerCase())
    );
  }

  return filteredList;
});

const filteredExport = computed(()=>{
  return store.listTodo.filter(item => item.status === 'Done');
})

watch(() => data.value.typeStatusFilter, (newValue) => {
  console.log(newValue);
});
</script>

<style lang="scss" scoped>
</style>
