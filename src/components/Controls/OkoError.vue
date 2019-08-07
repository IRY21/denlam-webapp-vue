<template>
  <div class="Error">
    <p class="Error-Text Error-Text_icon">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
