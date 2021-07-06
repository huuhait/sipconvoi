<template>
  <div class="product-item">
    <div class="product-item-image">
      <a href="#"></a>
    </div>
    <div class="product-item-details">
      <div class="product-item-name">
        <a href="#">
          Hentaiz
        </a>
      </div>
      <div class="product-item-price">
        100.000đ
      </div>
      <div class="product-item-code">
        MABC-125
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProductItem extends Vue {

}
</script>

<style lang="less">
.product-item {
  padding: 6px;
  display: inline-block;
  cursor: pointer;
  user-select: none;

  &-image {
    width: 100%;
    height: 250px;
    background-color: #fff;

    img {
      width: 100%;
    }
  }

  &-details {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &-name {
    font-size: 16px;
    margin-bottom: 8px;

    a:hover {
      text-decoration: underline;
      color: inherit;
    }
  }

  &-price {
    font-size: 22px;
    font-weight: bold;
  }

  &-code {
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
