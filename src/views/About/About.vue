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
  name: 'About',
  data() {
    return {
      msg: 'About'
    }
  },
  components: {
    ContentTitle
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>