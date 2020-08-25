<template>
  <div class="container">
    <ContentTitle>
      <template v-slot:h1slot>
        <h1 class="cont-title">
          <i>我的书单</i>
        </h1>
      </template>
    </ContentTitle>
    <BookList />
    <!-- <div class="markdown-body">
      <div class="book-list">
        <Code />
      </div>
    </div>-->
  </div>
</template>

<script>
import ContentTitle from './../../components/Content/ContentTitle'
import BookList from './BookList'

export default {
  name: 'MyBookList',
  data() {
    return {
      msg: 'MyBookList',
      bookList: ''
    }
  },
  components: {
    ContentTitle,
    BookList
  },
  mounted() {
    // let _this = this
    // this.axios
    //   .get('/data/a.md')
    //   .then(function(res) {
    //     _this.bookList = res.data
    //     console.log(res)
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style scoped>
.mybook-list {
  width: 55vw;
  height: 100%;
  margin: 0 auto;
  color: #424242;
  font-size: 16px;
  padding: 30px 0;
}

.mybook-list h1 {
  border: none;
}

.mybook-list p {
  line-height: 32px;
  color: #2c3e50;
}

.mybook-list p code {
  display: inline;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px 10px 3px 10px;
  border-radius: 3px;
  font-size: 16px;
  line-height: 16px;
}
.mybook-list pre {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 20px 0;
  padding: 0;
}

.mybook-list pre .language-js {
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
  .mybook-list {
    width: 80vw;
  }
}
</style>