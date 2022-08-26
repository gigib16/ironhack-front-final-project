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
</template>

<script>
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
      await this.$auth0.logout({returnTo: window.location.origin});
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/TheHeader.scss";
</style>
