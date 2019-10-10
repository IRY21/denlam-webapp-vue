<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <div class="Flex Flex_align_center">
            <h1 class="Heading_lvl1">
                Исполнители
            </h1>
            <router-link
              class="Btn Btn_theme_green Btn_type_add"
              :to="{name: 'PageWorkersAdd'}"
            >
                Добавить исполнителя
            </router-link>
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Search">
            <OkoInput 
                type="text"
                v-model="searchParams.search"
                placeholder="Введите название или ИНН для поиска.."
                @keyup.enter="debouncedSearch"
                @input="debouncedSearch"
            />
            <div 
                class="Btn Btn_theme_blue"
                @click="searchHandler"
            >
                Найти
            </div>
        </div>
    </div>
    <div 
        v-if="pageLoader_isDataLoaded"
        class="MainSection-Row"
    >
        <div class="Table Table_workers">
            <div class="Table-Row Table-Row_head">
                <div class="Table-Column">
                    <p class="Table-Text">
                        Фото
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Наименование
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Данные для связи
                    </p>
                </div>
            </div>
            <router-link
                class="Table-Row Link"
                v-for="worker of workers"
                :key="worker.id"
                :to="{name: 'PageWorkerAbout', params: { id: worker.id }}" 
            >
                <div class="Table-Column">
                    <div class="Avatar Avatar_small">
                        <img 
                            :src="workerAvatarLink(worker)" 
                            alt="" 
                            class="Avatar-Img">
                    </div>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        {{ computedParam_name('worker', worker) }}<br>
                        <span 
                            v-if="worker.worker_inn"
                            class="inn"
                        >
                            ИНН {{ worker.worker_inn }}
                        </span>
                    </p>
                    <p class="Table-Text">
                        <span class="position">{{ worker.worker_position }}</span>
                    </p>
                </div>
                <div class="Table-Column">
                    <p 
                        class="Table-Text"
                        v-for="contact of workerPhones(worker)"
                        :key="contact.id"
                    >
                        {{ contact.value1 | formatPhone }}
                    </p>
                    <p 
                        class="Table-Text"
                        v-for="contact of workerEmails(worker)"
                        :key="contact.id"
                    >
                        {{ contact.value1 }}
                    </p>
                </div>
            </router-link>
            <infinite-loading 
                spinner="bubbles" 
                @infinite="debounceInfiniteHandler"
                ref="infiniteLoading"
            >
                <div class="Infinite-End" slot="no-more"></div>
                <div class="Infinite-End" slot="no-results"></div>
            </infinite-loading>
        </div>
    </div>
    <div v-else>
        <AppSpinner />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from '@/_helpers';

export default {
    data() {
        return {
            searchParams: {
                qlimit: 15,
                qskipstep: 0,
                search: '',
            }
        }
    },
    computed: {
        ...mapGetters({
            workers: 'workers/getWorkers'
        }),
        debouncedSearch() {
            let DELAY = 300;
            return debounce(this.searchHandler, DELAY);
        },
        debounceInfiniteHandler() {
            let DELAY = 300;
            return debounce(this.infiniteHandler, DELAY);
        },
    },
    created() {
        Promise.all([this.fetchWorkers(this.searchParams)])
            .then((res) => {
                this.searchParams.qskipstep = res[0].length;
                this.pageLoader_resolveData();
            })
    },
    methods: {
        ...mapActions('workers', ['fetchWorkers', 'searchWorkers']),
        workerAvatarLink(worker) {
            let link = '/img/workers/avatar/no.jpg';
            
            if (worker.photo_link) {
                link = worker.photo_link
            }

            return link;
        },
        infiniteHandler($state) {
            this.fetchWorkers(this.searchParams)
                .then((res) => {
                    if (res.length > 0) {
                        this.searchParams.qskipstep += res.length;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                })
        },
        searchHandler() {
            // emit $state.reset like in infiniteHandler
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');

            this.searchParams.qskipstep = 0;
            this.searchWorkers(this.searchParams)
                .then((res) => {
                    this.searchParams.qskipstep = res.length;
                })
        },
        workerPhones(worker) {
            if (worker.worker_textinfo) {
                return worker.worker_textinfo.filter(item => {
                    return item.textinfo_type_id === '1';
                })      
            }          
        },
        workerEmails(worker) {
            if (worker.worker_textinfo) {
                return worker.worker_textinfo.filter(item => {
                    return item.textinfo_type_id === '2';
                })      
            }          
        }
    }
}
</script>

<style scoped>
.Table_workers .Table-Row.Link {
  text-decoration: none; }
  .Table_workers .Table-Row.Link:hover {
    background-color: #f6f6f6; }

.Table_workers .Table-Row_head {
  margin-bottom: 5px; }
.Table_workers .Table-Row_head .Table-Text{
  text-align: left; }

.Table_workers .Table-Column:nth-of-type(1) {
  width: 80px; }

.Table_workers .Table-Column:nth-of-type(2) {
  width: calc(50% - 80px); }

.Table_workers .Table-Column:nth-of-type(3) {
  width: 50%; }
.Table_workers .Table-Text {
    padding: 0;
}
.Table_workers .Table-Text .inn {
    font-size: 11px;
    color: #898989; }
.Table_workers .Table-Text .position {
    color: #008acc; }
</style>
