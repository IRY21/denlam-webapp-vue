<template>
  <div class="container">
    <ErrorView 
      :title="'У Вас нет прав доступа на данную страницу'"
      :status="'401'"
      :navigateToPage="'PageLogin'"
      :navigateToText="'Перйти на страницу входа'"
    />
  </div>
</template>

<script>
  import ErrorView from '@/components/ErrorView'

  export default {
    components: {
      ErrorView
    }
  }
</script>

<style scoped>
  
</style>