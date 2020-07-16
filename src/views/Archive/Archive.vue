<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>
          <i>目录</i>
        </h1>
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
  methods: {},
  mounted() {},
}
</script>

<style scoped>
</style>