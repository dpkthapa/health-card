import Vue from "vue";
import App from "./App.vue";
import router from "./app/routes/routes";
import store from "./app/store";
import axios from "axios";


//Vue.use(Vuelidate)
Vue.config.productionTip = false;
import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";
Vue.use(Toaster, { timeout: 5000 });
axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("Logout");
      return router.push("/Login");
    }
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
