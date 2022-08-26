<template>
  <main class="dashboard">
    <todo-list :data="dataToDo" @edit="toggleEdit" @delete="toggleDelete" @add="toggleAdd" name="To Do"/>
    <todo-list :data="dataOngoing" @edit="toggleEdit" @delete="toggleDelete" name="On Going"/>
    <todo-list :data="dataDone" @edit="toggleEdit" @delete="toggleDelete" name="Done"/>
    <modal-add @close="toggleAdd" v-if="isModalAdd"/>
    <modal-edit @close="toggleEdit" :currentId="currentId" v-if="isModalEdit"/>
    <modal-delete @close="toggleDelete" :currentId="currentId" v-if="isModalDelete"/>
  </main>
</template>

<script>

import ModalAdd from "@/pages/Dashboard/components/ModalAdd";
import ModalEdit from "@/pages/Dashboard/components/ModalEdit";
import ModalDelete from "@/pages/Dashboard/components/ModalDelete";
import pinia from "@/store/store.js";
import {useTasksStore} from "@/store/task";

const tasksStore = useTasksStore(pinia)

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
    dataToDo() {
      return tasksStore.todoTodos;
    },
    dataOngoing() {
      return tasksStore.ongoingTodos;
    },
    dataDone() {
      return tasksStore.doneTodos;
    },
  },
  methods: {
    toggleAdd(v) {
      this.isModalAdd = v;
    },
    toggleEdit(x) {
      this.isModalEdit = x;
    },
    toggleDelete(x) {
      this.isModalDelete = x;
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
