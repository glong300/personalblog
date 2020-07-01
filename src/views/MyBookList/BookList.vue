<template>
  <div class="book-list">
    <div class="books">
      <div class="books-content">
        <h2 class="books-title">书单</h2>
        <div v-for="(item, index) in bookListData" :key="index" class="books-blogs">
          <font color="blue">[{{item.bookListDate}}]</font>
          <a>
            <font color="#32CD32" v-if="item.readingState==1">[已阅读]</font>
            <font color="#FFC125" v-else-if="item.readingState==2">[正在阅读]</font>
            <font color="#EE0000" v-else>[尚未阅读]</font>
            {{item.bookListName}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from 'assets/data/BookListData'
export default {
  name: 'BookList',
  data() {
    return {
      bookListData: []
    }
  },
  computed: {},
  mounted() {
    this.getBookListData()
  },
  methods: {
    getBookListData() {
      this.bookListData = data.bookListData
    }
  }
}
</script>

<style scoped>
.book-list {
  width: 100%;
  height: auto;
  background-color: #fff;
}
.books {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
}

.books .books-content {
  width: 73%;
  height: 100%;
  border-radius: 5px;
}

.books .books-content {
  color: #000;
  text-align: left;
}

.books .books-content .books-title {
  margin: 0;
}

.books .books-content .books-title,
.books .books-content .books-blogs {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #000;
}

.books-blogs font {
  width: 100px;
}

.books-blogs a {
  max-width: 90%;
  height: 100%;
  text-decoration: none;
  font-size: 16px;
  line-height: 16px;
  color: rgb(32, 32, 32);
  line-height: 80px;
  white-space: nowrap; /*不允许换行*/
  overflow: hidden; /*超出隐藏*/
  text-overflow: ellipsis; /*文本超出三点代替*/
  font-weight: 450;
  cursor: pointer;
}
.books-blogs a:hover {
  color: #0085a1;
}

.books-blogs a.notop {
  margin-left: 6px;
}

.books .books-label {
  width: 25%;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
}
@media screen and (max-width: 900px) {
  .books {
    width: 80%;
  }
  .books .books-content {
    width: 100%;
  }
  .books-label {
    display: none;
  }
  .books-blogs a {
    max-width: 70%;
  }
}
</style>