<template>
  <div class="warpper">
    <div class="warpper-img">
      <slot name="tag"></slot>
      <slot name="h1slot"></slot>
      <slot name="spanslot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: {
    father: String // 接受父组件的值
  },
  components: {}
}
</script>

<style scoped>
.warpper {
  width: 100%;
  height: 400px;
  background-color: #303030;
  text-align: center;
}

.warpper .warpper-img {
  width: 55%;
  height: 100%;
  margin: 0 auto;
  background-color: 303030;
  overflow: hidden;
  /* text-align: left; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.warpper .warpper-img .tag {
  max-width: 80px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 30px;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  position: relative;
  top: 30px;
}

.warpper .warpper-img .tag i {
  width: 100%;
}

.warpper .warpper-img h1 {
  color: #fff;
  font-size: 80px;
  margin: 10px 0;
}

.warpper .warpper-img span {
  color: #fff;
  font-size: 20px;
  /* font-style: italic; */
  font-weight: 300;
  font-family: Lora, 'Times New Roman', serif;
}

@media screen and (max-width: 375px) {
  .warpper .warpper-img {
    width: 80%;
  }
}
</style>
