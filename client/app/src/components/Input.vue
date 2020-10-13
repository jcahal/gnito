<template>
  <input />
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Input'
}
</script>

<style>
  input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    text-align: center;
    border-radius: 5px;
  }

  input[type=text], input[type=password] {
    border: 1px solid #aaaaaa;
    box-shadow: inset -1px -1px 3px rgba(0, 0, 0, .2);
  }

</style>
