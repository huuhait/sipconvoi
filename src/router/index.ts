import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import DanhMuc from '@/views/DanhMuc.vue';
import ProductInfo from '@/views/ProductInfo.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/danh-muc/:name',
    name: 'Danh Muc',
    component: DanhMuc,
  },
  {
    path: '/san-pham/:code',
    name: 'SanPham',
    component: ProductInfo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let firstRoute = true;

router.beforeEach((from, to, next) => {
  if (firstRoute) {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      next(path);

      return;
    }
    firstRoute = false;
  }

  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
