<template>
  <div class="modal">
    <div class="modal-container">
      <div class="header">
        <h1>{{ title }}</h1>
        <a @click="close" class="close"><img src="../assets/icon-times.svg" /></a>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: ["title"],
  methods: {
   close(){
     this.$emit('close');
   }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
  }

  > div.modal-container {
    z-index: 9999;
    background-color:#ffffff;
    border-radius: 5px;
    min-width: 500px;
    overflow: hidden;
    >div.header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      >h1 {
        color: #000000;
      }
      >a{
        cursor: pointer;
        img{
          width: 20px;
        }
      }
    }
    >div.body{
      min-height: 100px;
      padding: 0 20px 20px;
    }
  }
}
</style>
