import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import urlUtil from './common/urlUtil.js'


Vue.config.productionTip = false
Vue.prototype.$axios=axios

Vue.prototype.$urlUtil=urlUtil

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
