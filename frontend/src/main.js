import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCBQaWxhbiIsImVtYWlsIjoicmFmYWVscGlsYW5AaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjM2NTA0Nzc0LCJleHAiOjE2MzY3NjM5NzR9.3G_5M8rGbO4iSW4Kry65hhxWL1Ax9sA3EO9kK6hNHb4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')