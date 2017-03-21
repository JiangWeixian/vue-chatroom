import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router);

const routes=[
  {path:'/', component:Hello, name:'hello'},
  {path:'/login', component:Login, name:'login'}
];

export default new Router({
  mode: 'history',
  routes
})
