<template>
  <div class="todo-card">
    <div class="menu">
      <a @click="clickEdit" class="edit"><img src="../assets/icon-edit.svg"/></a>
      <a @click="clickDelete" class="delete"><img src="../assets/icon-delete.svg"/></a>
    </div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <div class="status">
      <label>Status</label>
      <select @change="updateStatus">
        <option :selected="status === 'todo'" value="todo">To Do</option>
        <option :selected="status === 'ongoing'" value="ongoing">On going</option>
        <option :selected="status === 'done'" value="done">Done</option>
      </select>
    </div>
  </div>
</template>

<script>
import pinia from "@/store/store.js";
import {useTasksStore} from "@/store/task";
import {useUserStore} from "@/store/user";
const tasksStore = useTasksStore(pinia)
const userStore = useUserStore(pinia)

export default {
  props: ["id", "name", "description", "status"],
  data() {
    return {};
  },
  methods: {
    clickEdit(){
      tasksStore.updateCurrentId(this.id);
      this.$emit('clickEdit', true)
    },
    clickDelete(){
      tasksStore.updateCurrentId(this.id);
      this.$emit('clickDelete', true)
    },
    updateStatus(e){
      console.log(e.target.value);
      tasksStore.updateStatus({
        id: this.id,
        status: e.target.value,
        user_id: userStore.user.id
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.todo-card {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100px;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
  .menu{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    position: absolute;
    right: 0;
    top: 10px;
    >a{
      margin: 5px;
      cursor: pointer;
      transition: 200ms;
      img{
        width: 20px;
      }
      &:hover{
        img{
          width: 22px;
        }
      }
    }
  }
  > h2 {
    margin: 0 0 10px;
    font-size: 22.5px;
  }

  > p {
    color: #000000;
    font-weight: normal;
    font-size: 17.5px;
    margin: 0;
  }

  > .status {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;

    > label {
      font-weight: bolder;
      margin-bottom: 10px;
    }

    > select {
      width: 100%;
      height: 40px;
    }
  }
}
</style>
