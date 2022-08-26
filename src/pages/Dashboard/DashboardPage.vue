<template>
  <main class="dashboard">
    <todo-list @edit="toggleEdit" @delete="toggleDelete" @add="toggleAdd" name="To Do"/>
    <todo-list @edit="toggleEdit" @delete="toggleDelete" name="On Going"/>
    <todo-list @edit="toggleEdit" @delete="toggleDelete" name="Done"/>
    <modal-add @close="toggleAdd" v-if="isModalAdd"/>
    <modal-edit @close="toggleEdit" v-if="isModalEdit"/>
    <modal-delete @close="toggleDelete" v-if="isModalDelete"/>
  </main>
</template>

<script>

import ModalAdd from "@/pages/Dashboard/components/ModalAdd";
import ModalEdit from "@/pages/Dashboard/components/ModalEdit";
import ModalDelete from "@/pages/Dashboard/components/ModalDelete";
import pinia from "@/store/store.js";
import {useTasksStore} from "@/store/task";
const tasksStore = useTasksStore(pinia)
console.log(tasksStore)
export default {
  components: {ModalDelete, ModalEdit, ModalAdd},
  data() {
    return {
      isModalAdd: false,
      isModalEdit: false,
      isModalDelete: false,
    }
  },
  computed: {
    dataToDo(){
      return tasksStore.todoTodos;
    },
  },
  methods: {
    toggleAdd(v) {
      this.isModalAdd = v;
    },
    toggleEdit(v) {
      this.isModalEdit = v;
    },
    toggleDelete(v) {
      this.isModalDelete = v;
    }
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
main.dashboard {
  display: flex;
  align-items: flex-start;
  padding: 80px 20px 20px;
}
</style>
