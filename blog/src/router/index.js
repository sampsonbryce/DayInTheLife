import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from '../components/Posts.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import PostEditor from '../components/PostEditor.vue';
import FullPost from '../components/FullPost.vue';
import Auth from '../services/auth.js';

var router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Posts',
            component: Posts,
        },
        {
            path: '/posts/:type',
            name: 'PrivatePosts',
            component: Posts,
            meta: { requiresAuth: true },
            props: true
        },
        {
            path: '/post/:type/:id',
            name: 'FullPost',
            component: FullPost,
            props: true
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
    if (to.meta.requiresAuth && !Auth.methods.isAuthenticated()) {
        // if route requires auth and user isn't authenticated
        next('/login')
    } else {
        next()
    }
})


export default router;