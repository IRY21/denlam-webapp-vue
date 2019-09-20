<template>
  <div>

    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <router-link
          class="Link Link_back"
          :to="{name: 'PageWorkers'}"
        >
            Исполнители
        </router-link>
        <div class="Input Input_type_changeable">
            <div class="Input-Changeable Input-Changeable_static">
                <div class="Flex Flex_align_center">
                    <p 
                      v-if="pageLoader_isDataLoaded"
                      class="Input-Text Heading_lvl1"
                    >
                      {{ computedParam_name('worker', worker) }}
                    </p>
                    <router-link 
                      :to="{ name: 'PageWorkerChange', params: {id: computedParam_currentRouteId}}"
                    >
                        <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                            <use
                                xlink:href="/img/sprite.svg#edit"
                                href="/img/sprite.svg#edit"></use>
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
              :class="{'active': computedParam_currentRouteName === 'PageWorkerAbout'}"
              :to="{name: 'PageWorkerAbout'}"
            >
                Данные о исполнителе
            </router-link>
            <router-link
              class="AddMenu-Item"
              :class="{'active': computedParam_currentRouteName === 'PageWorkerDocs'}"
              :to="{name: 'PageWorkerDocs'}"
            >
                Документы
            </router-link>
            <router-link
              class="AddMenu-Item"
              :class="{'active': computedParam_currentRouteName === 'PageWorkerProjects'}"
              :to="{name: 'PageWorkerProjects'}"
            >
                Связанные проекты
            </router-link>
        </div>
    </div>
    
    <router-view
        v-if="pageLoader_isDataLoaded"
        :clientName="computedParam_name('worker', worker)"
    >
    </router-view>
    
    <div v-else>
        <AppSpinner />
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      worker: ['workers/getWorker']
    }),
  },
  created() {    
      Promise.all([this.fetchWorker(this.computedParam_currentRouteId)])
        .then(() => {
          this.pageLoader_resolveData()
        })
  },
  methods: {
    ...mapActions('workers', ['fetchWorker']),
  }
}
</script>

<style scoped>
</style>
