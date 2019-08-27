<template>
  <main 
    class="Home"
  >
    <Header />
    <div class="ContentSection Flex Container">
        <aside class="ContentSection-MainMenu">
          <MainMenu />
        </aside>

        <section class="MainSection ContentSection-MainSection">
          <slot />
        </section>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header';
import MainMenu from '@/components/MainMenu';

export default {
  components: {
    Header,
    MainMenu
  }
}
</script>

<style>

</style>
