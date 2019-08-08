<template>
  <autocomplete
    :search="search"
  >
    <template
      v-slot="{
        rootProps,
        inputProps,
        inputListeners,
        resultListProps,
        resultListListeners,
        results,
        resultProps
      }"
    >
      <div v-bind="rootProps">
        <custom-input
          v-bind="inputProps"
          v-on="inputListeners"
          :class="[
            'autocomplete-input',
            { 'autocomplete-input-no-results': noResults },
            { 'autocomplete-input-focused': focused }
          ]"
          @focus="handleFocus"
          @blur="handleBlur"
        ></custom-input>
        <ul
          v-if="noResults"
          class="autocomplete-result-list"
          style="position: absolute; z-index: 1; width: 100%; top: 100%;"
        >
          <li class="autocomplete-result">No results found</li>
        </ul>
        <ul v-bind="resultListProps" v-on="resultListListeners">
          <li
            v-for="(result, index) in results"
            :key="resultProps[index].id"
            v-bind="resultProps[index]"
          >{{ result }}</li>
        </ul>
      </div>
    </template>
  </autocomplete>
</template>

<script>
export default {
  props: {
    search: {
      required: true,
      type: Function
    }
  },
  name: "oko-autocomplete",
  data() {
    return {
      focused: false,
      value: "",
      results: []
    };
  },
  computed: {
    noResults() {
      return this.value && this.results.length === 0;
    }
  },
  methods: {
    handleFocus() {
      this.focused = true;
    },
    handleBlur() {
      this.focused = false;
    }
  }
};
</script>

<style>
</style>
