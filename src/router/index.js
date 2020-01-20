import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Index from '../views/Index.vue'
import Find from '../views/Find.vue'
import Video from '../views/Video.vue'
import Yuncun from '../views/Yuncun.vue'
import Search from '../views/Search.vue'
import Searchdetail from '../views/Searchdetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/find'
  },
  {
    path:'/index',
    name:'index',
    component:Index,
    children:[{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/find',
      name: 'find',
      component: Find
    },{
      path: '/yuncun',
      name: 'yuncun',
      component: Yuncun
    },{
      path: '/video',
      name: 'video',
      component: Video
    }]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/searchdetail',
    name: 'searchdetail',
    component: Searchdetail
  }
]

const router = new VueRouter({
  routes
})

export default router
