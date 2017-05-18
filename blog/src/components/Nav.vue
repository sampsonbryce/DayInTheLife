<template>
<nav class="nav">
  <div class="nav-left">
    <a class="nav-item">
        <h2 class="title is-3">Day In The Life</h2>
    </a>
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
    <a class="nav-item" href='/'>
      Home
    </a>
    <a class="nav-item">
      Blog
    </a>
    <a class="nav-item">
      Me
    </a>
    <router-link to="/login" class="nav-item">Login</router-link>

    <div class="nav-item">
      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary">
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