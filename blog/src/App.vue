<template>
  <div id="app">
    <div id="wrap">
      <div id="main">
        <nav-menu></nav-menu>
        <router-view></router-view>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import NavMenu from './components/Nav.vue';
import PageFooter from './components/Footer.vue';
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
    NavMenu,
    PageFooter
  },
}
</script>

<style>
/* Google fonts */

@import url('https://fonts.googleapis.com/css?family=Abel|Cinzel|Montserrat+Subrayada');

* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

#main {
  overflow: auto;
  padding-bottom: 150px;
}

#wrap {
  min-height: 100%;
}

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
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
