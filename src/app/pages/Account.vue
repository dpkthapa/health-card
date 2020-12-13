<template>
  <div class="site-wrapper">
    <div class="a-main a-account">
      <div class="container">
        <div class="a-main__wrap a-account__wrap">
          <div class="a-main__back">
            <router-link :to="{ path: '/add-card' }">
              <svg
                class="back"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240.823 240.823"
              >
                <path
                  d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"
                />
              </svg>
            </router-link>
          </div>
          <div class="a-main__details">
            <legend><h2 class="account-setting">Account Settings</h2></legend>
            <br />
            <div class="a-main__detail-list">
              <div class="ac-detail d-flex justify-content-between">
                <div class="ac-detail__label align-self-center">Email</div>
                <div class="ac-detail__data align-self-center">
                  Jagjeet@gmail.com
                </div>
              </div>
              <div class="ac-detail d-flex justify-content-between">
                <div class="ac-detail__label align-self-center">First Name</div>
                <div class="ac-detail__data align-self-center">
                 Cornelia
                </div>
              </div>
              <div class="ac-detail d-flex justify-content-between">
                <div class="ac-detail__label align-self-center">Last name</div>
                <div class="ac-detail__data align-self-center">Stevenson</div>
              </div>
              <div class="ac-detail d-flex justify-content-between">
                <div class="ac-detail__label align-self-center">Password</div>
                <div class="ac-detail__data align-self-center">********</div>
              </div>
              <div class="ac-detail d-flex justify-content-between">
                <div class="ac-detail__label align-self-center">
                  Health Card Connected
                </div>
                <div class="ac-detail__data align-self-center">4</div>
              </div>
              <div class="ac-detail d-flex justify-content-between">
                <div class="ac-detail__label align-self-center">Pharmacy</div>
                <div class="ac-detail__data align-self-center">
                  Lowe's Werribee
                </div>
              </div>
              <div class="ac-detail mtb__60 d-flex justify-content-between">
                <div
                  class="ac-detail__label align-self-center ac-detail__label--color"
                >
                  Connect Garmin
                </div>
                <div class="ac-detail__data align-self-center">
                  <svg
                    class="a-tick"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.83158L5.16842 9L12.4526 1"
                      stroke="#10C1BC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="btn btn-green">
              <a @click="logout" class="btn-link">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
export default {
  methods: {
     ...mapActions(["setIsAuthenticated"]),
    logout() {
      swal({
        title: "Are you sure to logout?",
        text: `Please click Logout to proceed!`,
        showCancelButton: true,
        confirmButtonClass: "btn btn-success btn-fill",
        cancelButtonClass: "btn btn-danger btn-fill",
        confirmButtonText: "Logout!",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          this.$auth.logout({}).then(() => {
           this.setIsAuthenticated({auth:false})
            this.$router.go("/");
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.a-main__back {
  text-align: left;
}
.account-setting {
  text-align: left;
}
</style>