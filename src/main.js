import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import { amountFilter } from '@/filters'

Vue.config.productionTip = false
Vue.filter('price', amountFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
