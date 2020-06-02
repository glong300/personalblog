<template>
  <div class="heart"></div>
</template>

<script>
export default {
  name: 'Heart',
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.heart {
  display: flex;
  margin: 5px 0;
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 1px 1px #9733a3);
  animation: shake infinite 1s ease;
}

.heart::before,
.heart::after {
  content: '';
  flex: 1;
  height: 30px;
  border-radius: 20px 20px 4px 4px;
  transform-origin: 50% 6px;
  display: block;
}

.heart::before {
  transform: rotate(-45deg);
  background-image: linear-gradient(90deg, red, #ff6666);
}

.heart::after {
  transform: rotate(45deg);
  background-image: linear-gradient(0, red, #ff8484);
}

@keyframes shake {
  0% {
    /* transform: perspective(20px) translate3d(0, 0, 0); */
    transform: scale(1);
  }
  50% {
    /* transform: perspective(20px) translate3d(0, 0, 3px); */
    transform: scale(1.1);
  }
  100% {
    /* transform: perspective(20px) translate3d(0, 0, 0); */
    transform: scale(1);
  }
}
</style>