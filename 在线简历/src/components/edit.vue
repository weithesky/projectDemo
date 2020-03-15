<template>
  <div class="edits">
    <span class="alert" v-show="alertFlag">{{msg}}</span>
    <div class="aTitle">{{itemData.text}}</div>
    <!-- 基本信息 -->
    <section v-show="itemData.key === 'base1'">
      <aInput label="姓名"
              placeholder="陈媛媛 Abbey"
              v-model="itemData.name"></aInput>
      <aInput label="学历"
              placeholder="本科"
              v-model="itemData.edu"></aInput>
      <aInput label="性别"
              placeholder="男"
              v-model="itemData.sex"></aInput>
      <aInput label="电话"
              placeholder="138-8888-8888"
              v-model="itemData.phone"></aInput>
      <aInput label="邮箱"
              placeholder="abbey@email.com"
              v-model="itemData.email"></aInput>
      <aInput label="地址"
              placeholder="深圳"
              v-model="itemData.address"></aInput>
      <aInput label="工作年限"
              placeholder="n年"
              v-model="itemData.year"></aInput>
      <aInput label="求职意向"
              placeholder="web前端"
              v-model="itemData.work"></aInput>
      <span class="t">社交信息(选填)</span>
      <aInput label="个人网站"
              placeholder="weifun.club"
              v-model="itemData.site"></aInput>
      <aInput label="gitHub"
              placeholder="github.com/weithesky"
              v-model="itemData.github"></aInput>
      <aInput label="微信"
              placeholder="微信"
              v-model="itemData.wechat"></aInput>
      <span class="saveBtn" @click="save(1)">保存</span>
    </section>
    <!-- 工作经历 -->
    <section class="base2" v-show="itemData.key === 'base2'">
        <aInput placeholder="公司名称"
                v-model="itemData.company"></aInput>
        <aInput placeholder="所在城市"
                v-model="itemData.city"></aInput>
        <aInput placeholder="职位"
                v-model="itemData.job"></aInput>
        <aInput placeholder="起止时间"
                v-model="itemData.time"></aInput>
        <span class="t">工作内容</span>
        <textarea v-model="itemData.workcontent" class="editTextArea" ref="baseEdit2"></textarea>
        <span class="saveBtn" @click="save(2)">保存</span>
    </section>
    <!-- 作品经历 -->
    <section class="base3" v-show="itemData.key === 'base3'">
        <aInput placeholder="项目名称"
                v-model="itemData.project"></aInput>
        <aInput placeholder="所在城市"
                v-model="itemData.city"></aInput>
        <aInput placeholder="你的角色"
                v-model="itemData.job"></aInput>
        <aInput placeholder="起止时间"
                v-model="itemData.time"></aInput>
        <span class="t">经历描述</span>
        <textarea class="editTextArea" v-model="itemData.workcontent" ref="baseEdit3"></textarea>
        <span class="saveBtn" @click="save(3)">保存</span>
    </section>
    <!-- 专业技能 -->
    <section class="base4" v-show="itemData.key === 'base4'">
        <textarea v-model="itemData.majorcontent"  class="editTextArea" ref="baseEdit4"></textarea>
        <span class="saveBtn" @click="save(4)">保存</span>
    </section>
    <!-- 教育经历 -->
    <section class="base5" v-show="itemData.key === 'base5'">
        <aInput placeholder="学校名称"
                v-model="itemData.school"></aInput>
        <aInput placeholder="专业"
                v-model="itemData.major"></aInput>
        <aInput placeholder="最高学历"
                v-model="itemData.edu"></aInput>
        <aInput placeholder="起止时间"
                v-model="itemData.time"></aInput>
        <span class="t">教育描述</span>
        <textarea v-model="itemData.educontent" class="editTextArea" ref="baseEdit5"></textarea>
        <span class="saveBtn" @click="save(5)">保存</span>
    </section>
  </div>
</template>

<script>
export default {
  props: ['itemData', 'index'],
  watch: {
    itemData () {
      // console.log(value)
    }
  },
  data () {
    return {
      msg: '操作成功',
      timer: null,
      alertFlag: false,
      objTemp: {}
    }
  },
  mounted() {
    this.objTemp = Object.assign({}, this.itemData)
    console.log('itemData', this.itemData)
  },
  methods: {
    save (flag) {
      let temp = {}
      if (flag === 1) {
        let obj = {name: 'Abbey',sex: '男',edu: '本科',  phone: '138-8888-8888', email: 'abbey@email.com', address: '深圳', year: 'n年',
        work: 'web前端', site: 'weifun.club', github: 'github.com/weithesky', wechat: '微信'}
        temp = Object.assign({}, obj, this.itemData)
        console.log(temp)
      }else if (flag === 2) {
        let workcontent = this.$refs.baseEdit2.value
        let obj = {company: '', city: '', job: '', time: '', workcontent: workcontent}
        temp = Object.assign({}, obj, this.itemData)
        console.log(temp)
      } else if (flag === 3) {
        let workcontent = this.$refs.baseEdit3.value
        let obj = {project: '', city: '', job: '', time: '', workcontent: workcontent}
        temp = Object.assign({}, obj, this.itemData)
        console.log(temp)
      } else if (flag === 4) {
        let majorcontent = `${this.$refs.baseEdit4.value}`
        let obj = {majorcontent: majorcontent}
        temp = Object.assign({}, obj, this.itemData)
        console.log('专业技能', temp)
      } else if (flag === 5) {
        let obj = {school: '', edu: '', time: '', major: ''}
        let educontent = this.$refs.baseEdit5.value
        obj.educontent = educontent
        temp = Object.assign({}, obj, this.itemData)
        console.log('教育经历', temp)
      } else {
        console.log('出错了')
      }
      // 存储编辑数据
      let data = this.$function.getAllDataArr()
      let arr = [...data.modularArr]
      let index = window.localStorage.getItem("modularNum")
      arr[index] = temp
      this.$function.setDataArr(arr)
      this.showAlert()
      this.$emit('setData', temp, this.index)
    },
    showAlert () {
      console.log('执行')
      if (this.timer) {
        return
      }
      this.alertFlag = true
      this.timer = setTimeout(() => {
        this.alertFlag = false
        this.timer = null
      }, 1500);
    }
  },
}
</script>

<style scoped>
.edits {
  width: 100%;
  height: 100%;
}
.aTitle {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.editTextArea {
  outline: 0;
  appearance: none;
   width: 90%;
  height: 200px;
  resize: none;
  border: 1px solid #ccc;
   margin: 20px 1%;
  padding: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.editTextArea:focus {
  border: 1px solid #ff4f4c;
}
.alert {
  position: fixed;
  left: 50%;
  top: 30px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border-radius: 6px;
  border: green 1px solid;
  color: #000;
  transform: translate3d(-50%,0,0);
  background: rgb(146, 214, 146);
}
/* .alert::before {
  display: inline-block;
  width: 12px;
  height: 12px;
  color: #ccc;
  border-radius: 50%;
  background: green;
} */
</style>