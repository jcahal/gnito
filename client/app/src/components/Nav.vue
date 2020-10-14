<template>
  <nav class="nav">
    <NavButton to="/search" i="search" ></NavButton>
    <NavButton to="/" i="home" ></NavButton>
    <NavButton to="/create" i="add" ></NavButton>
  </nav>
</template>

<script>
// @ is an alias to /src
import NavButton from '@/components/NavButton.vue'

export default {
  name: 'Nav',
  components: {
    NavButton
  }
}
</script>

<style>
  .nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 65px;
    background-color: rgba(255,255,255,.2);
    display: flex;
    overflow-x: auto;
  }
</style>
