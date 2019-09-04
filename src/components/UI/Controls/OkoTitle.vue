<script>
export default {
  name: 'OkoTitle',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
          document.title = this.title;
      }
    }
  },
  render () {
    return '';
  },
}
</script>