import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Index from '../views/Index.vue'
import Find from '../views/Find.vue'
import Video from '../views/Video.vue'
import Yuncun from '../views/Yuncun.vue'
import Search from '../views/Search.vue'
import Searchdetail from '../views/Searchdetail.vue'
import Singdetail from '../views/Singdetail.vue'
import Says from '../views/Says.vue'
import Songsheetdetail from '../views/Songsheetdetail.vue'
import Songfeilei from '../views/Songfeilei.vue'
import Songfeileidetail from '../views/Songfeileidetail.vue'
import Paihanglist from '../views/Paihanglist.vue'
import Paihangdetail from '../views/Paihangdetail.vue'
import Singer from '../views/Singer.vue'
import Videodetail from '../views/Videodetail.vue'
import Videosing from '../views/Videosing.vue'

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
  },
  {
    path: '/singdetail',
    name: 'singdetail',
    component: Singdetail
  },
  {
    path:'/says',
    name:'says',
    component:Says
  },
  {
    path:'/songsheetdetail',
    name:'songsheetdetail',
    component:Songsheetdetail
  },
  {
    path:'/songfeilei',
    name:'songfeilei',
    component:Songfeilei
  },
  {
    path:'/songfeileidetail',
    name:'songfeileidetail',
    component:Songfeileidetail
  },
  {
    path:'/paihanglist',
    name:'paihanglist',
    component:Paihanglist
  },
  {
    path:'/paihangdetail',
    name:'paihangdetail',
    component:Paihangdetail
  },
  {
    path:'/singer',
    name:'singer',
    component:Singer
  },
  {
    path:'/videodetail',
    name:'videodetail',
    component:Videodetail
  },
  {
    path:'/videosing',
    name:'videosing',
    component:Videosing
  }
]

const router = new VueRouter({
  routes
})

export default router
