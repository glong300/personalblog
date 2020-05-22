<template>
  <div class="container">
    <HomeHeader>
      <template v-slot:h1slot>
        <h1>我是{{msg}}页面的展位</h1>
      </template>
      <template v-slot:spanslot>
        <span>我是{{msg}}页面的副展位</span>
      </template>
    </HomeHeader>
  </div>
</template>

<script>
import HomeHeader from './../components/HomeAss/HomeHeader'
export default {
  name: 'Labels',
  data() {
    return {
      msg: 'Labels'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>