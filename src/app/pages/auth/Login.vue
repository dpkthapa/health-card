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
        <div class="login-text">Sign in</div>
        <div class="col-md-12 login-form">
          <Error :errors="errors" />
          <form method="POST" class="my-5" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Username</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Username"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <VuePassword
               placeholder="Password"
                v-model="password"
                id="password"
                type="password"
                :disableStrength= true
              />
            </div>
            <button :disabled="loading" type="submit" class="btn btn-green">
              Login
            </button>
          </form>
          <div>
            <div class="or">Or</div>
            <router-link class="forgot" :to="{ path: 'password-reset' }">
              <u>Forgot password ?</u> |
            </router-link>

            <router-link class="register" :to="{ path: 'register' }">
              <u>Register</u></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VuePassword from 'vue-password';
import { mapActions } from "vuex";
import Error from "@/components/Error.vue";
import { vueTopprogress } from "vue-top-progress";
export default {
  components: {
    vueTopprogress,
    Error,
     VuePassword,
  },
  props: [],
  data() {
    return {
      type: "password",
      email: null,
      password: null,
      errors: [],
      loading: false,
    };
  },

  methods: {
    ...mapActions(["setIsAuthenticated"]),
    login() {
      if (this.checkForm()) {
        const clientId = process.env.VUE_APP_CLIENT_ID;
        const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
        this.loading = true;
        this.$refs.topProgress.start();
        // this.$auth.logout({}).then(() => {
        this.$auth
          .login({
            username: this.email,
            password: this.password,
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "password",
          })
          .then((res) => {
            this.setIsAuthenticated({
              auth: true,
              token: res.data.access_token,
            });
            this.loading = false;
            this.$refs.topProgress.done();
            this.$router.push({ name: "App" });
          })
          .catch(() => {
            this.$toaster.error("Invalid Credentials.");
            this.errors = [];
            this.errors.push("Invalid Credentials.");
            this.loading = false;
            this.$refs.topProgress.fail();
          });
        // });
      }
    },
    onPasswordChange(e) {
      this.strength =  e.target.value.length
    },
    checkForm() {
      if (this.email) {
        return true;
      }
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.password) {
        this.errors.push("Password required.");
      }
    },
  },
};
</script>

<style scoped>
.login-text {
  text-align: center;
  margin-top: 60px;
  font-size: 30px;
  /* color: rgb(4 188 197); */
}
.login-form {
  margin-top: 110px;
}
.btn-green {
  width: 100%;
}
.or {
  text-align: center;
  margin-top: -31px;
  margin-bottom: 10px;
  color: darkred;
}
.register {
  margin-top: -30px;
}
.forgot {
  margin-left: 79px;
}
.alert {
  border: 2px solid transparent;
}
</style>
