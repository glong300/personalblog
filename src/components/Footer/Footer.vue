<template>
  <div class='container'>
    <span>Copyright © GitLong 2020 | Long的个人博客</span>
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
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container span {
    color: #fff;
    text-align: center;
  }
</style>