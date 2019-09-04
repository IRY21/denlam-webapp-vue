<template>
  <label class="Input">
    <span class="Label" v-if="label">{{ label }}</span>
    <input
      class="Input-Control"
      ref="field"
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      @input="handleInput"
    >
  </label>
</template>

<script>
import Inputmask from 'inputmask';

export default {
  name: 'OkoInputPhone',
  inheritAttrs: false,
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      default: null
    },
    mask: { type: String }
  },
  computed: {
    listeners() {
      const listeners = this.$listeners;
      delete listeners.input
      return listeners;
    },
  },
  mounted () {
    var im = new Inputmask("9 (999) 999-99-99");
    im.mask(this.$refs.field);
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  }
}
</script>

<style>

</style>
