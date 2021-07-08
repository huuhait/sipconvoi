<template>
  <div class="register">
    <div class="container-fluid">
      <div class="register-image">
        <img src="@/assets/section_6_1.jpg" />
      </div>

      <div class="register-content">
        <div>
          <div class="register-title">
            ĐĂNG KÝ NHẬN ƯU ĐÃI
          </div>
          <div class="register-desc">
            Đăng ký Email của bạn để nhận thông tin ưu đãi từ sipconvoi
          </div>
          <form class="register-form">
            <input type="text" name="email" placeholder="Nhập Email của bạn">
            <button><a-icon type="arrow-right" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Register extends Vue {

}
</script>

<style lang="less">
.register {
  padding: 50px 0;

  .container-fluid {
    padding: 0 50px;
    display: flex;
  }

  &-image {
    height: 100%;

    img {
      height: 100%;
    }
  }

  &-content {
    width: 100%;
    padding-left: 50px;
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }
  }

  &-title {
    font-size: 25px;
    margin-bottom: 12px;
  }

  &-desc {
    margin-bottom: 24px;
  }

  &-form {
    position: relative;

    input {
      width: 100%;
      height: 50px;
      border: none;
      padding: 0px 20px;
      font-size: 13px;
      display: inline-block;
      border: 1px solid #DDDDDD;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.3s;

      &::placeholder {
        font-size: 16px;
      }

      &:focus {
        border: 1px solid #1890ff;
      }

      &:focus-visible {
        outline: none;
      }
    }

    button {
      position: absolute;
      right: 0;
      top: 0;

      width: 50px;
      height: 50px;
      background-color: #333;
      color: #fff;
      font-size: 18px;
      border: none;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
