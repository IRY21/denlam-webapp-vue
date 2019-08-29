<template>
  <label class="Radio">
      <input 
          class="Radio-Control" 
          type="radio" 
          v-bind="$attrs"
          v-on="listeners"
          :checked="shouldBeChecked"
          :value="value"
          @change="handleRadio"
      >
      <span class="Radio-Wrap">
          <span class="Radio-Dot"></span>
          <span class="Radio-Name">
              <slot />
          </span>
      </span>
  </label>
</template>

<script>
export default {
  name: 'OkoRadio',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  inheritAttrs: false,
  props: {
    value: {
      required: true
    },
    modelValue: {
      default: ""
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    listeners() {
      const listeners = this.$listeners;
      delete listeners.change
      return listeners;
    },
    shouldBeChecked() {
      return this.modelValue == this.value
    }
  },
  methods: {
    handleRadio(e) {
      this.$emit('change', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.Radio {
    display: inline-block;
    &-Control {
        position: absolute;
        visibility: hidden; }
    &-Wrap {
        padding-left: 25px;
        position: relative;
        display: inline-block; }
    &-Dot {
        width: 15px;
        height: 15px;
        background-color: #ffffff;
        border: solid 1px rgba(197, 197, 197, 0.5);
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0; }
    &-Name {
        font-size: 16px;
    }}

.Radio-Control:checked + .Radio-Wrap .Radio-Dot {
    border-color: #006899;
    &:before {
        content: '✔';
        color: #006899;
        display: block;
        position: relative;
        top: -1px;
        right: -1px; } }

</style>
