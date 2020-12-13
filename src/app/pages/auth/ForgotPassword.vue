<template>
  <div class="site-wrapper">
    <vue-topprogress
      ref="topProgress"
      :trickleSpeed="250"
      color="#00c1c5"
      show="processing"
    ></vue-topprogress>
    <div class="a-main a-account">
      <div class="container">
        <div class="col-md-12 forgot-form">
          <Error :errors="errors"/>
           <div v-if="message" v-bind:class="error? 'alert alert-danger mt-4' : 'alert alert-success mt-4'">{{ message }}</div>
          <div>
            <p>
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </p>
          </div>

          <form method="POST" class="my-5" @submit.prevent="resetLink">
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
            <button :disabled="processing" type="submit" class="btn btn-green">
              EMAIL PASSWORD RESET LINK
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Error from "@/components/Error.vue";
import { mapActions } from "vuex";
import { vueTopprogress } from "vue-top-progress";
export default {
  components: { vueTopprogress, Error },
  data() {
    return {
      form: {
        email: "",
      },
      processing: false,
      message: "",
      error: false,
      errors: []
    };
  },

  methods: {
    ...mapActions("user", ["performPasswordReset"]),
    resetLink() {
     if(this.checkForm()){
      this.processing = true
      this.$refs.topProgress.start()
      this.performPasswordReset(this.form).then((res) => {
        if (res.error) {
          this.error = true
          this.$toaster.error(res.message);
          this.$refs.topProgress.fail()
        } else {
          this.error = false
          this.$refs.topProgress.done()
           this.$toaster.success(res.message);
        }
        this.processing = false
        this.message = res.message
      })
      .catch((err) => {
         this.$toaster.error(err);
      })  
     } 
    },
    checkForm() {
      if (this.form.email) {
        return true;
      }

      this.errors = [];
      if (!this.form.email) {
        this.errors.push("Email required.");
      }
    }
  }
};
</script>

<style scoped>
.forgot-text {
  text-align: center;
  margin-top: 60px;
  font-size: 30px;
  /* color: rgb(4 188 197); */
}
.forgot-form {
  margin-top: 110px;
}
.form-control {
  border: 2px solid #dddddd;
  height: calc(1.4em + 1.5rem + 25px);
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
.alert {
  border: 2px solid transparent;
}
.success {
  color: blue;
  margin-bottom: 10px;
  text-align: center;
}
.error {
  color: red;
  margin-bottom: 10px;
  text-align: center;
}
</style>
