import Vue from 'vue'
import Router from 'vue-router'
/*@表示src目录*/
import Login from '../components/Login'
import Home from '../components/Home'
import Success from '../components/Success'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
     path: '/success',
     name: 'Success',
     component: Success
    }
  ],
})

//挂载导航卫士
//router.beforeEach((to, from, next)=>{
  //to表示将要访问的路径
  //from表示从那个路径跳转过来
  //next表示放行那个地址  如:next('/login') 强制跳转
//})
export default router;
