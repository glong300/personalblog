<template>
  <div id="nav">
    <div class="nav-a">
      <!-- <img src="./../../assets/logo.png" alt @click="backHome" /> -->
      <a :href="{name: Home}" class="nav-title" alt>Long</a>
      <div class="nav-link">
        <router-link :to="{name: 'Home'}">
          <!-- <i class="link-icon"></i> -->
          首页
        </router-link>
        <router-link :to="{name: 'Archive'}">
          <!-- <i class="link-icon"></i> -->
          目录
        </router-link>
        <router-link :to="{name: 'Icon'}">
          <!-- <i class="link-icon"></i> -->
          图标
        </router-link>
        <router-link :to="{name: 'MyBookList'}">
          <!-- <i class="link-icon"></i>-->
          我的书单
        </router-link>
        <router-link :to="{name: 'About'}">
          <!-- <i class="link-icon"></i>-->
          关于我
        </router-link>
      </div>
      <div class="nav-mobile">
        <img src alt class="mobile-img" @click="showNav" />
        <div
          :style="{border: changeShowBorder}"
          :class="['mobile-link', changeIsShows]"
          @click="falseNav"
        >
          <router-link :to="{name: 'Home'}">
            <!-- <i class="link-icon"></i> -->
            首页
          </router-link>
          <router-link :to="{name: 'Archive'}">
            <!-- <i class="link-icon"></i> -->
            目录
          </router-link>
          <router-link :to="{name: 'Icon'}">
            <!-- <i class="link-icon"></i> -->
            图标
          </router-link>
          <router-link :to="{name: 'MyBookList'}">
            <!-- <i class="link-icon"></i>-->
            我的书单
          </router-link>
          <router-link :to="{name: 'About'}">
            <!-- <i class="link-icon"></i>-->
            关于我
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isShow: false, // 移动端是否显示导航栏
      showBorder: true // 移动端是否不显示导航栏边框
    }
  },
  computed: {
    changeIsShows() {
      return this.isShow ? 'isshow' : ''
    },
    changeShowBorder() {
      return this.showBorder ? 'none' : ''
    }
  },
  methods: {
    backHome() {
      this.$router.push('/').catch(err => {})
    },
    showNav() {
      this.isShow = !this.isShow
      if (!this.isShow) {
        setTimeout(() => {
          this.showBorder = true
        }, 390)
      } else {
        this.showBorder = false
      }
    },
    falseNav() {
      this.isShow = false
      setTimeout(() => {
        this.showBorder = true
      }, 390)
    }
  }
}
</script>

<style scoped>
#nav {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-shadow: 0px 2px 3px #1d1d1d;
  position: relative;
  z-index: 99;
}

.nav-mobile .mobile-link a.router-link-exact-active.router-link-active {
  color: #42b983;
}

.nav-a {
  width: 90%;
  height: 100%;
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

.nav-a .nav-title {
  cursor: pointer;
  font-size: 28px;
  text-decoration: none;
  color: rgb(202, 202, 202);
  font-style: oblique;
}

.nav-a .nav-link {
  display: flex;
  justify-content: space-between;
  justify-items: center;
}

.nav-a .nav-mobile {
  display: none;
}

.nav-mobile .mobile-img {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #42b983;
}

.nav-mobile .mobile-link {
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  height: 0;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  background-color: #303030;
  box-shadow: 0px 2px 3px #1d1d1d;
  border-top: 1px solid rgb(32, 32, 32);
  overflow: hidden;
  transition: height 0.4s ease;
}

.nav-mobile .mobile-link.isshow {
  height: 280px;
  /* border-top: 1px solid rgb(32, 32, 32); */
}

.nav-mobile .mobile-link a {
  display: block;
  width: 100%;
  height: 56px;
  line-height: 56px;
  text-decoration: none;
  color: rgb(202, 202, 202);
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
  font-size: 12px;
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

@media screen and (max-width: 375px) {
  .nav-a .nav-link {
    display: none;
  }
  .nav-a .nav-mobile {
    display: flex;
  }
}
</style>