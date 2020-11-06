<template>
  <div class="home-content">
    <div class="container">
      <div class="container-content">
        <div
          v-for="(item, index) in articleData"
          :key="index"
          class="cont-card"
        >
          <a :href="item.link">
            <div class="content-txt">{{ item.HomeContext }}</div>
            <h2 class="h2">
              <font color="#EE0000" v-show="index == 0">[置顶]</font>
              {{ item.title }}
            </h2>
          </a>
          <p class="post-meta">{{ item.update }}</p>
        </div>
      </div>
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
      articleData: [], // 文章数据
    }
  },
  mounted() {
    this.getTopppingData()
  },
  methods: {
    getTopppingData() {
      this.articleData = homeData.toppingData
      this.$emit('articleData', this.articleData)
    },
  },
}
</script>

<style lang="less" scoped>
.home-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 30px;

  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;

    .container-content {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      text-align: left;
      .cont-card {
        width: 100%;
        min-height: 150px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* justify-content: space-between; */
        border-bottom: 1px solid rgb(156, 156, 156);
        a {
          width: 80%;
          text-decoration: none;
          font-weight: 700;
          font-size: 30px;
          display: flex;
          /* flex-direction: column; */
          flex-wrap: wrap-reverse;
          .h2 {
            width: 100%;
            font-weight: 700;
            font-size: 1.5rem;
            color: #404040;
          }
          .content-txt {
            width: 100%;
            font-size: 14px;
            font-style: italic;
            color: #a3a3a3;
            font-weight: 400;
          }
        }

        .post-meta {
          font-family: Lora, 'Times New Roman', serif;
          color: gray;
          font-size: 16px;
          font-style: italic;
          margin-top: 6px;
        }
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .container {
    width: 80%;
  }
  .container-content {
    width: 100%;
  }
  .container-label {
    display: none;
  }
  .container-content .cont-card a {
    width: 100%;
  }
}
</style>