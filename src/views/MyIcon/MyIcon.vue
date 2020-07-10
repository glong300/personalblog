<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1>
          <i>Icon</i>
        </h1>
      </template>
    </ContentTitle>
    <div class="icon-cten" ref="maxicon">
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
      <div class="icon-ks" v-for="(item, index) in maxIconNum" :key="index"></div>
    </div>
    <div class="icon-a">
      <span>asdfasdfasdf</span>
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/Content/ContentTitle'
import Badge from './Badge'
import LandMark from './LandMark'
import Heart from './Heart'
import Email from './Email'
import CircleLoading from './CircleLoading'
import DottedLoading from './DottedLoading'
import Toggle from './Toggle'

const compontns = {
  asse: {
    ContentTitle,
    Badge,
    LandMark,
    Heart,
    Email,
    CircleLoading,
    DottedLoading,
    Toggle
  },
  length: 7
}

export default {
  name: 'Icon',
  data() {
    return {
      maxicon: 7
    }
  },
  components: compontns.asse,
  computed: {
    maxIconNum() {
      let remainder = compontns.length % this.maxicon
      return this.maxicon - remainder
    }
  },
  mounted() {
    let _this = this
    _this.maxicon = Math.floor(_this.$refs.maxicon.scrollWidth / 140)
    window.onresize = function windowResize() {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      _this.maxicon = Math.floor(_this.$refs.maxicon.scrollWidth / 140)
    }
  }
}
</script>

<style scoped>
@component container {
  width: 100%;
  height: 100%;
}

@component icon {
  @descendent cten {
    width: 50vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
  }
  @descendent k {
    width: 100px;
    height: 100px;
    box-shadow: 1px 1px 5px rgba(70, 70, 70, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: 0 20px 30px 20px;
    transition: all 1s ease;
  }
  @descendent ks {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: 0 20px 30px 20px;
  }
  
  @descendent a {
    color: red;

    &:active {
      background-color: red;
    }
  }
}

@media screen {
  .icon-cten {
    width: 80%;
  }
}
</style>