<template>
  <div class="preview">

    <div class="preview-img">
      <img src="@/assets/banner1.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Preview extends Vue {
}
</script>

<style lang="less">
.preview {
  margin-top: 12px;
  img {
    width: 100%;
  }
}
</style>
