<template>
  <div class="product-list">
    <div class="container-fluid">
      <div class="title">
        {{ title }}
      </div>
      <div class="product-list-content">
        <ProductItem v-for="(item, index) in list" :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SanPham } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductItem from '@/components/ProductItem.vue';

@Component({
  components: {
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

  &-content {
    display: block;
  }

  .title {
    text-align: center;
    font-size: 34px;
  }

  .product-item {
    width: 25%;
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
</style>
