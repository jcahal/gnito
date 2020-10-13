<template>
  <section class="search">
      <h2>Create</h2>
      <Input type="text" placeholder="Title" v-model="title" />
      <TextArea placeholder="Message" v-model="message"></TextArea>
      <Input type="password" placeholder="Password" v-model="password" />
      <Input type="button" value="Create" v-on:click="create" />
    </section>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/Input.vue'
import TextArea from '@/components/TextArea.vue'

export default {
  name: 'Create',
  components: {
    Input,
    TextArea
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
      // TODO: define the post of a new drop
      this.$http.post("http://localhost:3000/api/", this.create).then( res => {
        let url = `http://localhost:8080/${res.data._id}?pwd=${res.data.password}`

        this.$store.dispatch('setFlash', { 
          on: true, 
          success: true,  
          error: false, 
          message: `<a href="${url}">${url}</a>`
        })
      })
    }
  }
}
</script>

<style>
  
</style>
