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
import Header from "./Header/Header.vue";
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
  width: 100%;
  height: 100%;
  text-align: center;
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
}
#app-content {
  width: 100%;
  min-height: calc(100vh - 15vh);
  background-color: #fff;
}
#app-footer {
  width: 100%;
  height: 15vh;
}
</style>
