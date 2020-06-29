<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>
          <i>Icon</i>
        </h1>
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
      <div class="icon-k">
        <DottedLoading />
      </div>
      <div class="icon-k">
        <Toggle :size="1.5" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
import Badge from './Badge'
import LandMark from './LandMark'
import Heart from './Heart'
import Email from './Email'
import CircleLoading from './CircleLoading'
import DottedLoading from './DottedLoading'
import Toggle from './Toggle'

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
    CircleLoading,
    DottedLoading,
    Toggle
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
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
}

.icon-k {
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 5px rgba(70, 70, 70, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 0 20px 30px 20px;
}

@media screen {
  .icon-cten {
    width: 80%;
  }
}
</style>