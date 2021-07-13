<template>
  <div class="product-info">
    <div class="container-fluid">
      <div class="product-info-preview">
        <img src="@/assets/vera-bo-nu-vbcs0128-hong-v0128-p1os00_1024x1024.jpg" />
      </div>
      <div class="product-info-details">
        <div class="product-info-details-title">
          Bộ short VERA hai dây satin phối ren - 0128
        </div>
        <div class="product-info-details-code">
          Mã SP: P04
        </div>
        <div class="product-info-details-price">
          299,000 ₫
        </div>
        <div class="product-info-details-size">
          <div class="product-info-details-size-title">Size: </div>
          <div class="product-info-details-size-content">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
        </div>

        <button class="product-info-button">
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
    <div class="container-fluid">
      <div class="product-info-note">
        <div class="full">
          <div class="product-info-note-title">
            Mô tả sản phẩm
          </div>
          <div class="content">
            Vừa quyến rũ lại vừa thoải mái chính là điều khiến các nàng cực kỳ yêu thích bộ đồ ngủ quần ngắn này. Vera đã khéo léo thiết kế phần dây áo dễ điều chỉnh kết hợp viền ren nhẹ nhàng ở phần cổ áo lẫn chân quần short mang lại vẻ quyến rũ và tinh tế đến không ngờ.
          </div>
        </div>
        <div class="help">
          <div class="product-info-note-title">
            Bạn cần hỗ trợ
          </div>
          <div class="content">
            Nếu bạn có vấn đề gì cần hỗ trợ vui lòng liên hệ với chúng tôi theo các kênh bên dưới:
            <ul>
              <li>
                <a href="#">
                  <a-icon type="phone" />
                  Hotline: 1800 6709
                </a>
              </li>
              <li>
                <a href="#">
                  <a-icon type="mail" />
                  Gửi Hỗ trợ khách hàng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ProductList title="Sản phẩm liên quan" :list="lstSanPham" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ProductList: () => import('@/components/ProductList.vue'),
  },
})
export default class ProductInfo extends Vue {
  get code() {
    return this.$route.params.code;
  }

  get lstSanPham() {
    return Array(50);
  }
}
</script>

<style lang="less">
.product-info {
  > .container-fluid {
    padding: 50px 0;
    display: flex;
  }

  > * {
    flex: 1;
  }

  &-note {
    display: flex;
    border-radius: 3px;
    background: #dfdfdf;
    padding: 21px 14px;
    margin: 0 0 42px;

    &-title {
      font-size: 14px;
      line-height: 2;
      font-weight: 700;
      color: #333d44;
    }

    .content {
      font-size: 14px;
      line-height: 1.5;
    }

    ul {
      margin-top: 12px;

      li {
        display: block;

        i {
          font-size: 18px;
        }
      }
    }

    > * {
      flex: 1;
      padding: 0 21px;
    }
  }

  &-preview {
    img {
      width: 100%;
    }
  }

  &-details {
    padding-left: 20px;

    &-title {
      font-size: 30px;
      margin: 3.5px 0 7px;
    }

    &-code {
      display: block;
      color: #707070;
      font-weight: 700;
      margin-bottom: 8px;
    }

    &-price {
      color: #a0122b;
      font-size: 26px;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 8px;
    }

    &-size {
      font-size: 18px;
      margin-bottom: 12px;

      &-title {
        font-weight: 500;
        margin: 0 0 10px;
        padding: 3.5px 0;
        font-size: 15.4px;
        color: rgba(0, 0, 0, 0.7);
      }

      &-content {
        display: flex;

        span {
          min-width: 56px;
          height: 42px;
          line-height: 42px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          display: inline-flex;
          border: 1px solid #ccc;
          background: #fff;
          margin: 0;
          position: relative;
          font-size: 13px;
          font-weight: 600;
          padding: 0 5px;
          margin: 0 7px 3.5px 0;

          &:hover {
            background: rgba(0, 0, 0, 0.07);
          }
        }
      }
    }
  }

  &-button {
    max-width: 250px;
    width: 100%;
    display: block;
    padding: 0;
    border: 0;
    font-weight: 600;
    background: #007aff;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    line-height: 36px;
    text-align: center;
    letter-spacing: 2px;
    border-radius: 3px;
    border: 2px solid #007aff;

    &:hover {
      background-color: rgb(13, 114, 207);
    }
  }
}
</style>
