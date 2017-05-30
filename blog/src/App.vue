<template>
  <div id="app">
    <toast></toast>
    <div id="main">
      <nav-menu></nav-menu>
      <!--<posts></posts>-->
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import NavMenu from './components/Nav.vue';
import PageFooter from './components/Footer.vue';
import Toast from './components/Toast.vue';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'app',
  components: {
    Posts,
    NavMenu,
    PageFooter,
    Toast
  },
  beforeMount (){
    console.log('before mount', this);
  }
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
  flex: 1;
}

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
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
