<template>
  <the-modal title="Create a new task" @close="close">
    <form class="modal" autocomplete="false" @submit="submitData">
      <div class="form-input">
        <label>Title</label>
        <input v-model="name" type="text" placeholder="Title">
      </div>
      <div class="form-input">
        <label>Description</label>
        <input v-model="description" type="text" placeholder="Description">
      </div>
      <button>
        Save
      </button>
    </form>
  </the-modal>
</template>

<script>
import TheModal from "@/components/TheModal";
import pinia from "@/store/store.js";
import {useTasksStore} from "@/store/task";
const tasksStore = useTasksStore(pinia)

export default {
  components: {TheModal},
  props: ["title"],
  data(){
    return{
      name: '',
      description: '',
    }
  },
  methods: {
    close(){
      this.$emit("close", false);
    },
    submitData(e){
      e.preventDefault();
      if(this.name.length < 3) return alert('Name minimum 3 Characters')
      tasksStore.addTodo({
        name: this.name,
        description: this.description
      })
      this.$emit("close", false);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
