import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store';
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  Vuex,
  template:'<App/>',
  components: {App},
})
