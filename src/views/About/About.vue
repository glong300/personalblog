<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h2>一个充满积极、乐观、爱好学习技术的前端工程师</h2>
      </template>
    </ContentTitle>
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
import { mapState } from 'vuex'
export default {
  name: 'About',
  data() {
    return {
      msg: 'About'
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter
    })
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