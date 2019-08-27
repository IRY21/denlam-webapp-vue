<template>
  <label class="Input">
    <span class="Label" v-if="label">{{ label }}</span>
    <input
      class="Input-Control"
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      @input="handleInput"
    >
  </label>
</template>

<script>
export default {
  name: 'OkoInput',
  inheritAttrs: false,
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    listeners() {
      const listeners = this.$listeners;
      delete listeners.input
      return listeners;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style>

</style>
