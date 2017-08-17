import Vue from 'vue'
import Router from 'vue-router'

// 主入口
import Index from './../views/index'
import Home from './../views/home'
import Who from './../views/who'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            redirect: '/home',
            meta: {requireAuth: true},
            children: [
                {
                    path: 'home',
                    component: Home,
                    name: 'Home'
                },  {
                    path: 'who',
                    component: Who,
                    name: 'who'
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage.getItem('token')) {
            next()
        } else {
            // 提交store记住跳转前页面
            // 防止重置密码流程重定向错误
            next()
        }
    } else {
        next()
    }
})

// 滚动回页面顶部处理
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

export default router
