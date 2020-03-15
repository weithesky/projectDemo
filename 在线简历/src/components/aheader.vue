<template>
  <div class="aHeader">
    <ul class="link">
      <li @click="goto('create', 0)"  :class="{active: activeNum === 0}">引导创建</li>
      <li @click="goto('preview', 1)" :class="{active: activeNum === 1}">预览编辑</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNum: 0
      }
    },
    methods: {
      goto (url, num) {
        this.activeNum = num
        this.$emit('setNavShow', num)
      }
    },
  }
</script>

<style scoped>
.aHeader {
  width: 100%;
  background: #fff;
}
.link {
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 56px;
  width: 100%;
}
.link li {
  display: inline-block;
  width: 75px;
  height: 100%;
  text-align: center;
  line-height: 56px;
  cursor: pointer;
}
.active {
  background: linear-gradient(#ff4f4c,#ff4f4c) bottom no-repeat;
  background-size: 50% 2px;
}
</style>