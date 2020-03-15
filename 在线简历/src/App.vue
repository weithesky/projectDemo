<template>
  <div id="app">
    <aHeader @setNavShow="setNavShow"></aHeader>
    <div class="editArea" v-show="navNum === 0">
      <!-- 模块区域 -->
      <section class="moudular-area">
        <aMoudular @getItem="getItem"></aMoudular>
      </section>
      <section class="edit-area">
        <aEdit :itemData="itemData" :index="this.itemData" @setData="setData"></aEdit>
      </section>
    </div>
    <div v-show="navNum === 1" class="detail-area">
        <div class="nav">
      <a href="#info">基本信息</a>
      <a href="#work">工作经历</a>
      <a href="#project">开源项目及作品</a>
      <a href="#skill">专业技能</a>
      <a href="#edu">教育经历</a>
    </div>
      <aDetail class="aDetail"></aDetail>
    </div>
  </div>
</template>

<script>
import aHeader from './components/aheader'
import aMoudular from './components/modular'
import aEdit from './components/edit'
import aDetail from './components/detail'
export default {
  name: 'App',
  components: {
    aMoudular,
    aHeader,
    aEdit,
    aDetail
  },
  data () {
    return {
      navNum: 0,
      itemData: {}
    }
  },
  created() {
    let flag = this.$function.havaDataArr()
    if (!flag) {
      this.$function.setInitDataArr()
    }
  },
  mounted () {
    this.itemData = Object.assign({}, this.$children[1].editItem)
  },
  methods: {
    setNavShow (_num) {
      this.navNum = _num
    },
    getItem (_change) {
      this.itemData = Object.assign({}, _change)
    },
    setData (obj, index) {
      console.log('获取数据', obj, index)
    }
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  background: #f5f5f7;
  width: 100%;
  height: 100%;
  min-width: 1366px;
}
.editArea {
  display: flex;
}
.moudular-area {
  display: inline-block;
  margin: 10px 20px;
  width: 450px;
}
.edit-area {
  display: inline-block;
  margin: 10px 20px;
  padding-bottom: 50px;
  background: #fff;
  width: calc(100% - 530px);
  height: calc(100% - 150px);
  /* margin: 10px 20px; */
}
.detail-area {
 display: flex;
 justify-content: center;
 width: 100%;
 height: 90%;
}
.detail-area .aDetail {
  width: 960px;
  height: 100%;
  background: #fff;
}
.nav {
  position: fixed;
  top: 80px;
  left: 30px;
  background: #000;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  height: auto;
}
.nav a{
  display: block;
  appearance: none;
  text-decoration:none;
  color: #fff;
}
.nav a:hover{
  cursor: pointer;
  color: #ff4f4c;
}
</style>
