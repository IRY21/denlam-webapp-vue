<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <router-link
        class="Link Link_back"
        :to="{name: 'PageProjects'}"
      >
          Вернуться назад
      </router-link>
      <h1 class="Heading_lvl1">
          Невские теплосети
      </h1>
    </div>
    <div class="MainSection-Row">
        <div class="AddMenu Projects-AddMenu">
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageProjectAbout'}"
              :to="{name: 'PageProjectAbout'}"
            >
                О проекте
            </router-link>
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageProjectWorkers'}"
              :to="{name: 'PageProjectWorkers'}"
            >
                Исполнители
            </router-link>
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageProjectDocs'}"
              :to="{name: 'PageProjectDocs'}"
            >
                Документы
            </router-link>
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageProjectPayments'}"
              :to="{name: 'PageProjectPayments'}"
            >
                Оплаты
            </router-link>
        </div>
    </div>
    <div class="MainSection-Row">

        <router-view></router-view>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>

</style>
