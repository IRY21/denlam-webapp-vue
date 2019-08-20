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

  .multiselect__select:before {
    border-color: #0271b0 transparent transparent;
  }
  .multiselect__tags {
    background-color: #f6f6f6;
  }
  .multiselect__content-wrapper {
    background-color: #f6f6f6;
  }
  .multiselect__option {
    padding: 6px;
    min-height: 30px;
  }
  .multiselect__option:after {
    line-height: 30px;
  }
  .multiselect__option--selected {
    background-color: #008acc;
    color: #fff;
  }
  .multiselect__option--highlight {
    background-color: #d6d4d4;
    color: #000;
  }

</style>
