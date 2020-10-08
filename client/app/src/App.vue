<template>
  <div id="app" class="grid">
    <header>
      <a href="/">Home</a>
    </header>
    <div class="flash" :class="{on: flash.on, success: flash.success, error: flash.error}" v-html="flash.message">
    </div>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
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
  grid-template-areas: 
    'header'
    'main'
    'footer';
  grid-gap: 10px;
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
