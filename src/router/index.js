import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/pages/HomePage/index.vue'
import ScrollRefreshIndex from '@/pages/ScrollRefresh/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: HomeIndex
    },
    {
      path: '/scrollRefresh',
      name: 'scrollRefreshIndex',
      component: ScrollRefreshIndex
    }
  ]
})
