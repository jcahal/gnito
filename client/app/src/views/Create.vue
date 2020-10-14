<template>
  <Card id="create-form">
    <input id="create-form-id" type="text" placeholder="Title" v-model="title" />
    <textarea id="create-form-message" placeholder="Message" v-model="message"></textarea>
    <input id="create-form-password" type="password" placeholder="Password" v-model="password" />
    <input id="create-form-button" type="button" value="Create" @click="create" />
  </Card>
</template>

<script>
// @ is an alias to /src
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
  methods: {
    create: function() {

      //TODO: Clear fields after create

      const drop = {
        title: this.title,
        message: this.message,
        password: this.password
      }

      this.$http.post("http://localhost:3000/api/", drop).then( res => {
        let url = `http://localhost:8080/${res.data._id}?pwd=${res.data.password}`

        this.$store.dispatch('setFlash', { 
          message: 
          `
          <h2>Success!</h2>
          <a href="${url}">${url}</a>
          `,
          context: 'success'
        })
      })
    }
  }
}
</script>

<style>

  
</style>
