import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/dashboard*',
        name: 'Dashboard',
        component: DashBoard
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/notFound',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/add/payment/:page',
        name: 'addValue',
        component: DashBoard

    },
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// const routeCategory = this.$route.params.page; // получаем страницу
// const routeValue = this.$route.query.value  // получаем значение

export default router