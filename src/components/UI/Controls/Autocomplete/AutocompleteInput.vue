<template>
  <input
      style="padding: 0 0 0 48px"
      :value="value"
      v-on="$listeners"
    />
</template>

<script>
export default {
  name: 'AutocompleteInput',
  props: {
      value: {
        type: String,
        default: ''
      }
    }
}
</script>

<style>

</style>
