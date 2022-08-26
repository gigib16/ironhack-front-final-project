<template>
  <the-modal title="Edit task" @close="close">
    <form class="modal" autocomplete="false">
      <div class="form-input">
        <label>Title</label>
        <input type="text" placeholder="Title">
      </div>
      <div class="form-input">
        <label>Description</label>
        <input type="text" placeholder="Description">
      </div>
      <button>
        Update
      </button>
    </form>
  </the-modal>
</template>

<script>
import TheModal from "@/components/TheModal";
export default {
  components: {TheModal},
  props: ["title"],
  methods: {
    close(){
      this.$emit("close", false);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
