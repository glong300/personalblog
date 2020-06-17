<template>
  <div id="app">
    <div id="app-header">
      <Header />
    </div>
    <div id="app-content">
      <router-view />
    </div>
    <div id="app-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  min-width: 1024px;
  height: 100%;
  color: #fff;
  overflow: hidden;
  background-color: #303030;
}

#app-header {
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #303030;
  z-index: 99;
  text-align: center;
}
#app-content {
  width: 100%;
  min-height: calc(100vh - 10vh);
  background-color: #fff;
  padding-bottom: 30px;
}
#app-footer {
  width: 100%;
  height: 10vh;
}
</style>
