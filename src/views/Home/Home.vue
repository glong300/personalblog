<template>
  <div class="home">
    <ContentTitle :father="faData">
      <template v-slot:h1slot>
        <h1>我是首页的展位</h1>
      </template>
      <template  v-slot:spanslot>
        <span>我是 首页 的副展位</span>
      </template>
    </ContentTitle>
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentTitle from './../../components/Content/ContentTitle'
import HomeContent from './HomeContent.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      faData: '我是父组件的值'
    }
  },
  components: {
    ContentTitle,
    HomeContent
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>
