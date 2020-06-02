<template>
  <div class="landmark"></div>
</template>

<script>
export default {
  name: 'LandMark',
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.landmark {
  position: relative;
  display: block;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  filter: drop-shadow(0 1px 2px #973340a3);
  background-image: linear-gradient(0, red, #ff8484);
  animation: shakes infinite 1s ease;
}

.landmark::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: -2;
  display: block;
  margin-left: -5px;
  width: 10px;
  height: 10px;
  background-color: red;
  transform: scale(1.3) translateY(1.5px) rotate(45deg);
}

.landmark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  margin-top: -5px;
  margin-left: -5px;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}

@keyframes shakes {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>