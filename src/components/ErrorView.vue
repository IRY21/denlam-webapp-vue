<template>
  <div class="notFoundContainer">
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <h1 class="Heading_lvl1">{{ title }}</h1>
      <h2 class="Heading_lvl2">{{ status }}<span> :(</span></h2>
      <router-link 
        :to="{name: navigateToPage}" 
        class="Btn Btn_size_m Btn_theme_blue"
      >
        {{ navigateToText }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        required: true,
        type: String
      },
      status: {
        required: true,
        type: String
      },
      navigateToPage: {
        required: true,
        type: String
      },
      navigateToText: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
  .Heading_lvl1 {
    margin-bottom: 20px;
    font-size: 30px;
  }
  .Heading_lvl2 {
    font-size: 40px;
  }
  .Btn {
    margin-top: 20px;
    text-align: center;
  }
</style>
