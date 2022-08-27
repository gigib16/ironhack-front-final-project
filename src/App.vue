<template>
  <header>
    <router-view name="header"/>
  </header>
  <router-view/>
  <BaseLoading v-if="isLoading"/>
</template>

<script>
import pinia from "@/store/store.js";
import {useUserStore} from "@/store/user";
const userStore = useUserStore(pinia)

export default {
  // components: {BaseLoading},
  data() {
    return {};
  },
  methods: {

    // NOTIF
    // onClickNotif(value) {
    //   const index = this.datas.filter((x) => {
    //     return x.id !== value;
    //   });
    //   this.datas = index;
    // },
  },
  computed: {
    // notif() {
    // return this.$store.getters.notif;
    // },
    // isLoading() {
    // return this.$store.getters['isLoading'];
    // },
  },
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
