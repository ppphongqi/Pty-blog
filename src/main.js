import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  Vuex,
  template:'<App/>',
  components: {App},
})
