import axios from 'axios'


const axiosclient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 60000
})

// axiosclient.interceptors.request.use(async (config) => {
//   const token =  localStorage.getItem("id_token")
//   let urls = config.url.split("/")
//   const endpoint = urls[urls.length-1]

//   if ( token != null && endpoint != 'token') {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// }, function(err) {
//   return Promise.reject(err);
// });

export default axiosclient