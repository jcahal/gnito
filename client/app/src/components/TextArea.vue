<template>
  <textarea :placeholder="placeholder" ></textarea>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TextArea',
  props: [
    'placeholder',

  ]
}
</script>

<style>
  textarea {
    max-width: 100%;
    min-width: 100%;
    resize: vertical;
    box-sizing: border-box;
    margin: auto;
  }
</style>
