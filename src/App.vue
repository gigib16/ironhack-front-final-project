<template>
  <header>
    <router-view name="header"/>
  </header>
  <router-view/>
</template>

<script>
import pinia from "@/store/store.js";
import {useUserStore} from "@/store/user";
const userStore = useUserStore(pinia)

export default {
  async created() {
    await userStore.authUser()
  },
  watch: {},
};
</script>

<style lang="scss">
@import "./scss/app.scss";

//.notif-container-parent {
//  position: fixed;
//  z-index: 999;
//  bottom: 50px;
//}
</style>
