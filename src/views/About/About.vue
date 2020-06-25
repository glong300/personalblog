<template>
  <div class="container">
    <div class="box" ref="box">
      <div class="box1">
        <ContentTitle class="about-me">
          <template v-slot:h1slot>
            <div class="user">
              <a href="http://glong300.gitee.io/searchs">
                <img src="~assets/headImg.png" class="me-img" alt />
              </a>
            </div>
            <div>
              <h4>一个充满积极、乐观、爱好学习技术的前端工程师</h4>
              <p>现就职于重庆某科技公司</p>
            </div>
          </template>
        </ContentTitle>
      </div>
      <div class="box2">
        <Skill />
      </div>
      <div class="box3">分页3</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContentTitle from './../../components/Content/ContentTitle'
import Skill from './Skill'
export default {
  name: 'About',
  data() {
    return {
      kai: true,
      index: 0
    }
  },
  computed: {},
  components: {
    ContentTitle,
    Skill
  },
  mounted() {
    this.$store.commit('updateSwitchCom', false)
    let box = this.$refs.box
    let self = this
    document.addEventListener('wheel', function(event) {
      let e = event || window.event
      if (self.kai) {
        self.kai = false // 开关 防止在动画中重复滑动
        box.style.transition = ' 1s ease' // 动画时间
        // 向下滑动
        if (event.wheelDelta < 0 && self.index < 2) {
          self.index++
        }

        // 向上滑动
        if (event.wheelDelta > 0 && self.index > 0) {
          self.index--
        }

        console.log(self.index)
        box.style.transform = `translateY(${-self.index * 100}vh)`
        setTimeout(() => {
          self.kai = true
        }, 1000)
      }
    })
  },
  destroyed() {
    this.$store.commit('updateSwitchCom', true)
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}

.box {
  width: 100%;
  height: 100%;
}

.box .box1,
.box .box2,
.box .box3 {
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #fff;
  font-size: 24px;
}

.box .box1 .about-me {
  width: 100%;
  height: 100%;
}
.about-me .user {
  width: 100%;
}
.about-me a {
  width: 100px;
  height: 100px;
}
.about-me a .me-img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: red;
}
.box .box2 {
  background-color: royalblue;
}
.box .box3 {
  background-color: red;
}
</style>