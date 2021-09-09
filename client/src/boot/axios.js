import Vue from 'vue'
import axios from 'axios'

// Vue.prototype.$axios = axios

const instance = axios.create({
  withCredentials: true,
  crossDomain: true
})

Vue.prototype.$axios = instance
