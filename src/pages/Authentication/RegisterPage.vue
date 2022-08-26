<template>
  <main class="authentication">
    <div class="auth-container">
      <img src="../../assets/logo.png" alt="OrganizApplogo">
      <h1>Sign Up</h1>
      <input type="text" placeholder="Enter your email" name="uname" required>
      <input type="password" placeholder="Enter new password" name="psw" required>
      <input type="password" placeholder="Repear password" name="psw" required>
      <button type="submit">Create new user</button>
      <p class>Already registered? <a href="#">Login here</a></p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // name: "",
      // phone: "",
      // email: "",
      // password: "",
      // password_confirmation: "",
      name: "Yehuda Dani Utomo",
      phone: "08155176008",
      email: "yehuda@ecofit.id",
      password: "test1234",
      password_confirmation: "test1234",

      formStatus: false,
      notifStatus: "info",
      notifMessage: null,
    };
  },
  computed: {},
  methods: {
    nameData(value) {
      this.name = value.trim();
    },
    phoneData(value) {
      this.phone = value.trim();
    },
    emailData(value) {
      this.email = value.trim();
    },
    passwordData(value) {
      this.password = value;
    },
    passwordConfirmationData(value) {
      this.password_confirmation = value;
    },
    async submitForm() {
      this.isLoading = true;
      const notif = {
        class: "danger",
        message: "Semua input field wajib diisi",
      };
      if (
          this.name.length === 0 ||
          this.phone.length === 0 ||
          this.email.length === 0 ||
          this.password.length === 0 ||
          this.password_confirmation.length === 0
      ) {
        this.$store.dispatch("addNotif", notif);
        return;
      }
      if (this.password.length < 8) {
        notif.message = "Password anda kurang dari 8 karakter!";
        this.$store.dispatch("addNotif", notif);
        return;
      }

      if (this.password !== this.password_confirmation) {
        notif.message = "Password anda tidak sama!";
        this.$store.dispatch("addNotif", notif);
        return;
      }

      const actionPayload = {
        fullname: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };

      const response = await this.$store.dispatch('signup', actionPayload);
      if (response === 201) {
        await this.$router.push('/verification');
        return;
      }
      this.isLoading = false;
    },
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>

</style>
