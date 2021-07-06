<template>
  <div class="product-list">
    <div class="container-fluid">
      <div class="title">
        {{ title }}
      </div>
      <VueAgile :slidesToShow="4" :navButtons="false">
        <ProductItem v-for="(item, index) in list" :key="index" />
      </VueAgile>
    </div>
  </div>
</template>

<script lang="ts">
import { SanPham } from '@/types';
import { VueAgile } from 'vue-agile';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductItem from './ProductItem.vue';

@Component({
  components: {
    VueAgile,
    ProductItem,
  },
})
export default class ProductList extends Vue {
  @Prop() readonly title!: string;
  @Prop() readonly list!: SanPham[];
}
</script>

<style lang="less">
.product-list {
  background-color: #f2f2f2;
  padding: 25px 0;

  .title {
    text-align: center;
    font-size: 34px;
  }

  .product-item {
    margin-top: 40px;
    padding-left: 12px;
    padding-right: 12px;

    &:first-child {
      padding-left: 0;
      padding-right: 12px;
    }

    &:last-child {
      padding-left: 12px;
      padding-right: 0;
    }
  }
}

.agile__actions {
  display: none;
}
</style>
