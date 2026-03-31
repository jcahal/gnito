<template>
  <div id="app" class="grid">
    <div v-if="coldStartLoading" class="cold-start-overlay">
      <div class="cold-start-box">
        <div class="loader"><div></div><div></div><div></div></div>
        <p class="cold-start-title">Server is waking up...</p>
        <p class="cold-start-sub">This may take <strong>~1 min</strong>.</p>
      </div>
    </div>
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
import { mapState } from 'vuex'
import Flash from '@/components/Flash.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Flash,
    Nav
  },
  computed: mapState({
    coldStartLoading: state => state.coldStartLoading
  }),
  mounted() {
    this.$store.dispatch('pingApi')
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

.cold-start-overlay {
  position: fixed;
  inset: 0;
  background: rgba(31, 3, 34, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.cold-start-box {
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
}

.cold-start-title {
  margin: 20px 0 8px;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
}

.cold-start-sub {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
}

.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: rgba(255, 255, 255, .4);
  animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loader div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.loader div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.loader div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes loader {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
</style>
