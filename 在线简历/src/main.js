import Vue from 'vue'
import App from './App.vue'

// 引入全局样式
import './components/common/common.css'
// 引入全局js
import fun from './components/common/common'
Vue.prototype.$function = fun
// 创建全局组件
import aInput from './components/common/aInput/index'
Vue.use(aInput);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
