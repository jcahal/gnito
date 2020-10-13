<template>
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
  a {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
  }

  a:hover {
    background-color: #eeeeee;
  }

  a:active {
    color: #009578;
  }

  i {
    font-weight: 18px;
  }
</style>
