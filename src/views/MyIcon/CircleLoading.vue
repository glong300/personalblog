<template>
  <div class="circle-loading">20%</div>
</template>

<script>
export default {
  name: 'CircleLoading',
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
@component circle {
  @descendent loading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    font-size: 12px;
    font-weight: bold;
    color: rgb(172, 28, 177);
    box-shadow: 0 1px 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -24px;
      margin-top: -24px;
      display: block;
      border: 4px solid transparent;
      border-top-color: rgb(172, 28, 191);
      border-radius: 100%;
      width: 40px;
      height: 40px;
      animation: rotate1 infinite 1.5s ease;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -24px;
      margin-top: -24px;
      display: block;
      border: 4px solid transparent;
      border-bottom-color: rgb(229, 100, 246);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: rotate1 infinite 1.5s linear;
    }
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>