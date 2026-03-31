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
import { hashPassword } from '@/utils'

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
    create: async function() {
      const originalPassword = this.password
      const passwordHash = await hashPassword(originalPassword)

      const drop = {
        title: this.title,
        message: this.message,
        password: passwordHash
      }

      const apiUrl = (process.env.VUE_APP_API_URL || "https://gnito-api.onrender.com/api") + "/"
      this.$http.post(apiUrl, drop).then( res => {
        this.title = ''
        this.message = ''
        this.password = ''

        const shareLink = `${window.location.origin}/${res.data._id}?pwd=${originalPassword}`
        this.$store.dispatch('setFlash', {
          message: '<h2>Success!</h2>',
          shareLink,
          context: 'success'
        })
      })
    }
  }
}
</script>

<style>

  
</style>
