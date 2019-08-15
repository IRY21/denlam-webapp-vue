<template>
    <main
      class="Home PageLogin Flex Flex_align_center Flex_justify_center">
      <slot /> 
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('shared', ['loading']),
  },
}
</script>

<style scoped>
.PageLogin {
  background-image: url(/img/PageLogin-Bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
          background-size: cover; }
</style>
