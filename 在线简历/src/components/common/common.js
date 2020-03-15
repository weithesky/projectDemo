const objArr = {
  modularArr: [
    { key: 'base1', text: '基本信息', canDel: false, canAdd: false },
    { key: 'base2', text: '工作经历', canDel: true, canAdd: true },
    { key: 'base3', text: '开源项目及作品', canDel: true, canAdd: true },
    { key: 'base4', text: '专业技能', canDel: true, canAdd: false },
    { key: 'base5', text: '教育经历', canDel: true, canAdd: false }
  ]
}
function setInitDataArr (val = objArr) {
  let str = JSON.stringify(val)
  window.localStorage.setItem("modularArr",str);
}
function setDataArr (arr) {
  let obj = {modularArr: [...arr]}
  let str = JSON.stringify(obj)
  window.localStorage.setItem("modularArr",str);
}

function getAllDataArr () {
  let str = window.localStorage.getItem("modularArr");
  return JSON.parse(str)
}

function havaDataArr () {
  let str = window.localStorage.getItem("modularArr");
  return str ? true :false
}

function getDataArr () {

}

export default {
  setInitDataArr,
  setDataArr,
  havaDataArr,
  getDataArr,
  getAllDataArr
}
