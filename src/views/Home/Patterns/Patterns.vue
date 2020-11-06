<template>
  <div class="home-content">
    <div class="container">
      <h4><i style="margin-right: 7px" id="CSS"></i>CSS</h4>
      <div class="container-content">
        <div
          v-for="(item, index) in articleData"
          :key="index"
          class="cont-card"
          @click="openWebPage(item.link)"
        >
          <div class="card-t">
            <a href="">
              <img class="card-img" src="./../../../assets/logo.png" alt="" />
            </a>
            <!-- :href="item.link" -->
            <div class="cont-link">
              <div class="content-txt">{{ item.HomeContext }}</div>
              <h2 class="h2">{{ item.title }}</h2>
            </div>
          </div>
          <!-- <p class="post-meta">{{ item.update }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeData from 'assets/data/homeData'
import appUtil from '../../../network/request'
export default {
  name: 'Patterns',
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

    openWebPage(item) {
      window.open(item, '_blank')
    },
  },
}
</script>

<style lang="less" scoped>
.home-content {
  position: relative;
  width: auto;
  height: 100%;
  background-color: #fff;
  padding: 30px;
  overflow-x: hidden;

  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;

    h4 {
      font-size: 17px;
      color: #555;
      margin: 10px 0;
    }

    .container-content {
      width: 100%;
      height: 100%;
      text-align: left;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      justify-items: center;
      flex-wrap: wrap;

      .cont-card {
        width: 22%;
        height: 86px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        overflow: hidden;
        border: 1px solid #e4ecf3;
        padding-left: 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
          transition: all 0.3s ease;
        }

        .card-t {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          // align-items: center;

          a {
            margin-right: 10px;
            .card-img {
              width: 40px;
              height: 40px;
            }
          }

          .cont-link {
            width: 70%;
            text-decoration: none;
            font-weight: 700;
            font-size: 30px;
            display: flex;
            /* flex-direction: column; */
            flex-wrap: wrap-reverse;
            .h2 {
              width: 100%;
              font-weight: 700;
              font-size: 13px;
              color: #404040;
              margin: 0;
            }
            .content-txt {
              width: 100%;
              font-size: 14px;
              font-style: italic;
              color: #a3a3a3;
              font-weight: 400;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
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
