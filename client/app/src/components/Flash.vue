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
    <Card :context="flash.context">
      <span v-html="flash.message"></span>
      <span
        v-if="flash.shareLink"
        class="share-link"
        @click="copy"
      >{{ copied ? 'Copied!' : flash.shareLink }}</span>
    </Card>
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
  data() {
    return { copied: false }
  },
  computed: mapState({
    flash: state => state.flash
  }),
  methods: {
    copy() {
      navigator.clipboard.writeText(this.flash.shareLink)
      this.copied = true
      setTimeout(() => { this.copied = false }, 2000)
    }
  },
  watch: {
    'flash.shareLink'() {
      this.copied = false
    }
  }
}
</script>

<style>
.share-link {
  display: block;
  margin-top: 8px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, .2);
  border-radius: 4px;
  cursor: pointer;
  word-break: break-all;
  font-size: 0.9rem;
  transition: background 0.15s;
}

.share-link:hover {
  background: rgba(255, 255, 255, .35);
}

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
