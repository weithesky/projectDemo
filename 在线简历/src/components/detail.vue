<template>
  <div class="details">
    <!-- 基本信息 -->
    <span class="aTitle" id="info">基本信息</span>
    <section class="aitem">
      <h2>{{modularArr[0].name}}</h2>
      <div class="info-line1">
        <li>
          <span>求职意向：</span>
          <span>{{modularArr[0].work}}</span>
        </li>
        <li>
          <span>工作年限：</span>
          <span>{{modularArr[0].year}}</span>
        </li>
        <li>
          <span>最高学历：</span>
          <span>{{modularArr[0].edu}}</span>
        </li>
        <li>
          <span>性别：</span>
          <span>{{modularArr[0].sex}}</span>
        </li>
        <li>
          <span>联系电话：</span>
          <span>{{modularArr[0].phone}}</span>
        </li>
        <li>
          <span>邮箱：</span>
          <span>{{modularArr[0].email}}</span>
        </li>
        <li>
          <span>工作地址：</span>
          <span>{{modularArr[0].address}}</span>
        </li>
        <li v-show="modularArr[0].site">
          <span>个人网站：</span>
          <span>{{modularArr[0].site}}</span>
        </li>
        <li v-show="modularArr[0].github">
          <span>github：</span>
          <span>{{modularArr[0].github}}</span>
        </li>
        <li v-show="modularArr[0].wechat">
          <span>微信：</span>
          <span>{{modularArr[0].wechat}}</span>
        </li>
      </div>
    </section>
    <!-- 工作经历 -->
    <span class="aTitle" id="work">工作经历</span>
    <section class="workArea-fa">
      <div v-for="(item,index) of workList" :key="'work'+index">
        <div class="workItem">
          <li>{{item.company}}</li>
          <li>{{item.job}}</li>
          <li>{{item.city}}</li>
          <li>{{item.time}}</li>
        </div>
        <div class="show-Area workArea">
          <textarea class="showArea" readonly  :value="skillObj.majorcontent"></textarea>
        </div>
      </div>
    </section>
     <!-- 开源项目及作品 -->
     <span class="aTitle" id="project">开源项目及作品</span>
     <section class="projectArea">
       <li class="projectLi" v-for="(item, index) of projectList" :key="'project'+index">
         <div class="project">
           <span>{{item.project}}</span>·
           <span>{{item.job}}</span>·
           <span>{{item.city}}</span>·
           <span>{{item.time}}</span>
         </div>
         <div>
           <textarea class="showArea" readonly  :value="item.workcontent"></textarea>
         </div>
       </li>
     </section>
    <!-- 专业技能 -->
    <span class="aTitle" id="skill">专业技能</span>
    <section class="show-Area">
      <textarea class="showArea" readonly  :value="skillObj.majorcontent"></textarea>
    </section>
    <!-- 教育经历 -->
    <span class="aTitle" id="edu">教育经历</span>
    <section v-for="(item, index) of eduList" :key="'edu'+index">
      <div class="eduList">
        <span class="">{{item.school}}</span>
        <span class="">{{item.major}}</span>
        <span class="">{{item.edu}}</span>
        <span class="">{{item.time}}</span>
      </div>
      <div class="show-Area">
      <textarea class="showArea" readonly  :value="item.educontent"></textarea>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modularArr: [],
      workList: [],
      projectList: [],
      eduList: [],
      skillObj: {}
    }
  },
  created() {
    let data = this.$function.getAllDataArr()
    this.modularArr = [...data.modularArr]
    let skillArr = this.modularArr.filter ((item) => {
      return item.key === 'base4'
    })
    let eduArr = this.modularArr.filter ((item) => {
      return item.key === 'base5'
    })
    let workArr = this.modularArr.filter ((item) => {
      return item.key === 'base2'
    })
    let projectArr = this.modularArr.filter ((item) => {
      return item.key === 'base3'
    })
    this.skillObj = skillArr[0]
    this.eduList = [...eduArr]
    this.workList = [...workArr]
    this.projectList = [...projectArr]
    console.log('工作', this.workList)
  },
}
</script>

<style scoped>
.details {
  padding: 1%;
  width: 100%;
  background: #fff;
  margin: 1%;
  position: relative;
}
h2{
  text-align: center;
}
.info-line1 {
  text-align: center;
}
.info-line1 li {
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: center;
}
.info-line1 li span {
  display: inline-block;
  width: 400px;
  height: 30px;
  line-height: 30px;
}
.info-line1 li span:nth-of-type(1) {
  text-align: right;
}
.info-line1 li span:nth-of-type(2) {
  text-align: left;
  padding-left: 30px;
}
.aTitle {
  display: block;
  margin: 10px 0;
  width: 98%;
  height: 36px;
  line-height: 36px;
  background: linear-gradient(to right, #2b2b2b, #ccc);
  border-left: 4px solid #ff4f4c;
  padding-left: 20px;
  color: #fff;
}
.show-Area {
  display: flex;
  justify-content: center;
}
.eduList {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.eduList span {
  width: 33%;
  display: inline-block;
}
.showArea {
  appearance: none;
  outline: none;
  border: 1px gray solid;
  width: 100%;
  height: 240px;
  resize: none;
  padding: 10px;
}
li {
  list-style: none;
  padding-right: 20px;

}
.workArea-fa {
  position: relative;
}
.workArea-fa::before {
  position: absolute;
  top: 0;
  content: '';
  height: 100%;
  width: 1px;
  background: green;
  left: 30%;
}
.workItem {
  width: 30%;
  display: inline-block;
  text-align: right;
  color: #ccc;
  position: relative;
}
.workItem::after {
  width: 12px;
  height: 12px;
  content: '';
  border-radius: 50%;
  position: absolute;
  border: 2px #ff4f4c solid;
  background: #fff;
  top: 50%;
  right: 0;
  transform: translate3d(50%,0,0);
}
.workItem li:nth-of-type(1) {
  font-size: 20px;
  font-style: italic;
  color: #2b2b2b;
}
.workArea {
  width: 60%;
  padding: 20px;
  display: inline-block;
}
.workArea textarea {
  border: 0;
  height: auto;
}
.projectArea {
  width: 96%;
  padding-left: 20px;
  background: #ccc;
  border-left: green 5px solid;
}
.projectLi {
  width: 100%;
  padding-top: 4px; 
  background: #ccc;
}
.projectArea  textarea{
  border: none;
  height: auto;
  background: #ccc;
}
.project span{
  margin-right: 2px;
}
</style>