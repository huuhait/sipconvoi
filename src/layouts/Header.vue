<template>
  <div class="header" :class="{ 'header-fixed': fixedHeader }">
    <div class="header-topbar">
      <div class="container-fluid">
        <div class="header-topbar-nav">
          <a class="header-topbar-nav-item"> <a-icon type="team" /> Hỗ trợ </a>
          <a class="header-topbar-nav-item">
            <a-icon type="monitor" /> Hệ thống cửa hàng
          </a>
        </div>
        <a href="/" class="header-logo">
          <img src="@/assets/logo.png" />
        </a>
        <div class="header-topbar-nav">
          <a class="header-topbar-nav-item">
            <a-icon type="search" />
          </a>
          <a class="header-topbar-nav-item">
            <a-icon type="shopping-cart" />
          </a>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="header-nav-item">
        <a href="/"> NỘI Y NAM </a>
      </div>
      <div class="header-nav-item">
        <a href="/"> NỘI Y NỮ </a>
      </div>
      <div class="header-nav-item">
        <a href="/"> NỘI Y TRẺ NHỎ </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  @Prop() readonly fixedHeader!: boolean;
}
</script>

<style lang="less">
.container-fluid {
  max-width: 1110px;
}

.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.header {
  position: sticky;
  width: 100%;
  background: #fff;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;

  &-fixed {
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  }

  .container-fluid {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &-topbar {
    height: 75px;
    line-height: 75px;
    border-bottom: 1px solid #ddd;
    position: relative;

    &-nav {
      display: flex;

      &-item {
        padding: 0 8px;
      }
    }
  }

  &-nav {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    justify-content: space-evenly;

    &-item {
      padding: 15px 25px;
      margin: 0 3.5px;
      text-transform: uppercase;
      color: #21282c;
      display: inline-block;
      font-family: Bookman, Tahoma, Verdana;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      position: relative;
    }
  }

  &-logo {
    height: 65px;

    img {
      height: 100%;
    }
  }

  i {
    font-size: 20px;
  }
}
</style>
