<template>
  <div
    id="app"
    class="app"
  >
    <my-component/>
  </div>
</template>

<script>
  import MyComponent from './MyComponent';

  export default {
    name: 'app',
    components: { MyComponent }
  }
</script>

<style>
  @import "../node_modules/bulma/css/bulma.css";
</style>
