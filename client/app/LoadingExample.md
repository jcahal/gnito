```
<template>
  <Card id="create-form">
    <input id="create-form-id" type="text" placeholder="Title" v-model="title" />
    <textarea id="create-form-message" placeholder="Message" v-model="message"></textarea>
    <input id="create-form-password" type="password" placeholder="Password" v-model="password" />
    <div v-if="creating" class="loader"><div></div><div></div><div></div></div>
    <input v-else id="create-form-button" type="button" value="Create" @click="create" />
  </Card>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'Create',
  components: {
    Card,
  },
  data() {
    return {
      title: '',
      message: '',
      password: ''
    }
  },
  computed: mapState({
    creating: state => state.creating
  }),
  methods: {
    create() {
      const drop = {
        title: this.title,
        message: this.message,
        password: this.password
      }

      this.$store.dispatch('createDrop', drop)

      this.title = ''
      this.message = ''
      this.password = ''
    }
  }
}
</script>

<style>

.loader {
  display: inline-block;
  position: relative;
  left: 45.5%;
  width: 80px;
  height: 80px;
}
.loader div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: rgba(255,255,255,.2);
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
```