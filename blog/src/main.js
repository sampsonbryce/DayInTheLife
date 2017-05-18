import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMarkdown from 'vue-markdown'
import Bulma from 'bulma' // import bulma css framework
import Icon from 'vue-awesome/components/Icon.vue' // import font awesome vue icon
import 'vue-awesome/icons' // import all font awesome icons

Vue.use(Bulma);
Vue.use(VueResource);

// define global components 
Vue.component('icon', Icon); // font awesome icons
Vue.component('vue-markdown', VueMarkdown); // markdown parser

new Vue({
  el: '#app',
  render: h => h(App)
})
