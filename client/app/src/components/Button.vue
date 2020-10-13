<template>
  <input :type="type" :placeholder="placeholder" :value="value">
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Input',
  props: [
    'type',
    'placeholder',
    'value'
  ]
}
</script>

<style>
  input {
    min-width: 100%;
    
  }
</style>
