import Vue from 'vue';
import Router from 'vue-router';
import Posts from '../components/Posts.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import PostEditor from '../components/PostEditor.vue';
import Auth from '../services/auth.js';

Vue.use(Router);
var router = new Router({
    routes: [{
            path: '/',
            name: 'Posts',
            component: Posts,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/posteditor',
            name: 'PostEditor',
            component: PostEditor,
            meta: { requiresAuth: true }
        }
    ],
});


router.beforeEach((to, from, next) => {
    console.log('transition', to, from);
    // if (!Auth.authenticated) {
    if (to.meta.requiresAuth && !Auth.authenticated) {
        // if route requires auth and user isn't authenticated
        next('/login')
    } else {
        next()
    }
})


export default router;