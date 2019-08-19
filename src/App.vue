<template>
  <div id="app">
    <component 
      :is="layout"
    >
      <router-view />
    </component>

  </div>
</template>

<script>

  export default {
    name: 'app',
    computed: {
      layout() {
        return this.$route.meta.layout || 'auth-layout';
      }
    }
  }
</script>

  <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  @import 'css/libs.min.css';
  @import 'css/main.css';
</style>
