<template>
  <main>
    <div class="drop-title">
      <h3>{{ drop.title }}</h3>
    </div>
    <div class="drop-message">
      <p>{{ drop.message }}</p>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Drop',
  computed: mapState({
    drop: state => state.drop
  }),
  mounted: function() {
    this.$store.dispatch('retrieveDrop')
  }
}
</script>

<style>

</style>
