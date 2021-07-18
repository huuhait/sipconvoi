<template>
  <div class="danh-muc">
    <ProductList :title="title" :list="SanPhams" />
  </div>
</template>

<script lang="ts">
import { SanPham } from '@/types';
import controllers from '@/controllers';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ProductList: () => import('@/layouts/DanhMuc/ProductList.vue'),
  },
})
export default class DanhMuc extends Vue {
  SanPhams: SanPham[] = [];

  get title() {
    switch (this.$route.params.name as string) {
      case 'quan-lot-nam':
        this.SanPhams = controllers.items.filter((item) => item.categorys.toLowerCase().split(',').includes('Quần lót nam'.toLowerCase()));
        return 'Quần lót nam';
      case 'quan-lot-nu':
        this.SanPhams = controllers.items.filter((item) => item.categorys.toLowerCase().split(',').includes('Quần lót nữ'.toLowerCase()));
        return 'Quần lót nữ';
      case 'quan-lot-tre-em':
        this.SanPhams = controllers.items.filter((item) => item.categorys.toLowerCase().split(',').includes('Quần lót trẻ em'.toLowerCase()));
        return 'Quần lót trẻ em';
      default:
        return '';
    }
  }

  mounted() {
    switch (this.$route.params.name as string) {
      case 'noi-y-nam':
        document.title = 'Nội y nam - Sịp con voi';
        (document.querySelector('meta[name="keywords"]') as any).setAttribute('content', 'quần lót nam, đồ lót nam, quần sịp nam, do lot nam, quan lot nam, quan lot nam cao cap, quần lót nam thời trang, quần lót');
        break;
      case 'quan-lot-nu':
        document.title = 'Nội y nữ - Sịp con voi';
        (document.querySelector('meta[name="keywords"]') as any).setAttribute('content', 'quần lót nữ, quan lot nu, quần lót nữ sinh, quần lót nữ thời trang, quần lót nữ cao cấp, quần lót');
        break;
      case 'quan-lot-tre-em':
        document.title = 'Quần lót trẻ em - Sịp con voi';
        (document.querySelector('meta[name="keywords"]') as any).setAttribute('content', 'quần lót trẻ em, quan lot tre em, quần lót bé trai, quần lót bé gái, quần lót, quan lot');
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="less">

</style>
