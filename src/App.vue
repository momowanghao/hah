<template>
  <div id="app" :style="{transform: 'scale('+ minScale +')'}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      widthScale: 1,
      heightScale: 1,
      minScale: 1,
      currUrl: ""
    };
  },
  computed: {},
  mounted() {
    this.handleRoute();
    this.resetScale();
    window.onresize = () => {
      return (() => {
        this.resetScale();
      })();
    };
  },
  watch: {
    $route: "handleRoute"
  },
  methods: {
    handleRoute() {
      this.currUrl = this.$route.path;
    },
    resetScale() {
      let screenWidth = document.body.clientWidth;
      let screenHeight = document.body.clientHeight;
      this.widthScale = screenWidth / 1920;
      this.heightScale = screenHeight / 1080;
      this.widthScale > this.heightScale
        ? (this.minScale = this.heightScale)
        : (this.minScale = this.widthScale);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
#app {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -540px;
  margin-left: -960px;
  color: #333;
  background-size: 100% 100%;
  min-height: 100%;
  transform: scale(1);
}
</style>
