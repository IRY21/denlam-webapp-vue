<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <h1 class="Heading_lvl1">
            Настройки
        </h1>
    </div>
    <div class="MainSection-Row">
        <div class="AddMenu">
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageSettingsUsers'}"
              :to="{name: 'PageSettingsUsers'}"
            >
                Пользователи
            </router-link>
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageSettingsServices'}"
              :to="{name: 'PageSettingsServices'}"
            >
                Услуги
            </router-link>
            <router-link 
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageSettingsFilials'}"
              :to="{name: 'PageSettingsFilials'}"
            >
                Филиалы
            </router-link>
        </div>
    </div>

    <router-view></router-view>

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
