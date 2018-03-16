import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import content from '../pages/content'
import login from '../pages/login'
import message from '../pages/message'
// import people from '../pages/people'
import more from '../pages/more'
import my from '../pages/my'
import publish from '../pages/publish'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    // {
    //   path: '/people',
    //   name: 'people',
    //   component: people
    // },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    }

  ]
})
