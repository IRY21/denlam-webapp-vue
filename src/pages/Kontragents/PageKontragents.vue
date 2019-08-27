<template>
    <div
        v-if="pageLoader_isDataLoaded"
    >
        <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
            <div class="Flex Flex_align_center">
                <h1 class="Heading_lvl1">
                    Контрагенты
                </h1>
                <router-link
                class="Btn Btn_theme_green Btn_type_add"
                :to="{name: 'PageKontragentsAdd'}"
                >
                    Добавить контрагента
                </router-link>
            </div>
        </div>
        <div class="MainSection-Row">
            <div class="Filter">
                <p class="Filter-Title">Фильтр</p>
                <div class="Filter-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">По городу</p>
                        <select name="worker_id" id="worker_id" class="Select-Control">
                            <option value="0">Все филиалы</option>
                            <option value="2">Москва</option>
                            <option value="1">Уфа</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_noTopPadding">
            <div class="Search">
                <OkoInput 
                    type="text"
                    v-model="searchParams.search"
                    placeholder="Введите название или ИНН для поиска.."
                />
                <div 
                    class="Btn Btn_theme_blue"
                    @click="searchHandler"
                >
                    Найти
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_noTopPadding">
            <div class="Card Card_bgGray">
                <div class="Table Table_counterparties">
                    <div class="Table-Row Table-Row_head">
                        <div class="Table-Column">
                            <p class="Table-Text">
                                Контрагент
                            </p>
                        </div>
                        <div class="Table-Column">
                            <p class="Table-Text">
                                Город
                            </p>
                        </div>
                        <div class="Table-Column">
                            <p class="Table-Text">
                                Даные для связи
                            </p>
                        </div>
                        <div class="Table-Column">
                            <p class="Table-Text">
                                Контактное лицо
                            </p>
                        </div>
                    </div>
                    <div 
                        class="Table-Row"
                        v-for="client of clients"
                        :key="client.id"
                    >
                        <div class="Table-Column">
                            <p class="Table-Text Table-Text_counterparties">
                                <router-link
                                    class="Link Link_no-decoration"
                                    :to="{name: 'PageKontragentAbout', params: { clientId: client.id }}"    
                                >
                                    {{ client.yurlico_name || client.fizlico_name }}
                                </router-link>
                                <br>
                                <span 
                                    v-if="client.inn"
                                    class="inn"
                                >
                                    ИНН {{ client.inn }}
                                </span>
                            </p>
                        </div>
                        <div class="Table-Column">
                            <p class="Table-Text">
                                Уфа
                            </p>
                        </div>
                        <div class="Table-Column">
                            <p class="Table-Text">
                                8 (960) 999-99-99<br>
                                8 (987) 234-22-22<br>
                                ivanov@mail.ru
                            </p>
                        </div>
                        <div class="Table-Column">
                            <p class="Table-Text">
                                Иванов Пётр Семенович<br>
                                8 (960) 999-99-99<br>
                                8 (987) 234-22-22<br>
                                ivanov@mail.ru
                            </p>
                        </div>
                    </div>
                    <infinite-loading 
                        spinner="bubbles" 
                        @infinite="infiniteHandler"
                        ref="infiniteLoading"
                    >
                        <div class="text-red" slot="no-more">No more users</div>
                        <div class="text-red" slot="no-results">No more users</div>
                    </infinite-loading>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <AppSpinner />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
            clients: 'clients/getClients'
        })
    },
    created() {
        Promise.all([this.fetchClients(this.searchParams)])
            .then(() => this.pageLoader_resolveData())
    },
    methods: {
        ...mapActions('clients', ['fetchClients', 'searchClients']),
        infiniteHandler($state) {
            this.fetchClients(this.searchParams)
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
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            this.searchParams.qskipstep = 0;
            this.searchClients(this.searchParams)
                .then((res) => {
                    this.searchParams.qskipstep += res.length;
                })
        }
    }
}
</script>

<style scoped>
.MainSection-Row_title .Btn_type_add {
  width: 190px; }

.Search .Input {
  width: 376px; }
</style>

<style >
.Table_counterparties {
    overflow-y: initial !important;
}
.Table_counterparties .Table-Row {
  padding: 9px 0; }

.Table_counterparties .Table-Column:nth-of-type(1) {
  width: 30%; }

.Table_counterparties .Table-Column:nth-of-type(2) {
  width: 30%; }

.Table_counterparties .Table-Column:nth-of-type(3) {
  width: 20%; }

.Table_counterparties .Table-Column:nth-of-type(4) {
  width: 20%; }

.Table_counterparties .Table-Text {
  padding: 0; }
  .Table_counterparties .Table-Text_counterparties {
    line-height: 1; }
  .Table_counterparties .Table-Text .inn {
    font-size: 11px;
    color: #898989; }
</style>
