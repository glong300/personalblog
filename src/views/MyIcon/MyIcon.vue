<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>我是Icon的展位</h1>
      </template>
      <template v-slot:spanslot>
        <span>我是 Icon 的副展位</span>
      </template>
    </ContentTitle>
    <div class="icon-cten">
      <div class="icon-k">
        <Badge />
      </div>
      <div class="icon-k">
        <LandMark />
      </div>
      <div class="icon-k">
        <Heart />
      </div>
      <div class="icon-k">
        <Email />
      </div>
      <div class="icon-k">
        <CircleLoading />
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
import Badge from './Badge.vue'
import LandMark from './LandMark.vue'
import Heart from './Heart.vue'
import Email from './Email.vue'
import CircleLoading from './CircleLoading.vue'


export default {
  name: 'Icon',
  data() {
    return {}
  },
  components: {
    ContentTitle,
    Badge,
    LandMark,
    Heart,
    Email,
    CircleLoading
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.icon-cten {
  width: 50vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
}

.icon-k {
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 5px rgba(70, 70, 70, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
</style>