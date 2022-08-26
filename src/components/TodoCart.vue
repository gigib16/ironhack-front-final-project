<template>
  <div class="todo-card">
    <div class="menu">
      <a class="edit"><img src="../assets/icon-edit.svg"/></a>
      <a class="delete"><img src="../assets/icon-delete.svg"/></a>
    </div>
    <h2>Task 1</h2>
    <p>Description for Task 1</p>
    <div class="status">
      <label>Status</label>
      <select>
        <option>To Do</option>
        <option>On going</option>
        <option>Done</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
