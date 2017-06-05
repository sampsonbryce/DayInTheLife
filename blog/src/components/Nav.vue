<template>
<nav class="nav">
  <div class="nav-left">
    <router-link class="nav-item" to='/'>
        <h2 class="title is-3">Day In The Life</h2>
    </router-link>
  </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right nav-menu">
    <router-link class="nav-item" to='/'>
      Home
    </router-link>
    <a class="nav-item">
      Blog
    </a>
    <a class="nav-item">
      Me
    </a>

    <div class="nav-item">
      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary" href="https://github.com/sampsonbryce" target="_blank">
            <span class="icon">
               <icon name="github"></icon>
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
</nav>
</template>