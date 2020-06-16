import vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes,
    // ! 路由跳转回到页面顶部
    // scrollBehavior(to, from, savedPosition) {
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})