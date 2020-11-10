import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '../views/home.vue';
// import Login from '../views/auth/login.vue';
// import Answer6a from '../views/answer6a.vue';
// import Answer6b from '../views/answer6b.vue';
// import Answer6c from '../views/answer6c.vue';
// import Answer6d from '../views/answer6d.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/auth/login',
  //   name: 'AuthLogin',
  //   meta: {
  //     layout: 'auth'
  //   },
  //   component: Login,
  // },
  // {
  //   path: '/answer6a',
  //   name: 'Answer6a',
  //   component: Answer6a,
  // },
  // {
  //   path: '/answer6b',
  //   name: 'answer6b',
  //   component: Answer6b,
  // },
  // {
  //   path: '/answer6c',
  //   name: 'answer6c',
  //   component: Answer6c,
  // },
  // {
  //   path: '/answer6d',
  //   name: 'answer6d',
  //   component: Answer6d,
  // },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
