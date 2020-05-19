import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import store from './store'

// import { Modal } from 'ant-design-vue'
// Vue.use(Modal)
// import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
