<template>
  <header>
    <nav class="header">
      <router-link class="logo" to="/"
      ><img
          alt="LOGO"
          src="../assets/logo.png"

          
      /></router-link>
      <div class="contactConatiner">
        <a @click="logout()" class="btn">Log out</a>
      </div>
    </nav>
  </header>
  <br><br><br>
</template>

<script>
import pinia from "@/store/store.js";
import {useUserStore} from "@/store/user";
const userStore = useUserStore(pinia)

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    async logout() {
      // await this.$store.commit('setUser', null);
      // await this.$store.commit('isAuthenticad', false);
      const response = await userStore.signOut()
      if(response){
        this.$router.push('/')
      }
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 99;
  background-image: linear-gradient(to bottom right, #b996ff, #4657b9);
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-shadow: 0 0 2px rgb(255, 255, 255);
  nav {
    padding: 0 50px;
    &.header {
      height: 75px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      > a.logo {
        height: 100%;
        display: flex;
        align-items: center;

        > img {
          width: 200px;
        }
      }
      div.contactConatiner {
        display: flex;
        a {
          text-decoration: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
        }
      }
    }
  }
}
</style>
