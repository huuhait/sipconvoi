import Vue from 'vue';
import VueCompositionAPI, { reactive } from '@vue/composition-api';
import ProductList from '@/product_list.json';
import { SanPham } from '@/types';

Vue.use(VueCompositionAPI);

export interface Store {
  items: SanPham[];
}

const store: Store = reactive<Store>({
  items: ProductList,
});

export default store;
