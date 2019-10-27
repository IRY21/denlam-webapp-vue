<template>
  <label 
    class="Input"
  >
    <span class="Label" v-if="label">{{ label }}</span>
    <datepicker 
      class="Input-Control"
      :language="languages.ru"
      v-bind="$attrs"
      v-on="listeners"
      @selected="handleInput"
    ></datepicker>
  </label>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import * as lang from "vuejs-datepicker/src/locale";

export default {
  name: 'OkoDatepicker',
  inheritAttrs: false,
  components: {
    Datepicker
  },
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
  data() {
    return {
      date: '',
      language: "ru",
      languages: lang
    }
  },
  methods: {
    handleInput(date) {
      this.$emit('input', date);
    }
  }
}
</script>

<style scoped>
.Input-Control {
  width: 100%;
}
</style>
<style>
.vdp-datepicker input {
  width: 100%;
  height: 30px;
  background: transparent;
  border: none;
}
</style>

