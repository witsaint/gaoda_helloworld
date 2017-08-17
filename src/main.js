/**
 * Created by gaodingqiang on 2017/8/13.
 */
/* 引入vue和主页 */
import Vue from 'vue'
import router from './utils/router'
import App from './App'
import store from './utils/store'
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'
// import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* 实例化一个vue */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})