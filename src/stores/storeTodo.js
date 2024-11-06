// src/stores/tasksStore.js
import {defineStore} from 'pinia';
import {ref} from 'vue';
import {v4 as uuidv4} from 'uuid';

export const TodoStore = defineStore('tasks', () => {
  const listTodo = ref([
    {id: uuidv4(), task: 'Play Football', status: 'Todo', isCheck: false},
    {id: uuidv4(), task: 'Read a Book', status: 'Done', isCheck: true},
    {id: uuidv4(), task: 'Write an Essay', status: 'Todo', isCheck: false},
    {id: uuidv4(), task: 'Go Shopping', status: 'Reject', isCheck: false},
  ]);
  const isCheckALl = ref(false);
  const inputValue = ref("");
  const isUpdate = ref(false);
  const indexUpdate = ref(0);
  const inputSearch = ref("");
  return {
    listTodo,
    isCheckALl,
    inputValue,
    isUpdate,
    indexUpdate,
    inputSearch
  };
});
