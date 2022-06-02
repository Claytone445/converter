import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'
import vuetify from './plugins/vuetify'

Vue.prototype.axios = axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
