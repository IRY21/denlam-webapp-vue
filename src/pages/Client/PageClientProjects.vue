<template>
  <div>
    <OkoTitle 
      :title="`${clientName} || Проекты`" />
      
    <h1>Проекты</h1>
  </div>
</template>

<script>
export default {
    props: {
        clientName: {
            required: true,
            type: String
        }
    },
}
</script>

<style scoped>

</style>
