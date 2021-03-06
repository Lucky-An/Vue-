import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 中央事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')