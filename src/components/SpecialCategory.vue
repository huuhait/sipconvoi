<template>
  <div class="special-category">
    <div class="container-fluid">
      <a-row :gutter="16">
        <a-col :span="12">
          <a href="/">
            <img src="@/assets/img_banner_home_1.png" />
            <img src="@/assets/img_banner_home_2.png" />
          </a>
        </a-col>
        <a-col :span="12">
          <a href="/">
           <img src="@/assets/img_banner_home_3.png" />
          </a>
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="16">
        <a-col :span="8">
          <a href="/">
           <img src="@/assets/img_banner_home_4.png" />
          </a>
        </a-col>
        <a-col :span="8">
          <a href="/">
           <img src="@/assets/img_banner_home_5.png" />
          </a>
        </a-col>
        <a-col :span="8">
          <a href="/">
           <img src="@/assets/img_banner_home_6.png" />
          </a>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class SpecialCategory extends Vue {

}
</script>

<style lang="less">
.special-category {
  padding: 50px 0;

  img {
    width: 100%;
  }
}
</style>
