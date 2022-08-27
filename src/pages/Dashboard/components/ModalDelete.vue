<template>
  <the-modal title="Delete task" @close="close">
    <form class="modal" autocomplete="false" @submit="submitDelete">
      <button>
        Delete this task now!
      </button>
    </form>
  </the-modal>
</template>

<script>
import TheModal from "@/components/TheModal";
import pinia from "@/store/store.js";
import {useTasksStore} from "@/store/task";
import {useUserStore} from "@/store/user";
const tasksStore = useTasksStore(pinia)
const userStore = useUserStore(pinia)


export default {
  components: {TheModal},
  props: ["title"],
  methods: {
    close(){
      this.$emit("close", false);
    },
    submitDelete(e){
      e.preventDefault();
      tasksStore.deleteTodo(tasksStore.currentId, userStore.user.id);
      this.$emit("close", false);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
