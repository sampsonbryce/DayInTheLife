import Vue from 'vue';
import Router from 'vue-router';
import Posts from '../components/Posts.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ],
});