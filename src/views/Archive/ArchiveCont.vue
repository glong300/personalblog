<template>
  <div class="archive">
    <div class="warpper">
      <div class="war-content">
        <h2 class="war-title">目录</h2>
        <div v-for="(item, index) in blogsData" :key="index" class="war-blogs">
          <font color="blue">[{{item.archiveDate}}]</font>
          <a :href="'#/'+item.link" :class="[index==0?'':'notop']">
            <font color="#EE0000" v-show="index==0">[置顶]</font>
            {{item.archiveTitle}}
          </a>
        </div>
      </div>
      <div class="war-label"></div>
    </div>
  </div>
</template>

<script>
import ArchiveData from 'assets/data/archiveData'
import appUtil from './../../network/request'

export default {
  name: 'ArchiveCont',
  data() {
    return {
      blogsData: []
    }
  },
  computed: {
    // }
  },
  mounted() {
    this.getArchiveData()
  },
  methods: {
    getArchiveData() {
      appUtil.request({
        url: 'getArchiveData',
        methods: 'GET'
      })
      .then(res => {
        console.log(res)
        if (res.resCode == 1) {
          this.blogsData = res.data
        }
      })
    }
  }
}
</script>

<style scoped>
.archive {
  width: 100%;
  height: auto;
  background-color: #fff;
}
.warpper {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
}

.warpper .war-content {
  width: 73%;
  height: 100%;
  border-radius: 5px;
}

.warpper .war-content {
  color: #000;
  text-align: left;
}

.warpper .war-content .war-title {
  margin: 0;
}

.warpper .war-content .war-title,
.warpper .war-content .war-blogs {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #000;
}

.war-blogs font {
  padding-right: 10px;
}

.war-blogs a {
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
}
.war-blogs a:hover {
  color: #0085a1;
}

.war-blogs a.notop {
  margin-left: 6px;
}

.warpper .war-label {
  width: 25%;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
}
@media screen and (max-width: 900px) {
  .warpper {
    width: 80%;
  }
  .warpper .war-content {
    width: 100%;
  }
  .war-label {
    display: none;
  }
  .war-blogs a {
    max-width: 70%;
  }
}
</style>