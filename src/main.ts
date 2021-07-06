import { Icon } from 'ant-design-vue';
import 'swiper/swiper-bundle.css';
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
