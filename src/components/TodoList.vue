<template>
  <div class="todo-list">
    <div class="header">
      <h2>{{ name }}</h2>
      <a @click="clickAdd" v-if="name==='To Do'" class="edit">Add new Task</a>
    </div>
    <div class="body">
      <todo-card v-for="d in data" :id="d.id" :key="d.id" :name="d.name" :description="d.description" :status="d.status" @click-edit="clickEdit" @click-delete="clickDelete"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "data"],
  data() {
    return {};
  },
  methods: {
    clickAdd(){
      this.$emit('add', true)
    },
    clickEdit(x){
      this.$emit('edit', x)
    },
    clickDelete(x){
      this.$emit('delete', x)
    },
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
      &:hover {
        background-image:linear-gradient(to bottom right, #4657b9, #4657b9);
        font-weight:500;
      }
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
