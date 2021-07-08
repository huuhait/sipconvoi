<template>
  <div id="app">
    <Header :fixedHeader="fixedHeader" />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Header: () => import('@/layouts/Header.vue'),
    Footer: () => import('@/layouts/Footer.vue'),
  },
})
export default class App extends Vue {
  fixedHeader = false;

  created() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }

  handleScroll() {
    this.fixedHeader = window.scrollY > 0;
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.4;
  font-size: 14px;
  color: #333d44;
  background: #fff;
  letter-spacing: 0.5px;
  font-family: "NunitoSans", sans-serif;
  background-color: #fff;
}

a {
  color: #333d44;
  transition: all 0.3s ease;
  text-decoration: none;
}
</style>
