<template>
  <main class="authentication">
    <div class="auth-container">
      <img src="../../assets/logo.png" alt="OrganizApplogo">
      <h1>Welcome</h1>
      <input type="text" placeholder="Enter your email" name="uname" required>
      <input type="password" placeholder="Enter your password" name="psw" required>
      <button type="submit">Sign In</button>
      <p class>Not registered yet? <a href="/signup">Create a new user</a></p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
