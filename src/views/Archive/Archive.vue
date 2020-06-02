<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>我是{{msg}}页面的展位</h1>
      </template>
      <template v-slot:spanslot>
        <span>{{$route.query.id}}</span>
      </template>
    </ContentTitle>
    <ArchiveCont />
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
import ArchiveCont from './ArchiveCont'

export default {
  name: 'Archive',
  data() {
    return {
      msg: 'Archive'
    }
  },
  components: {
    ContentTitle,
    ArchiveCont
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>
</style>