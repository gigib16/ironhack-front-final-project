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
// import { storeToRefs } from "pinia";
// import {useTasksStore} from "@/store/task";

// import {useTasksStore} from "@/store/task";
// const tasksStore = useTasksStore()
// console.log(tasksStore)
// // const {data} = storeToRefs(tasksStore);
// console.log(data)

export default {
  components: {ModalDelete, ModalEdit, ModalAdd},
  data() {
    return {
      isModalAdd: false,
      isModalEdit: false,
      isModalDelete: false,
    }
  },
  computed: {},
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
