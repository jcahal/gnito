<template>
  <section class="card" :class="context">
    <slot></slot>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Card',
  props: [
    'context'
  ]
}
</script>

<style>
  .card {
    padding: 25px;
    background: rgba(255, 255, 255, .2);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .card * {
    box-sizing: border-box;
  }

  .card.success {
    background: rgba(0, 255, 0, .3);
  }

  .card.error {
    background: rgba(255, 0, 0, .3);
  }
</style>
