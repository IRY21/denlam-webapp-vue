<template>
  <div class="container">
    <ErrorView 
      :title="'Такой страницы не существует'"
      :status="'404'"
      :navigateToPage="'PageProjects'"
      :navigateToText="'Вернуться'"
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