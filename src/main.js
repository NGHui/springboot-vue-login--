import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

//Vue.use(VueAxios, axios)
Vue.prototype.$http=axios
axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
