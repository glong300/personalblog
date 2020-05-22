<template>
  <div class="warpper">
    <div class="warpper-img">
      <!-- <div class="tags">
        <a href traget="_blank" class="tag">JavaScript</a>
      </div>-->
      <h1>这是一个标题展位</h1>
      <span>这是副标题展位</span>
    </div>
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from './HomeContent'
export default {
  name: 'HomeHeader',
  components: {
    HomeContent
  }
}
</script>

<style scoped>
.warpper {
  width: 100%;
  height: 100%;
  background-color: #303030;
}

.warpper .warpper-img {
  width: 55%;
  height: 370px;
  margin: 0 auto;
  background-color: 303030;
  overflow: hidden;
  /* text-align: left; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.warpper .warpper-img .tags {
  width: 100%;
  height: 30px;
}

.warpper .warpper-img .tags .tag {
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 30px;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
}

.warpper .warpper-img h1 {
  color: #fff;
  font-size: 55px;
  margin: 10px 0;
}

.warpper .warpper-img span {
  color: #fff;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  font-family: Lora, 'Times New Roman', serif;
}
</style>
