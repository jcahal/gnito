<template>
  <section class="search">
      <h2>Search</h2>
      <Input type="text" placeholder="Drop ID" v-model="drop.id" />
      <Input type="password" placeholder="Password" v-model="drop.password" />
      <Input type="button" value="Search" v-on:click.native="search" />
    </section>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/Input.vue'

export default {
  name: 'Search',
  components: {
    Input,
  },
  data() {
    return {
      drop: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    search: function() {  
      if(this.drop.id == ''){
        // TODO: Error message
      } else {
        this.$router.push('/' + this.drop.id + '?pwd=' + this.drop.password)
      }

    },
  }
}
</script>

<style>
  
</style>
