<template>
  <div class="container">
    <div class="box" ref="box">
      <div class="box1">
        <div class="content">
          <div class="user">
            <a href="http://glong300.gitee.io/searchs">
              <img src="~assets/headImg.png" class="me-img" alt />
            </a>
          </div>
          <div class="technology">
            <h4>一个充满积极、乐观、爱好学习技术的前端工程师</h4>
            <!-- <p style="text-align: left;">技能：</p> -->
            <p>HTML5/CSS/JavaScript/Less/Node</p>
            <p>Bootstrap/Vue/React/Ant Design/element-ui/mint-ui</p>
            <p>Git/GitHub</p>
          </div>
        </div>
      </div>
      <!-- <div class="box2">
        <Skill />
      </div>
      <div class="box3">分页3</div>-->
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
      index: 0,
    }
  },
  computed: {},
  components: {
    ContentTitle,
    Skill,
  },
  mounted() {
    this.$store.commit('updateSwitchCom', false)
    // let box = this.$refs.box
    // let self = this
    // document.addEventListener('wheel', function(event) {
    //   let e = event || window.event
    //   if (self.kai) {
    //     self.kai = false // 开关 防止在动画中重复滑动
    //     box.style.transition = ' 1s ease' // 动画时间
    //     // 向下滑动
    //     if (event.wheelDelta < 0 && self.index < 2) {
    //       self.index++
    //     }
    //     // 向上滑动
    //     if (event.wheelDelta > 0 && self.index > 0) {
    //       self.index--
    //     }
    //     console.log(self.index)
    //     box.style.transform = `translateY(${-self.index * 100}vh)`
    //     setTimeout(() => {
    //       self.kai = true
    //     }, 1000)
    //   }
    // })
  },
  destroyed() {
    this.$store.commit('updateSwitchCom', true)
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #303030;
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

.box .box1 .content {
  width: 100%;
  height: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content .user {
  width: 100%;
}
.content a {
  width: 100px;
  height: 100px;
}
.content a .me-img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #303030;
}
.box .box2 {
  background-color: #303030;
}
.box .box3 {
  background-color: #303030;
}
.technology {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.technology p {
  width: 100%;
  font-size: 20px;
  margin: 4px auto;
}
</style>