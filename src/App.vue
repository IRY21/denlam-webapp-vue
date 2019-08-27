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

  .multiselect {
    min-height: 30px;
  }
  .multiselect__select {
    height: 30px;
  }
  .multiselect__select:before {
    border-color: #0271b0 transparent transparent;
  }
  .multiselect__single {
    margin-bottom: 0;
    background-color: #f6f6f6;
    font-size: 14px;
  }
  .multiselect__tag {
    margin-bottom: 0;
  }
  .multiselect__tags {
    min-height: 30px;
    margin-bottom: 0;
    padding-top: 3px;
    background-color: #f6f6f6;
  }
  .multiselect__content-wrapper {
    background-color: #f6f6f6;
  }
  .multiselect__option {
    padding: 8px;
    min-height: 30px;
    font-size: 14px;
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
  .multiselect__tag {
    background: #008acc;
  }
  .multiselect__tag-icon:after {
    color: #000000;
  }
  .multiselect__tag-icon:focus, 
  .multiselect__tag-icon:hover {
    background-color: #0078b1;
  }
  

</style>
