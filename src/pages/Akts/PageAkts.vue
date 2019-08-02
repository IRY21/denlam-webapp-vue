<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <div class="Flex Flex_align_center">
          <h1 class="Heading_lvl1">
              Акты
          </h1>
          <div 
            class="Btn Btn_theme_green Btn_type_add"
            v-show="(currentRoute === 'PageAktsSigning') && !aktFormShow"
            @click="toggleAktAddForm"
          >
              Добавить акт
          </div>
      </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="AddMenu Projects-AddMenu">
            <router-link
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageAktsSigning'}"
              :to="{name: 'PageAktsSigning'}"
            >
                На подписании
            </router-link>
            <router-link
              class="AddMenu-Item"
              :class="{'active': currentRoute === 'PageAktsSigned'}"
              :to="{name: 'PageAktsSigned'}"
            >
                Подписанные акты
            </router-link>
        </div>
    </div>

    <router-view
      :aktFormShow="aktFormShow"
      :toggleAktAddForm="toggleAktAddForm"
    ></router-view>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      aktFormShow: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    }
  },
  methods: {
    toggleAktAddForm() {
      this.aktFormShow = !this.aktFormShow
    }
  }
}
</script>

<style scoped>
.PageAktsNew .MainSection-Row_title .Btn_type_add {
  margin-left: 30px; }
</style>
