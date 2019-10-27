<template>
  <!-- <label class="Input">
    <span class="Label" v-if="label">{{ label }}</span>
    <input
      class="Input-Control"
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
      @input="handleInput"
    >
  </label> -->
  <label 
    class="Input"
    :class="[theme ? `Input_theme_${theme}` : '']"
  >
    <span class="Label" v-if="label">{{ label }}</span>
      <div class="Input-Wrap">
          <input
            class="Input-Control"
            v-bind="$attrs"
            :value="value"
            v-on="listeners"
            @input="handleInput"
            />
      </div>
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
    },
    theme: {
      type: String
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

<style scoped>
.Input-Control {
  width: 100%;
}
</style>
