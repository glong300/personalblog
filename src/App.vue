<template>
  <div id="app">
    <div id="nav">
      <div class="nav-a">
        <img src="./assets/logo.png" alt @click="backHome" />
        <div class="nav-link">
          <router-link to="/">
            <i class="link-icon"></i>首页
          </router-link>
          <router-link to="/labels">
            <i class="link-icon"></i>标签
          </router-link>
          <router-link to="/classification">
            <i class="link-icon"></i>分类
          </router-link>
          <router-link to="/about">
            <i class="link-icon"></i>关于我
          </router-link>
          <router-link to="/mybooklist">
            <i class="link-icon"></i>我的书单
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    backHome() {
      this.$router.push('/').catch(err => {})
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1b1c1d;
  box-shadow: 0px 3px 10px #424242;
}

.nav-a {
  width: 75%;
  height: 65px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-a img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.nav-a .nav-link {
  display: flex;
  justify-content: space-between;
  justify-items: center;
}

.nav-a .nav-link a {
  width: auto;
  padding: 10px 20px;
  font-weight: bold;
  color: rgb(202, 202, 202);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.nav-a .nav-link a .link-icon {
  width: 20px;
  height: 20px;
  background-color: #2c3e50;
  display: inline-block;
  margin-right: 4px;
}

.nav-a .nav-link a.router-link-exact-active {
  color: #42b983;
}
</style>
