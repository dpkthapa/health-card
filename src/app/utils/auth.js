import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axiosclient from './axiosclient';


Vue.use(VueAxios, axiosclient)
Vue.use(VueAuthenticate, {
  baseUrl: process.env.VUE_APP_BASE_URL ,
  tokenName: 'access_token',
  storageType: 'cookieStorage',
  loginUrl:'/oauth/token',
  providers: {
    github: {
      scope:['user:email'],
      clientId: 'c1e41bacb90a8ade1719',
      redirectUri: 'http://localhost:8080/#/', // Your client app URL
      url: '/github/exchange'
    },
    linkedin: {
      clientId: process.env.VUE_APP_CLIENT_ID_LINKEDIN,
      redirectUri: process.env.VUE_APP_CLIENT_REDIRECT_LINKEDIN, // Your client app URL
      url: '/linkedin/exchange',
      scope:['r_emailaddress%20r_liteprofile'],
      requiredUrlParams:['scope']
    },
    facebook: {
      clientId: process.env.VUE_APP_CLIENT_ID_FACEBOOK,
      redirectUri: process.env.VUE_APP_CLIENT_REDIRECT_FACEBOOK, // Your client app URL
      url: '/facebook/exchange',
      // scope:['r_emailaddress%20r_liteprofile'],
      // requiredUrlParams:['scope']
    },
    google: {
      clientId: process.env.VUE_APP_CLIENT_ID_GOOGLE,
      redirectUri:process.env.VUE_APP_CLIENT_REDIRECT_GOOGLE,
      url: '/google/exchange',
      // scope:['r_emailaddress%20r_liteprofile'],
      // requiredUrlParams:['scope']
    },
    live: {
      clientId: process.env.VUE_APP_CLIENT_ID_LIVE,
      redirectUri: process.env.VUE_APP_CLIENT_REDIRECT_LIVE, // Your client app URL
      url: '/live/exchange',
      // scope:['r_emailaddress%20r_liteprofile'],
      // requiredUrlParams:['scope']
    }
  }, 
  bindRequestInterceptor: function () {
    this.$http.interceptors.request.use((config) => {
      if (this.isAuthenticated()) {
        config.headers['Authorization'] = [
          this.options.tokenType, this.getToken()
        ].join(' ')
      } else {
        delete config.headers['Authorization']
      }
      return config
    })
  },

  bindResponseInterceptor: function () {
    this.$http.interceptors.response.use((response) => {
      this.setToken(response)
      return response
    })
  }
})
  