import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './stores'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");