<template>
  <div class='container'>
    <span>Copyright © Gityuan 2020 | Xlong的个人博客</span>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .container {
    width: 70%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .container span {
    color: #fff;
    margin-bottom: 30px;
  }
</style>