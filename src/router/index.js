import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/answer6a',
    name: 'Answer6a',
    component: () => import('../views/Answer6a.vue')
  },
  {
    path: '/answer6b',
    name: 'Answer6b',
    component: () => import('../views/Answer6b.vue')
  },
  {
    path: '/answer6c',
    name: 'Answer6c',
    component: () => import('../views/Answer6c.vue')
  },
  {
    path: '/answer6d',
    name: 'Answer6d',
    component: () => import('../views/Answer6d.vue')
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
