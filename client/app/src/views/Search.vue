<template>
  <Card id="search-form">
    <input id="search-form-drop-id" type="text" placeholder="Drop" v-model="id" />
    <input id="search-form-drop-password" type="password" placeholder="Password" v-model="password" />
    <input id="search-form-button" type="button" value="Search" @click="search" />
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Search',
  components: {
    Card
  },
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    search: function() {  
      if(this.id == ''){
        this.$store.dispatch('setFlash', {
          message: 
          `
          <h2>Failed.</h2>
          <p>No ID provided</p>
          `, 
          context: 'error'
        })
      } else {
        this.$router.push('/' + this.id + '?pwd=' + this.password)
      }

    },
  }
}
</script>

<style>
  
</style>
