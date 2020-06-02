<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>我是{{msg}}页面的展位</h1>
      </template>
      <template v-slot:spanslot>
        <span>{{$route.params.id}}</span>
      </template>
    </ContentTitle>
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
export default {
  name: 'MyBookList',
  data () {
    return {
        msg: 'MyBookList'
    }
  },
  components: {
    ContentTitle
  }
}
</script>

<style scoped>
</style>