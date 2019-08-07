<template>
  <label 
    class="File File_theme_link"
    :class="{[fileSize]: size}"
  >
    <p v-if="label" class="Label">{{ label }}</p>
    <input 
      class="File-Control"
      ref="file" 
      type="file" 
      @change="handleFileChange"
    >
    <div class="File-Link">{{ btnText }}</div>
  </label>
</template>

<script>
export default {
  props: {
    btnText: {
      required: true,
      type: String
    },
    value: File,
    label: {
      type: String
    },
    size: {
      type: String
    }
  },
  computed: {
    fileSize() {
      return 'File_size_' + this.size
    }
  },
  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0])
      e.target.parentNode.classList.add('attached')
    }
  }
}
</script>

<style scoped>

</style>
