<template>
  <div class="product-item">
    <router-link to="/san-pham/abc" class="product-item-image">
      <div class="box-see">
        XEM NHANH
      </div>
    </router-link>
    <div class="product-item-details">
      <div class="product-item-name">
        <router-link to="/san-pham/abc">
          Hentaiz
        </router-link>
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
  mounted() {
    document.title = 'Bộ short VERA hai dây satin phối ren - 0128';
    // eslint-disable-next-line no-unused-expressions
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Vừa quyến rũ lại vừa thoải mái chính là điều khiến các nàng cực kỳ yêu thích bộ đồ ngủ quần ngắn này. Vera đã khéo léo thiết kế phần dây áo dễ điều chỉnh kết hợp viền ren nhẹ nhàng ở phần cổ áo lẫn chân quần short mang lại vẻ quyến rũ và tinh tế đến không ngờ.');
  }
}
</script>

<style lang="less">
.product-item {
  padding: 6px;
  display: inline-block;
  cursor: pointer;
  user-select: none;

  &-image {
    display: block;
    position: relative;
    width: 100%;
    height: 250px;
    background-color: #fff;
    overflow: hidden;

    .box-see {
      position: absolute;
      width: 100%;
      height: 35px;
      line-height: 35px;
      background-color: rgb(102, 142, 202);
      color: #fff;
      cursor: pointer;
      bottom: -35px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
    }

    &:hover .box-see {
      bottom: 0px;
    }

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
