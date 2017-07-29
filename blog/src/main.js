import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueMarkdown from 'vue-markdown';
import VueRouter from 'vue-router';
import Bulma from 'bulma'; // import bulma css framework
import Icon from 'vue-awesome/components/Icon.vue'; // import font awesome vue icon
import 'vue-awesome/icons'; // import all font awesome icons
import router from './router';
import Auth from './services/auth'

Vue.use(Bulma);
Vue.use(VueResource);
Vue.use(VueRouter);

// define global components 
Vue.component('icon', Icon); // font awesome icons
Vue.component('vue-markdown', VueMarkdown); // markdown parser

Vue.mixin(Auth);

Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', Auth.methods.getAuthHeader());
    next();
});

var v = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});