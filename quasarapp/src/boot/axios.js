import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.withCredentials = true;

