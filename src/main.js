import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/scss/tailwind.scss';
import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.component('layout-default', () => import('./layouts/DefaultLayout.vue'));
Vue.component('layout-auth', () => import('./layouts/AuthLayout.vue'));

new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
