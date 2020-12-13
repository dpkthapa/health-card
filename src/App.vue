<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    if (this.$auth.isAuthenticated()) {
      this.setIsAuthenticated({ auth: true, token: this.$auth.getToken() });
    } else {
      this.setIsAuthenticated({ auth: false });
    }
  },
  methods: {
    ...mapActions(["setIsAuthenticated"]),
  },
};
</script>

<style>
.eye-open {
  margin-left: 380px;
  margin-top: -90px;
}
.swal2-confirm.btn-success, .btn-danger {
    border-radius: 4px;
    margin-right: 8px;
}
.form-control {
  border: 1px solid #dddddd;
  height: calc(1.4em + 1.5rem + 0px);
}
.VuePassword__Input {
    border: 1px solid #dddddd;
    height: calc(1.4em + 1.5rem + 0px);
    border-radius: .25rem !important;
}
.form-control:focus, .VuePassword__Input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #16ad2f;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,148,220,.25);
    box-shadow: 0 0 0 0.2rem rgba(0,148,220,.25);
}

</style>
