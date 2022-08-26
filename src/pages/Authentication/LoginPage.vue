<template>
  <main class="authentication">
    <div class="auth-container">
      <img src="../../assets/logo.png" alt="OrganizApplogo">
      <h1>Welcome</h1>
      <form autocomplete="off" @submit="submitData">
        <input v-model="email" type="email" placeholder="Enter your email" required>
        <input v-model="password" type="password" placeholder="Enter your password" required>
        <button type="submit">Sign In</button>
      </form>
      <p class>Not registered yet? <a href="/signup">Create a new user</a></p>
    </div>
  </main>
</template>

<script>
import pinia from "@/store/store.js";
import {useUserStore} from "@/store/user";
const userStore = useUserStore(pinia)
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {},
  methods: {
    submitData(e){
      e.preventDefault();
      userStore.signIn({email: this.email, password: this.password})
    }
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
</style>
