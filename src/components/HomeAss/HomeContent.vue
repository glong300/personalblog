<template>
  <div class="home-content">
    <div class="container">
      <div class="container-content">
        <div v-for="(item, index) in articleData" :key="index" class="cont-card">
          <a href>
            <h2>
              <font color="#EE0000">[置顶]</font>
              我是标题{{index}}
            </h2>
          </a>
        </div>
      </div>
      <div class="container-label"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data() {
    return {
      articleData: [1, 1, 1] // 文章数据
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
  padding-bottom: 30px;
}

.container-content {
  width: 73%;
  height: 100%;
}

.container-content .cont-card {
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid rgb(156, 156, 156);
}

.container-content .cont-card a {
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
}

.container-content .cont-card a h2 {
  font-weight: 700;
  font-size: 30px;
}

.container .container-label {
  width: 25%;
  background-color: #434343;
  border-radius: 5px;
}
</style>