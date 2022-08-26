<template>
  <main class="dashboard">
    <todo-list @click="modalAdd" name="To Do"/>
    <todo-list name="On Going"/>
    <todo-list name="Done"/>
    <modal-add v-if="isModalAdd" />
  </main>
</template>

<script>

import ModalAdd from "@/pages/Dashboard/components/ModalAdd";
export default {
  components: {ModalAdd},
  data() {
    return {
      isModalAdd: false,
    }
  },
  computed: {},
  methods: {
    modalAdd(){
      this.isModalAdd = true;
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
