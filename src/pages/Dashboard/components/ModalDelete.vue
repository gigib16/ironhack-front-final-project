<template>
  <the-modal title="Delete task" @close="close">
    <form class="modal" autocomplete="false">
      <button>
        Delete this task now!
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
