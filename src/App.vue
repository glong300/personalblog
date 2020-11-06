<template>
  <div id="app">
    <div id="app-header">
      <NavBar />
    </div>
    <div id="app-content">
      <Home />
      <div id="app-footer" v-show="switchCom">
        <!-- <Footer /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from './components/NavBar/NavBar.vue'
import Footer from './components/Footer/Footer.vue'
import Home from '@/views/Home/Home.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    NavBar,
    Footer,
    Home
  },
  computed: {
    ...mapState({
      switchCom: (state) => state.switchCom,
    }),
  },
  methods: {},
  mounted() {},
}
</script>

<style>
#app {
  min-width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  background-color: #303030;
  display: flex;
}

#app-header {
  width: 256px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  box-shadow: 2px 0 6px #303030;
}
#app-content {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: calc(100% - 256px);
  min-height: calc(100vh - 10vh);
  background-color: #fff;
  overflow-y: scroll;
}
#app-footer {
  width: 100%;
  height: 10vh;
}
</style>
