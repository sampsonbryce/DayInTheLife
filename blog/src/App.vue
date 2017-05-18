<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import NavMenu from './components/Nav.vue';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Posts,
    NavMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Abel|Cinzel|Montserrat+Subrayada');

/* Google fonts */

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  font-family: 'Montserrat Subrayada', sans-serif;
}

.subtitle {
  font-family: 'Cinzel', serif;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
