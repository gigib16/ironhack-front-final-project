<template>
  <div class="todo-list">
    <div class="header">
      <h2>{{ name }}</h2>
      <a @click="clickAdd" v-if="name==='To Do'" class="edit">Add new Task</a>
    </div>
    <div class="body">
      <todo-card/>
      <todo-card/>
      <todo-card/>
      <todo-card/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {};
  },
  methods: {
    clickAdd(){
      this.$emit('click')
    }
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  border: 1px solid #FFFFFF;
  width: calc(33.33% - 50px);
  margin: 0 25px;
  border-radius: 5px;
  overflow: hidden;

  > .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    background-color: #FFFFFF;
    position: relative;
    >a{
      background-image: linear-gradient(to bottom right, #b996ff, #4657b9);
      background-repeat: no-repeat;
      background-attachment: fixed;
      position: absolute;
      right: 20px;
      color: #FFFFFF;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    > h1 {
      margin: 0;
    }
  }

  > .body {
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px 0;
  }
}
</style>
