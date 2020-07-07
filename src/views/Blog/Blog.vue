<template>
  <div class="blog">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1 class="tag">
          <i>JavaScript</i>
        </h1>
      </template>
      <template v-slot:h1slot>
        <h1 class="cont-title">
          <i>我的书单</i>
        </h1>
      </template>
    </ContentTitle>
    <div class="markdown-body">
      <div class="blog-cont">
        <component :is="componentName"></component>
      </div>
    </div>
  </div>
</template>
<script>
import ContentTitle from 'components/Content/ContentTitle'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

const context = require.context('@/md', false, /\.md/)
const moduleStore = {
  ContentTitle
}

context.keys().forEach(file => {
  // 获取组件配置
  // const componentConfig = context(fileName)
  let arr = []
  file
    .split('./')[1]
    .split('.')[0]
    .split('-')
    .forEach(item => {
      arr.push([item[0].toUpperCase() + item.slice(1)])
    })
  const fileName = arr.join('')
  const fileModule = context(file).default
  moduleStore[fileName] = {
    ...fileModule
  }
  console.log(moduleStore)
})

export default {
  name: 'Blog',
  data() {
    return {
      code: ''
    }
  },
  components: moduleStore,
  computed: {
    componentName() {
      let arr = []
      console.log(this.$route.params.id)
      this.$route.params.id
        .split('-')
        .forEach(item => {
          arr.push([item[0].toUpperCase() + item.slice(1)])
        })

      return arr.join('')
    }
  },
  mounted() {}
}
</script>

<style scoped>
.blog-cont {
  width: 55vw;
  height: 100%;
  margin: 0 auto;
  color: #424242;
  font-size: 16px;
  padding: 30px 0;
}

.blog-cont h1 {
  border: none;
}

.blog-cont p {
  line-height: 32px;
  color: #2c3e50;
}

.blog-cont p code {
  display: inline;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px 10px 3px 10px;
  border-radius: 3px;
  font-size: 16px;
  line-height: 16px;
}
.blog-cont pre {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 20px 0;
  padding: 0;
}

.blog-cont pre .language-js {
  padding: 1.25rem 1.5rem;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
  color: rgb(219, 219, 219);
  display: block;
}

@media screen and (max-width: 375px) {
  .cont-title i {
    font-size: 5rem;
  }
  .blog-cont {
    width: 80vw;
  }
}
</style>