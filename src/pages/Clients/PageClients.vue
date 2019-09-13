<template>
    <div>
        <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
            <div class="Flex Flex_align_center">
                <h1 class="Heading_lvl1">
                    Клиенты
                </h1>
                <router-link
                class="Btn Btn_theme_green Btn_type_add"
                :to="{name: 'PageClientsAdd'}"
                >
                    Добавить клиента
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
            class="MainSection-Row MainSection-Row_noTopPadding"
        >
            <div class="Table Table_counterparties">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Наименование
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
                <router-link
                    class="Table-Row Link"
                    v-for="client of clients"
                    :key="client.id"
                    :to="{name: 'PageClientAbout', params: { clientId: client.id }}" 
                >
                    <div class="Table-Column">
                        <p class="Table-Text Table-Text_counterparties">
                            <span>
                                {{ clientName(client) }}
                            </span>
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
                        <p 
                            class="Table-Text"
                            v-for="contact of client.client_textinfo"
                            :key="contact.id"
                        >
                            {{ contact.value1 | formatPhone }}
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p 
                            class="Table-Text"
                        >
                            {{ firstContactInClient(client).name }}
                        </p>
                        <p 
                            class="Table-Text"
                            v-for="contact of firstContactInClient(client).client_contact_textinfo"
                            :key="contact.id"
                        >
                            {{ contact.value1 | formatPhone }}
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
            clients: 'clients/getClients'
        }),
        debouncedSearch() {
            let DELAY = 300;
            return debounce(this.searchHandler, DELAY);
        },
        debounceInfiniteHandler() {
            let DELAY = 300;
            return debounce(this.infiniteHandler, DELAY);
        }
    },
    created() {

        Promise.all([this.fetchClients(this.searchParams)])
            .then((res) => {
                this.searchParams.qskipstep = res[0].length;
                this.pageLoader_resolveData();
            })
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
            // emit $state.reset like in infiniteHandler
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');

            this.searchParams.qskipstep = 0;
            this.searchClients(this.searchParams)
                .then((res) => {
                    this.searchParams.qskipstep = res.length;
                })
        },
        clientName(client) {
            let name = '';
            switch (client.client_type_id) {
                case '1': {
                    name = `${client.fizlico_firstname} ${client.fizlico_name} ${client.fizlico_lastname}`;
                    break;
                }
                case '2': {
                    name = `${client.yurlico_name}`;
                    break;
                }
            }
            return name;
        },
        firstContactInClient(client) {
            if (!client.client_contacts[0]) return '';
            return client.client_contacts[0];
        }
    }
}
</script>

<style scoped>
.MainSection-Row_title .Btn_type_add {
  width: 190px; }

.Search .Input {
  width: 376px; }
.Infinite-End {
    padding: 10px 0;
}
</style>

<style >
.Table_counterparties {
    overflow-y: initial !important;
}
.Table_counterparties .Table-Row {
  padding: 9px 10px; }
.Table_counterparties .Table-Row.Link {
  text-decoration: none; }
  .Table_counterparties .Table-Row.Link:hover {
    background-color: #f6f6f6; }

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
