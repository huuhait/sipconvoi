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
        return 'Nội y nam';
      case 'noi-y-nu':
        return 'Nội y nữ';
      case 'noi-y-tre-nho':
        return 'Nội y trẻ nhỏ';
      default:
        return '';
    }
  }
}
</script>

<style lang="less">

</style>
