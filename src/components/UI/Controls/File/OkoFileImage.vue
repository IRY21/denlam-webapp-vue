<template>
<div>
  <label 
    class="File File_theme_link"
    :class="{[fileSize]: size}"
    @dragover="handleDragover"
    @drop="handleDrop"
  >
    <p v-if="label" class="Label">{{ label }}</p>
    <input 
      class="File-Control"
      ref="file"
      type="file"
      accept="image/jpeg,image/png,"
      @change="handleFileChange"
    >
    <div class="File-Link">{{ btnText }}</div>
  </label>

  <div class="File-ImagePreview" v-if="imageData.length > 0">
    <img class="File-Preview" :src="imageData">
  </div>
</div>
</template>
 
<script>
export default {
  name: 'OkoFileImage',
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
  data() {
    return {
      imageData: ""  // we will store base64 format of image in this string
    }
  },
  computed: {
    fileSize() {
      return 'File_size_' + this.size
    }
  },
  methods: {
    handleDragover(e) {
      e.preventDefault();
      const dropzone = e.target;

      dropzone.classList.add('drag');
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDrop(e) {
      e.preventDefault();
      const dropzone = e.target;

      dropzone.classList.remove('drag');
      dropzone.parentNode.classList.add('attached');
      this.previewImage(e, e.dataTransfer.files);
    },
    previewImage: function(event, dragDropFile) {
      // Reference to the DOM input element
      var input = dragDropFile || event.target.files;
      // Ensure that you have a file before attempting to read it
      if (input) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input[0]);
      }
    },
    handleFileChange(e) {
      this.previewImage(e);
      this.$emit('input', e.target.files[0]);
      e.target.parentNode.classList.add('attached');
    }
  }
}
</script>

<style lang="sass" scoped>
  .File
    &-ImagePreview
      width: 102px
      height: 145px
      margin-top: 10px
      border: 1px solid lightgrey
      overflow: hidden
    &-Preview
      max-width: 100%
      max-height: 100%
      object-fit: cover
    &-Link
      &.drag
        background-color: #e6e6e6
        font-size: 0
        color: #898989
        border-color: #e6e6e6
        &:before
          content: 'Отпустите файл'
          font-size: 14px
</style>
