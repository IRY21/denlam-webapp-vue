<template>
  <div id="app">
    <div
      v-if="loading"
    >
      <AppSpinner />
    </div>
    <component 
      v-else
      :is="layout"
    >
      <router-view />
    </component>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters('shared', ['loading']),
      layout() {
        return this.$route.meta.layout || 'auth-layout';
      }
    }
  }
</script>

<style>
  @import 'css/libs.min.css';
  @import 'css/main.css';
</style>
