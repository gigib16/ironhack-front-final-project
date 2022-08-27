<template>
  <main class="authentication">
    <div class="auth-container">
      <img src="../../assets/logo.png" alt="OrganizApplogo">
      <h1>Sign Up</h1>
      <form autocomplete="off" @submit="submitForm">
        <input v-model="email" type="email" placeholder="Enter your email" required>
        <input v-model="password" type="password" placeholder="Enter new password" required>
        <input v-model="password2" type="password" placeholder="Repear password" required>
        <button type="submit">Create new user</button>
      </form>
      <p class>Already registered? <a href="/">Login here</a></p>
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
      email: "",
      password: "",
      password2: "",
    };
  },
  computed: {},
  methods: {
    async submitForm(e) {
      e.preventDefault();
      if (this.password.length < 8) {
        alert("Password min. 8 characters");
        return;
      }

      if (this.password !== this.password2) {
        alert("No same password!");
        return;
      }

      const payload = {
        email: this.email,
        password: this.password,
      };

      const response = await userStore.signUp(payload);
      if(response){
        this.$router.push('/')
      }
    },
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>

</style>
