<template>
  <div class="home">
    <Preview />
    <SpecialCategory />
    <ProductList title="Sản phẩm mới" :list="SanPhamMoiNhat" />
    <ProductList title="Sản phẩm bán chạy" :list="SanPhamMoiNhat" />
    <Register />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Preview: () => import('@/layouts/Home/Preview.vue'),
    SpecialCategory: () => import('@/layouts/Home/SpecialCategory.vue'),
    ProductList: () => import('@/layouts/Home/ProductList.vue'),
    Register: () => import('@/layouts/Home/Register.vue'),
  },
})
export default class Home extends Vue {
  SanPhamMoiNhat = Array(50);
}
</script>
