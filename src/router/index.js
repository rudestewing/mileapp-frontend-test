import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/auth/login',
    name: 'AuthLogin',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/auth/login.vue')
  },
  {
    path: '/auth/register',
    name: 'AuthRegister',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/auth/register.vue')
  },
  {
    path: '/answer6a',
    name: 'Answer6a',
    component: () => import('../views/answer6a.vue')
  },
  {
    path: '/answer6b',
    name: 'answer6b',
    component: () => import('../views/answer6b.vue')
  },
  {
    path: '/answer6c',
    name: 'answer6c',
    component: () => import('../views/answer6c.vue')
  },
  {
    path: '/answer6d',
    name: 'answer6d',
    component: () => import('../views/answer6d.vue')
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
