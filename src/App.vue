<template>
  <div id="app">
    <Header :fixedHeader="fixedHeader" />
    <Preview />
    <SpecialCategory />
    <ProductList title="Sản phẩm mới" :list="SanPhamMoiNhat" />
    <ProductList title="Sản phẩm bán chạy" :list="SanPhamMoiNhat" />
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Header: () => import('@/layouts/Header.vue'),
    Preview: () => import('@/components/Preview.vue'),
    SpecialCategory: () => import('@/components/SpecialCategory.vue'),
    ProductList: () => import('@/components/ProductList.vue'),
  },
})
export default class App extends Vue {
  SanPhamMoiNhat = Array(50);
  fixedHeader = false;

  created() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.fixedHeader = window.scrollY > 0;
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.4;
  font-size: 14px;
  color: #333d44;
  background: #fff;
  letter-spacing: 0.5px;
  font-family: "NunitoSans", sans-serif;
  background-color: #fff;
}

a {
  color: #333d44;
  transition: all 0.3s ease;
  text-decoration: none;
}
</style>
