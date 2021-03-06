import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from '../views/Home.vue';
import Answer6a from '../views/Answer6a.vue';
import Answer6b from '../views/Answer6b.vue';
import Answer6c from '../views/Answer6c.vue';
import Answer6d from '../views/Answer6d.vue';

import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth'
    },
    component: Login,
  },
  {
    path: '/answer6a',
    name: 'Answer6a',
    component: Answer6a,
  },
  {
    path: '/answer6b',
    name: 'answer6b',
    component: Answer6b,
  },
  {
    path: '/answer6c',
    name: 'answer6c',
    component: Answer6c,
  },
  {
    path: '/answer6d',
    name: 'answer6d',
    component: Answer6d,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
