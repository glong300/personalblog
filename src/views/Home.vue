<template>
  <div class="home">
    <HomeHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeComp/HomeHeader.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
