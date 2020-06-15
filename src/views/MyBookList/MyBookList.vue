<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>
          <i>我的书单</i>
        </h1>
      </template>
    </ContentTitle>
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
export default {
  name: 'MyBookList',
  data() {
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