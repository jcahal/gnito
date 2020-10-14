<template>
  <div id="app" class="grid">
    <header>
      <Flash />
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <Nav />
    </footer>
  </div>
</template>

<script>
import Flash from '@/components/Flash.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Flash,
    Nav
  }
}
</script>

<style>
body {
  background: rgb(31,3,34);
  background: linear-gradient(40deg, rgba(31,3,34,1) 0%, rgba(138,28,124,1) 50%, rgba(218,65,103,1) 100%);
  color: rgba(0,0,0,.8);
  font-family: 'Roboto', sans-serif;
}

header { grid-area: header; }
main { grid-area: main; }
footer { grid-area: footer; }

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
    'header header header header header header header header header header header header'
    '. . main main main main main main main main . .'
    'footer footer footer footer footer footer footer footer footer footer footer footer';
  grid-gap: 10px;
  height: 100vh;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    background: rgba(255,255,255,.6);
    color: rgba(0,0,0,.8);
  }

  input[type=text], input[type=password] {
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .2);
  }

  input[type=button] {
    transition: box-shadow 0.1s ease-in-out;
    background: rgba(255,255,255,.3);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .5);
    color: rgba(0,0,0,.8);
  }

  input[type=button]:hover {
    cursor: pointer;
  }

  input[type=button]:active {
    cursor: pointer;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .5);
  }

  input:focus {
    outline: none;
  }

  textarea {
    max-width: 105%;
    min-width: 100%;
    resize: none;
    box-sizing: border-box;
    margin: auto;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .2);
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    background: rgba(255,255,255,.6);
    color: rgba(0,0,0,.8);
  }

  textarea:focus {
    outline: none;
  }
</style>
