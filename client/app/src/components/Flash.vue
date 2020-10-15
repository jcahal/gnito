<script>
// TODO: 
// -  See how it would look with context color
//    on letters and not the entire card.
// -  Make <Card> to the root of template and
//    utilize it's slot to display flash.message.
//    This will allow for a "close" button
//    independent of other <Card> instances.
</script>

<template>
  <div id="flash" :class="{on: flash.on}" >
    <Card :context="flash.context" v-html="flash.message" ></Card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Card from '@/components/Card.vue'

export default {
  name: 'Flash',
  components: {
    Card
  },
  computed: mapState({
    flash: state => state.flash
  }),
}
</script>

<style>
#flash {
  visibility: hidden;
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .5);
}

#flash.on {
  animation: fly-in 0.3s ease-in-out forwards;
}

@keyframes fly-in {
  0% {
    top: -50px;
    visibility: hidden;
  }
  100% {
    top: 0;
    visibility: visible;
  }
}
</style>
