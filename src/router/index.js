import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },{
      path: '/content/:id',
      component: Content
    }
  ]
})
