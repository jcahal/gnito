<template>
  <nav>
    <NavButton to="/search" i="search" >Search</NavButton>
    <NavButton to="/" i="home" >Home</NavButton>
    <NavButton to="/create" i="add" >Create</NavButton>
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
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 65px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .2);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
  }
</style>
