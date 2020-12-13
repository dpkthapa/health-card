import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import "@/app/utils/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    loading: false,
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setIsAuthenticated: (state, payload) => {
      state.isAuthenticated = payload.auth
      if (payload.auth) {
        localStorage.setItem('access_token',payload.token)  
      } else {
        localStorage.removeItem('access_token')
      }   
    }
  },

  actions: {
    setIsAuthenticated({ commit }, payload) {
      commit("setIsAuthenticated", payload);
    },
    performLogout({ commit }, payload) {
      commit("setIsAuthenticated", payload);
    },
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    }
  },
  modules: {
    user,
  },
});

export default store;
