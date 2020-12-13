<template>
  <div class="site-wrapper">
    <vue-topprogress
      ref="topProgress"
      :trickleSpeed="150"
      color="#00c1c5"
      show="loading"
    ></vue-topprogress>
    <div class="a-main a-account">
      <div class="container">
        <div class="register-text">Register</div>
        <div class="col-md-12 register-form">
          <Error :errors="errors" />
          <div
            v-if="Object.keys(serverErrors).length > 0"
            class="alert alert-danger mt-4"
          >
            {{ serverErrors[Object.keys(serverErrors)[0]] }}
          </div>
          <form method="POST" class="my-5" @submit.prevent="register">
            <div class="form-group">
              <label for="name">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first_name"
                placeholder="First Name"
                v-model="form.first_name"
              />
            </div>
            <div class="form-group">
              <label for="name">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last_name"
                placeholder="Last Name"
                v-model="form.last_name"
              />
            </div>
            <div class="form-group">
              <label for="user_name">User Name</label>
              <input
                type="text"
                class="form-control"
                id="user_name"
                placeholder="User Name"
                v-model="form.user_name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
                <VuePassword
                v-model="form.password"
                 placeholder="Password"
                id="password"
                type="password"
                :disableStrength= true
              />
            </div>
            <div class="form-group">
              <label for="password_confirmation">Confirm Password</label>
              <VuePassword
                v-model="form.password_confirmation"
                 placeholder="Confirm password"
                id="password_confirmation"
                type="password"
                :disableStrength= true
              />
            </div>
            <button type="submit" class="btn btn-green">Register</button>
            <div class="login">
              <router-link class="already-register" :to="{ path: 'login' }">
                <u>Already registered?</u></router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VuePassword from 'vue-password';
import Error from "@/components/Error.vue";
import { vueTopprogress } from "vue-top-progress";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    vueTopprogress,
    Error,
    VuePassword
  },
  props: ["message"],
  data() {
    return {
      errors: [],
      serverErrors: [],
      type: "password",
      form: {
        first_name: null,
        last_name: null,
        user_name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },

  methods: {
    ...mapActions("user", ["performUserRegistration"]),
    ...mapActions(["setLoading"]),
    ...mapState(["loading"]),

    register() {
      if (this.checkForm()) {
        this.setLoading(true);
        this.$refs.topProgress.start();
        this.performUserRegistration(this.form)
          .then((res) => {
            if(!res.error){
            this.setLoading(false);
            this.$refs.topProgress.done();
            this.$router.push("/login");
            }else{
            this.errors = []
            this.serverErrors = []
            this.serverErrors = res.message
            this.loading = false;
            this.$refs.topProgress.fail();
            }
          })
          .catch((err) => {
            console.log(err)      
          });
      }
    },
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    checkForm() {
      if (
        this.form.first_name &&
        this.form.last_name &&
        this.form.email &&
        this.form.user_name &&
        this.form.password &&
        this.form.password_confirmation &&
        this.form.password == this.form.password_confirmation
      ) {
        return true;
      }

      this.errors = [];
      if (!this.form.first_name) {
        this.errors.push("First name required.");
      }
      if (!this.form.last_name) {
        this.errors.push("Last name required.");
      }
      if (!this.form.email) {
        this.errors.push("Email required.");
      }
      if (!this.form.user_name) {
        this.errors.push("Username required.");
      }
      if (!this.form.password) {
        this.errors.push("Password required.");
      }
      if (!this.form.password_confirmation) {
        this.errors.push("Password confirmation required.");
      }
      if (
        this.form.password &&
        this.form.password_confirmation &&
        this.form.password != this.form.password_confirmation
      ) {
        this.errors.push("Password and password confirmation doesnot match.");
      }
    },
  },
};
</script>

<style scoped>
.register-text {
  text-align: center;
  margin-top: 15px;
  font-size: 22px;
  /* color: rgb(4 188 197); */
}
.register-form {
  margin-top: 5px;
}

.btn-green {
  width: 100%;
  margin-top: 35px;
}
.register {
  margin-left: 154px;
}

.login {
  text-align: center;
}
.alert {
  border: 2px solid transparent;
}

</style>
