import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import axios from "axios";
import axiosclient from "../../utils/axiosclient";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const ENDPOINT_USER_AUTHENTICATE = "/oauth/token";
const ENDPOINT_USER_INFO = "/me";
const ENDPOINT_USER = "/users";
const ENDPOINT_USER_VERIFY = "/user/verify";
const ENDPOINT_USER_FORGET = "/user/forget";
const ENDPOINT_USER_CHANGE_PASS = "/users/change-password";

const state = {
  profile: null,
  registrationData: null,
  forgetData: null,
};

const getters = {};

const mutations = {
  setProfile: (state, payload) => {
    state.profile = payload;
  },

  setRegistrationData: (state, payload) => {
    state.registrationData = payload;
  },

  setForgetData: (state, payload) => {
    state.forgetData = payload;
  },
  setAccessToken: (state, payload) => {
    localStorage.setItem('access_token', payload )
  }
};

const actions = {
  performLoginPassword({ commit }, payload) {
    //console.log(username, password)
    const clientId = process.env.VUE_APP_CLIENT_ID;
    const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
    return axiosclient
      .post(ENDPOINT_USER_AUTHENTICATE, {
        username: payload.username,
        password: payload.password,
        grant_type: "password",
        client_id: clientId,
        client_secret: clientSecret,
      })
      .then((res) => {
        const session = res.data;
         commit("setAccessToken", session.access_token);
        return Promise.resolve(res.data);
      })
      .catch(() => {
        return Promise.reject("Authentication Error");
      });
  },

  performUserRegistration({ commit }, payload) {
    return axiosclient
      .post(ENDPOINT_USER, {
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
        first_name: payload.first_name,
        last_name: payload.last_name,
        user_name: payload.user_name
      })
      .then((res) => {
        commit("setForgetData", res.data);
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },

  fetchAllUsers(payload) {
    return axiosclient
      .get(ENDPOINT_USER, payload)
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },

  performUserVerification(payload) {
    return axiosclient
      .post(ENDPOINT_USER_VERIFY, payload)
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },

  async performPasswordReset({ commit }, payload) {
    try {
      const res = await axiosclient.post(ENDPOINT_USER_FORGET, payload);
      commit("setForgetData", res.data);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
    
  },

  async completePasswordReset(payload) {
    try {
      const res = await axiosclient.post(ENDPOINT_USER_CHANGE_PASS, payload);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async savePreference(payload) {
    try {
      const res = await axiosclient.post("/user-preference", payload);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  },


  updateProfileInfo(payload) {
    return axiosclient
      .put(ENDPOINT_USER_INFO, payload)
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
