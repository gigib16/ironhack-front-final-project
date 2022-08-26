<template>
  <the-modal title="Create a new task">
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
        Save
      </button>
    </form>
  </the-modal>
</template>

<script>
import TheModal from "@/components/TheModal";
export default {
  components: {TheModal},
  props: ["title"]
};
</script>

<style lang="scss" scoped>

</style>
