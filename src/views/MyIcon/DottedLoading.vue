<template>
  <div class="dotted-loading">
    <div class="dotted dotted1"></div>
    <div class="dotted dotted2"></div>
    <div class="dotted dotted3"></div>
    <div class="dotted dotted4"></div>
    <div class="dotted dotted5"></div>
    <div class="dotted dotted6"></div>
    <div class="dotted dotted7"></div>
    <div class="dotted dotted8"></div>
    <div class="dotted dotted9"></div>
    <div class="dotted dotted10"></div>
    <div class="dotted dotted11"></div>
    <div class="dotted dotted12"></div>
  </div>
</template>

<script>
export default {
  name: 'DottedLoading',
  components: {}
}
</script>

<style scoped>
.dotted-loading {
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
.dotted {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.dotted::before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #26a2ff;
  border-radius: 100%;
  animation: shake 1.2s infinite ease-in-out both;
}
.dotted1 {
  transform: rotate(330deg);
}
.dotted2 {
  transform: rotate(300deg);
}
.dotted3 {
  transform: rotate(270deg);
}
.dotted4 {
  transform: rotate(240deg);
}
.dotted5 {
  transform: rotate(210deg);
}
.dotted6 {
  transform: rotate(180deg);
}
.dotted7 {
  transform: rotate(150deg);
}
.dotted8 {
  transform: rotate(120deg);
}
.dotted9 {
  transform: rotate(90deg);
}
.dotted10 {
  transform: rotate(60deg);
}
.dotted11 {
  transform: rotate(30deg);
}
.dotted12 {
  transform: rotate(0);
}

.dotted.dotted1::before {
  animation-delay: 0;
}
.dotted.dotted2::before {
  animation-delay: -0.1s;
}
.dotted.dotted3::before {
  animation-delay: -0.2s;
}
.dotted.dotted4::before {
  animation-delay: -0.3s;
}
.dotted.dotted5::before {
  animation-delay: -0.4s;
}
.dotted.dotted6::before {
  animation-delay: -0.5s;
}
.dotted.dotted7::before {
  animation-delay: -0.6s;
}
.dotted.dotted8::before {
  animation-delay: -0.7s;
}
.dotted.dotted9::before {
  animation-delay: -0.8s;
}
.dotted.dotted10::before {
  animation-delay: -0.9s;
}
.dotted.dotted11::before {
  animation-delay: -1s;
}
.dotted.dotted12::before {
  animation-delay: -1.1s;
}

@keyframes shake {
  /* 0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  } */
  0%,
  39% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>