import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import { amountFilter, amountPriceFilter } from '@/filters'

Vue.config.productionTip = false
Vue.filter('price', amountPriceFilter)
Vue.filter('amount', amountFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
