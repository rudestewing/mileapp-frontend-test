import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/scss/tailwind.scss';
import router from './router';
import store from './store';
import './assets/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './plugins/vee-validate';

Vue.config.productionTip = false

Vue.component('layout-default', () => import('./layouts/DefaultLayout.vue'));
Vue.component('layout-auth', () => import('./layouts/AuthLayout.vue'));

new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
