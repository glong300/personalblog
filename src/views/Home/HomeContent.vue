<template>
  <div class="home-content">
    <div class="container">
      <div class="container-content">
        <div v-for="(item, index) in articleData" :key="index" class="cont-card">
          <a :href="item.link">
            <div class="content-txt">{{item.HomeContext}}</div>
            <h2 class="h2">
              <font color="#EE0000" v-show="index==0">[置顶]</font>
              {{item.title}}
            </h2>
          </a>
          <p class="post-meta">{{item.update}}</p>
        </div>
      </div>
      <div class="container-label"></div>
    </div>
  </div>
</template>

<script>
import homeData from 'assets/data/homeData'
import appUtil from '../../network/request'
export default {
  name: 'HomeContent',
  data() {
    return {
      articleData: [] // 文章数据
    }
  },
  mounted() {
    appUtil
      .request({
        url: 'wxm/live/getPersonalFile',
        method: 'GET'
      })
      .then(res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
    this.getTopppingData()
  },
  methods: {
    getTopppingData() {
      this.articleData = homeData.toppingData
      this.$emit('articleData', this.articleData)
    }
  }
}
</script>

<style scoped>
.home-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 30px;
}

.container {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
}

.container-content {
  width: 73%;
  height: 100%;
  text-align: left;
}

.container-content .cont-card {
  width: 100%;
  min-height: 150px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border-bottom: 1px solid rgb(156, 156, 156);
}

.container-content .cont-card a {
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap-reverse;
}

.container-content .cont-card a .h2 {
  width: 100%;
  font-weight: 700;
  font-size: 1.5rem;
  color: #404040;
}

.container-content .cont-card a .content-txt {
  width: 100%;
  font-size: 14px;
  font-style: italic;
  color: #a3a3a3;
  font-weight: 400;
}

.container-content > .cont-card a .content-txt:hover + h2 {
  color: #0085a1;
}

.container-content .cont-card a .content-txt:hover {
  color: #0085a1;
}
.container-content .cont-card a h2:hover {
  color: #0085a1;
}

.post-meta {
  font-family: Lora, 'Times New Roman', serif;
  color: gray;
  font-size: 16px;
  font-style: italic;
  margin-top: 6px;
}

.container .container-label {
  width: 25%;
  height: 700px;
  background-color: #434343;
  border-radius: 5px;
}
@media screen and (max-width: 960px) {
  .container-content {
    width: 100%;
  }
  .container-label {
    display: none;
  }
}
</style>