<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <router-link class="Link Link_back" :to="{name: 'PageClients'}">Вернуться назад</router-link>
      <div class="Input Input_type_changeable">
        <div class="Input-Changeable Input-Changeable_static">
          <div class="Flex Flex_align_center">
            <p
              v-if="pageLoader_isDataLoaded"
              class="Input-Text Heading_lvl1"
            >{{ computedParam_name('client', client) }}</p>
            <router-link
              :to="{ name: 'PageClientChange', params: {id: computedParam_currentRouteId}}"
            >
              <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                <use xlink:href="/img/sprite.svg#edit" href="/img/sprite.svg#edit"></use>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
      <div class="AddMenu Projects-AddMenu">
        <router-link
          class="AddMenu-Item"
          :class="{'active': computedParam_currentRouteName === 'PageClientAbout'}"
          :to="{name: 'PageClientAbout'}"
        >Данные о клиенте</router-link>
        <router-link
          class="AddMenu-Item"
          :class="{'active': computedParam_currentRouteName === 'PageClientProjects'}"
          :to="{name: 'PageClientProjects'}"
        >Проекты</router-link>
        <router-link
          class="AddMenu-Item"
          :class="{'active': computedParam_currentRouteName === 'PageClientPayments'}"
          :to="{name: 'PageClientPayments'}"
        >Поступившие оплаты</router-link>
        <router-link
          class="AddMenu-Item"
          :class="{'active': computedParam_currentRouteName === 'PageClientAkts'}"
          :to="{name: 'PageClientAkts'}"
        >Акты выполненных работ</router-link>
      </div>
    </div>

    <router-view v-if="pageLoader_isDataLoaded" :clientName="computedParam_name('client', client)"></router-view>

    <div v-else>
      <AppSpinner/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      client: ["clients/getClient"]
    })
  },
  created() {
    Promise.all([this.fetchClient(this.computedParam_currentRouteId)]).then(
      () => {
        this.pageLoader_resolveData();
      }
    );
  },
  methods: {
    ...mapActions("clients", ["fetchClient"])
  }
};
</script>

<style scoped>
.MainSection-Row_title {
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.MainSection-Row_size_add {
  max-width: 650px;
}

.Form-Row .Form-Row {
  margin-bottom: 5px;
}
.Form-Row .Form-Row:last-of-type {
  margin-bottom: 0;
}

.Input-Text:nth-of-type(2) {
  padding-top: 0;
}

.Heading_lvl2.Color_black {
  color: #000000;
}

.Card_contact {
  width: 300px;
}
.Card_contact .Heading_lvl2 {
  margin-bottom: 0;
}
.Card_contact .Subheading {
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  color: #b7b7b7;
}
</style>
