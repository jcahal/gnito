<template>
  <div id="app" class="grid">
    <header>
      
    </header>
    <div class="flash" :class="{on: flash.on, success: flash.success, error: flash.error}" v-html="flash.message">
    </div>
    <router-view/>
    <footer>
      <Nav />
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  computed: mapState({
    flash: state => state.flash
  }),
  watch: {

  }
}
</script>

<style>
header { grid-area: header; }
main { grid-area: main; }
footer { grid-area: footer; }

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    'header header header'
    '. main .'
    'footer footer footer';
  grid-gap: 10px;
  height: 100vh;
}

.flash {
  display: false;
  position: relative;
  top: 0;
  left: 0;
}

.flash .on {
  display: true;
}

.flash .success {
  background-color: #03fc7b;
}

.flash .error {
  background-color: #fc2403;
}
</style>
