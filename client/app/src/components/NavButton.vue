<template>
  <!-- 
  TODO: Fix the styling so I can have .nav-class and not affect other <a> tags

  <nav class="nav-button">
    <router-link :to="to">
      <i class="material-icons">{{ i }}</i>
      <slot></slot>
    </router-link>
  </nav>       
  -->
  <router-link :to="to">
    <i class="material-icons">{{ i }}</i>
    <slot></slot>
  </router-link>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavButton',
  props: [
    'to',
    'i'
  ]
}
</script>

<style>
  .nav-button {
    padding-top: 20px;
  }

  .nav-button, a {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    color: rgba(0,0,0,.5);
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
  }

  .nav-button, a:hover {
    background-color: rgba(255,255,255,.1);
  }

  .nav-button, a:active {
    color: rgba(0,0,0,.3);
  }

  .nav-button, i {
    font-weight: 30px;
  }
</style>
