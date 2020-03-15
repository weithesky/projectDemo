<template>
  <div class="moudular">
    <ul class="moudular-list">
      <li class="mItem" @click="selectItem(index, item)"
          v-for="(item, index) of modularArr"
          :key="'modular' +index">
        <span :class="{active: index === modularNum}">{{item.text}}</span>
        <section class="operator">
          <span v-if="item.canDel"
          @click.stop="opera(0, index, item)"
                class="del"></span>
          <span v-if="item.canAdd"
          @click.stop="opera(1, index, item)"
                class="add"></span>
        </section>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modularNum: 0,
      editItem: {},
      modularArr: []
    }
  },
  created() {
    let data = this.$function.getAllDataArr()
    this.modularArr = [...data.modularArr]
    console.log('获取数据', data.modularArr)
  },
  mounted() {
    console.log('mounted', this.modularArr)
    this.editItem = Object.assign({}, this.modularArr[this.modularNum])
    window.localStorage.setItem("modularNum",this.modularNum);
  },
  watch: {
    'modularArr.length' (val) {
      if (val === 1) {
        this.modularNum = 0
      }
    },
    modularNum (val) {
      window.localStorage.setItem("modularNum",val);
    }
  },
  methods: {
    selectItem (index, item) {
      console.log('selectItem', this.modularArr)
      this.modularNum = index
      this.$emit('getItem', this.modularArr[index])
      console.log(item)
    },
    opera (flag, index) {
      let obj = Object.assign({}, this.modularArr[index])
      let tempArr = [...this.modularArr]
      if (flag === 0) {
        // 删除
        tempArr.splice(index,1)
      } else {
        // 新增
        tempArr.splice(index, 0, obj)
      }
      this.modularArr = [...tempArr]
      this.$function.setDataArr([...tempArr])
      // console.log('所有数据', this.$function.getAllDataArr())
    }
  },
}
</script>

<style  scoped>
.moudular {
    width: 100%;
  height: auto;
  background: #fff;
}
.moudular-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mItem {
  cursor: pointer;
  height: 110px;
  /* line-height: 110px; */
  position: relative;
  padding-left: 110px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.active::before {
  content: "";
  width: 5px;
  height: 35px;
  position: absolute;
  display: inline-block;
  background: linear-gradient(#ff4f4c, #ff4f4c) left no-repeat;
  background-size: 100% 30px;
  left: 90px;
  transform: translate3d(0, -25%, 0);
  /* top: -5px; */
}
.mItem:hover .operator {
  display: inline-block;
}
.operator {
  display: none;
}
.operator span {
  display: inline-block;
  background-size: 100%;
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin-inline-start: 10px;
  position: relative;
}
.del {
  background: url("../assets/images/del.png") no-repeat center;
}
.add {
  background: url("../assets/images/add.png") no-repeat center;
}
.del::before,
.add::before {
  content: "删除模块";
  height: 24px;
  font-size: 12px;
  width: 60px;
  display: none;
  line-height: 24px;
  text-align: center;
  background: #000;
  color: #fff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: -30px;
  border-radius: 5px;
  transform: translate(-50%, 0%);
}
.add::before {
  content: "新增模块";
}
.del:hover::before,
.add:hover::before {
  display: inline-block;
}
.del::after,
.add::after {
  width: 0px;
  height: 0px;
  content: "";
  display: none;
  border: 5px solid #000;
  border-top-color: #000;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translate(-50%, 0%);
}
.del:hover::after,
.add:hover::after {
  display: inline-block;
}
</style>