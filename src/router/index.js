import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Application from '@/components/Application'
import AppBodyInfo from '@/components/AppBodyInfo'
import AppBodyHome from '@/components/AppBodyHome'
import UserInfo from '@/components/UserInfo'
import push from '@/components/push'

Vue.use(Router);

/**
 *The vue-router
 * ------------------------
 * The Router process page in vue
 * @ beforeEach: before route to eachOne, check token for some vue-router;
 *               and for some server-router, add authorization to request-headers
 * ------------------------
 */

const routes = [
  {path:'/', component:Hello, name:'hello'},
  {path:'/login', component:Login, name:'login'},
  {path: '/reg', component:Reg, name:'reg'},
  {path: '/push/:id', component:push, name:'push'},
  {path: '/application/:id', component: Application, name: 'application',
    children: [
      { path: 'info', component: AppBodyInfo },
      { path: 'home', component: AppBodyHome }
    ]
  },
  {path: '/user/:id/info', component: UserInfo, name: 'userinfo'}
];

const router = new Router({
  mode: 'history',
  routes
});



router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if(to.path == '/') {
    if(token != 'null' && token != null) {
      console.log("get token");
      next('/push');
    }
    else {
      next();
    }
  }
  else {
    Vue.http.headers.common['Authorization'] = token;
    next();
  }
});



export default router;
