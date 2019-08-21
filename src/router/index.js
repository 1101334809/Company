import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../page/home');
const services = () => import('../page/services');
const about = () => import('../page/about');
const project = () => import('../page/project');
const projectDetail = () => import('../page/projectDetail');
// const home = () => import('@/page/home')
// import home from '@/page/home'
// import services from '@/page/services'
// import about from '@/page/about'
// import project from '@/page/project'
// import projectDetail from '../page/projectDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/project/:id',
      name: 'projectInfo',
      component: projectDetail
    },
    { path: '*', component: home  }
  ]
})
