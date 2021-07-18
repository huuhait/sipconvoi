<template>
  <div class="product-item">
    <router-link :to="{
      name: 'SanPham',
      params: {
        code: item.code
      }
    }" class="product-item-image">
      <div class="box-see">
        XEM NGAY
      </div>
      <img :src="images[0]" :alt="item.name + ' - sipconvoi.com'" :title="item.name + ' - sipconvoi.com'" />
    </router-link>
    <div class="product-item-details">
      <div class="product-item-name">
        <router-link :to="{
          name: 'SanPham',
          params: {
            code: item.code
          }
        }">
          {{ item.name }}
        </router-link>
      </div>
      <div class="product-item-price">
        {{ item.price }}
      </div>
      <div class="product-item-code">
        {{ item.code }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SanPham } from '@/types';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductItem extends Vue {
  @Prop() readonly item!: SanPham;

  get images() {
    return this.item.images.split('\n').map((img) => img.replace('- ', ''));
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
