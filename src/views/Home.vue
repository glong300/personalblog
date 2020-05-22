<template>
  <div class="home">
    <HomeHeader :father="faData">
      <template v-slot:h1slot>
        <h1>我是{{msg}}页面的展位</h1>
      </template>
      <template  v-slot:spanslot>
        <span>我是{{msg}}页面的展位</span>
      </template>
    </HomeHeader>
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeAss/HomeHeader.vue'
import HomeContent from './../components/HomeAss/HomeContent'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      faData: '我是父组件的值'
    }
  },
  components: {
    HomeHeader,
    HomeContent
  }
}
</script>
