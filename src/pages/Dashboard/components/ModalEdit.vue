<template>
  <the-modal title="Edit task" @close="close">
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
        Update
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
  data(){
    return{
      name: tasksStore.dataDetail.name,
      description: tasksStore.dataDetail.description,
    }
  },
  methods: {
    close(){
      this.$emit("close", false);
    },
    submitData(e){
      e.preventDefault();
      if(this.name.length < 3) return alert('Name minimum 3 Characters')
      tasksStore.editTodo({
        id: tasksStore.currentId,
        name: this.name,
        description: this.description,
        user_id: userStore.user.id
      })
      this.$emit("close", false);
    }
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>

</style>
