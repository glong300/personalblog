<template>
  <div class="container">
    <HomeHeader>
      <template v-slot:h1slot>
        <h1>我是{{msg}}页面的展位</h1>
      </template>
      <template v-slot:spanslot>
        <span>{{$route.query.id}}</span>
      </template>
    </HomeHeader>
    <ArchiveCont />
  </div>
</template>

<script>
import HomeHeader from './../components/HomeAss/HomeHeader'
import ArchiveCont from './../components/ArchiveAss/ArchiveCont'

export default {
  name: 'Archive',
  data() {
    return {
      msg: 'Archive'
    }
  },
  components: {
    HomeHeader,
    ArchiveCont
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>
</style>