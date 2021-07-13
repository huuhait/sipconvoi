<template>
  <div class="danh-muc">
    <ProductList :title="title" :list="SanPhamMoiNhat" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ProductList: () => import('@/layouts/DanhMuc/ProductList.vue'),
  },
})
export default class DanhMuc extends Vue {
  SanPhamMoiNhat = Array(50);

  get title() {
    switch (this.$route.params.name as string) {
      case 'noi-y-nam':
        document.title = 'Nội y nam - Sịp con voi';
        return 'Nội y nam';
      case 'noi-y-nu':
        document.title = 'Nội y nữ - Sịp con voi';
        return 'Nội y nữ';
      case 'noi-y-tre-nho':
        document.title = 'Nội y trẻ nhỏ - Sịp con voi';
        return 'Nội y trẻ nhỏ';
      default:
        return '';
    }
  }
}
</script>

<style lang="less">

</style>
