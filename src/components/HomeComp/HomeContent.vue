<template>
  <div class="container">
    <div class="container-content">
      <div v-for="(item, index) in articleData" :key="index" class="cont-card"></div>
    </div>
    <div class="container-label"></div>
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
}

.container-content .cont-card {
  width: 100%;
  height: 200px;
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 5px;
}

.container .container-label {
  width: 25%;
  height: 500px;
  background-color: #fff;
  border-radius: 5px
}

</style>