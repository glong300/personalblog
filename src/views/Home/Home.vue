<template>
  <div class="home">
    <ContentTitle :father="faData">
      <template v-slot:h1slot>
        <form :action="activeUrl">
          <div class="header">
            <div class="icons" @click="changeIcon">
              <i class="icon-search" v-if="iconSwitch"></i>
              <i class="icon-search-baidu" v-else></i>
            </div>
            <input type="text" class="search" ref="search" name="wd" placeholder="点击图标可切换搜索引擎" />
          </div>
        </form>
      </template>
      <!-- <template  v-slot:spanslot>
        <span>我是 首页 的副展位</span>
      </template>-->
    </ContentTitle>
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentTitle from '@/components/Content/ContentTitle'
import HomeContent from './HomeContent.vue'

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Home',
      faData: '我是父组件的值',
      iconSwitch: true,
    }
  },
  computed: {
    activeUrl() {
      return this.iconSwitch ? '' : 'https://www.baidu.com/s'
    }
  },
  components: {
    ContentTitle,
    HomeContent
  },
  methods: {
    changeIcon() {
      this.iconSwitch = !this.iconSwitch
      console.log(this.iconSwitch)
    }
  },
  mounted() {}
}
</script>

<style>
.header {
  max-width: 600px;
  height: 45px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 50px auto 0 auto;
}

.header .icons {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 20px;
  top: 13px;
}

.icons .icon-search {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url('~assets/search.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.icons .icon-search-baidu {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url('https://www.baidu.com/favicon.ico');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.header .search {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 27px;
  box-shadow: 1px 0 5px #434343;
  border: none;
  outline: none;
  padding: 0 30px 0 50px;
  color: #424242;
  font-size: 16px;
}
</style>
