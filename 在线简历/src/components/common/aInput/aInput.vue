<template>
  <div class="aInput">
    <div class="aLabel" v-show="label !== ''">{{label}}</div>
    <div class="aArea" :class="{aotoWidth: label === ''}">
      <input class="diyInput" :value="value" type="text" @input="setData($event)" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    methods: {
      setData (e) {
        this.$emit('input', e.target.value)
      }
    },
  }
</script>

<style scoped>
.aInput {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aLabel {
  text-align: justify;
  width: 10%;
  height: 100%;
  min-width: 80px;
  padding-left: 1%;
}
.aArea {
  width: 90%;
  height: 100%;
  padding: 0 20px;
}
.aotoWidth {
  width: 100%;
}
.diyInput {
  -webkit-appearance: none;
  width: 90%;
  height: 40px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 2%;
}
.diyInput:focus {
  outline: none;
  border: 1px solid #ff4f4c;
}
</style>