<template>
  <main class="sub-grid">
    <section class="search">
      <h2>Search</h2>
      <input type="text" placeholder="Drop ID" v-model="search.id">
      <input type="password" placeholder="Password" v-model="search.password">
      <input type="button" value="Get Drop" v-on:click="searchDrops">
    </section>
    <section class="create">
      <h2>Create</h2>
      <input type="text" placeholder="Title" v-model="create.title">
      <input type="text" placeholder="Message" v-model="create.message">
      <input type="password" placeholder="Password" v-model="create.password">
      <input type="button" value="Create Drop" v-on:click="createDrop">
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      search: {
        id: '',
        password: ''
      },
      create: {
        title: '',
        message: '',
        password: ''
      },
    }
  },
  methods: {
    searchDrops: function() {  
      this.$router.push('/' + this.search.id + '?pwd=' + this.search.password)
    },
    createDrop: function() {
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

.search { grid-area: search; }
.create { grid-area: create; }

.sub-grid {
  display: grid;
  grid-template-areas: 'search create';
  grid-gap: 10px;
}

input[type=text], input[type=password] {
  display: block;
  width: 100%
}
</style>
