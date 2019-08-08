<template>
  <div class="Error">
    <p class="Error-Text Error-Text_icon"><slot/></p>
  </div>
</template>

<script>
export default {
  name: 'oko-error',
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
