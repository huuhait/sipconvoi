<template>
  <div class="footer">
    <div class="footer-top">
      <div class="container-fluid">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <div class="footer-logo">
              <router-link to="/">
                <img src="@/assets/logo.png" />
              </router-link>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="title">HỖ TRỢ</div>
            <div class="footer-item">
              <a href="#">
                Trạng thái đơn hàng
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Hướng dẫn chọn size
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Hướng dẫn đặt hàng
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Câu hỏi thường gặp
              </a>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="title">GIỚI THIỆU</div>
            <div class="footer-item">
              <a href="#">
                Trạng thái đơn hàng
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Hướng dẫn chọn size
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Hệ thống cửa hàng
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Thông tin doanh nghiệp
              </a>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="title">CHÍNH SÁCH BÁN HÀNG</div>
            <div class="footer-item">
              <a href="#">
                Chính sách đổi trả
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Chính sách vận chuyển
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Chính sách thanh toán
              </a>
            </div>
            <div class="footer-item">
              <a href="#">
                Chính sách bảo mật
              </a>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="footer-bottom">
      © 2021 <router-link to="/">SipConVoi</router-link>. All rights reserved.
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {

}
</script>

<style lang="less">
.footer {
  padding-top: 20px;
  background-color: #f2f2f2;

  &-logo {
    width: 70%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &-item {
    padding: 6px 0;
    font-size: 14px;
  }

  &-top {
    padding-bottom: 20px;
  }

  &-bottom {
    border-top: 2px solid #1890ff;
    padding: 4px;
    background-color:#fff;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 37px;

    a {
      color: #1890ff;
    }
  }
}
</style>
