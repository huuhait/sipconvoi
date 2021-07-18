<template>
  <div class="home">
    <Preview />
    <SpecialCategory />
    <ProductList title="Sản phẩm mới" :list="SanPhamMoiNhat" />
    <ProductList title="Sản phẩm bán chạy" :list="SanPhamBanChay" />
    <Register />
  </div>
</template>

<script lang="ts">
import controllers from '@/controllers';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Preview: () => import('@/layouts/Home/Preview.vue'),
    SpecialCategory: () => import('@/layouts/Home/SpecialCategory.vue'),
    ProductList: () => import('@/components/ProductList.vue'),
    Register: () => import('@/layouts/Home/Register.vue'),
  },
})
export default class Home extends Vue {
  SanPhamMoiNhat = controllers.items;
  SanPhamBanChay = controllers.items;

  mounted() {
    this.SanPhamMoiNhat = controllers.shuffleArray([...this.SanPhamMoiNhat]);
    this.SanPhamBanChay = controllers.shuffleArray([...this.SanPhamBanChay]);
  }
}
</script>
