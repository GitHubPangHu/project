import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import login from '../views/login'
import index from '../views/index'
import info from '../views/info'
import add from '../views/add'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '欢迎浏览人才列表',
    component: login
  },
  {
    path: '/index',
    name: '人才管理',
    component: index,
	children:[
		{
			path:'/info',
			name:'人才列表',
			component:info
		},
		{
			path:'/add',
			name:'添加人才信息',
			component:add
		}
	]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
