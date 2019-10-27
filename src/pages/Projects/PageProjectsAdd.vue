<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <h1 class="Heading_lvl1">
          Создание проекта
      </h1>
    </div>
    <form enctype="multipart/form-data" method="POST" action="/new-project?action=project_add" class="Form" id="newproject_add">
        <div class="MainSection-Row MainSection-Row_size_add">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="projectData.title"
                        :label="'Наименование проекта (заказчика)'"
                        @blur="vuelidateCheck_input($event, 'title', 'projectData')"
                    />
                </div>
                <div class="Form-Column">
                    <OkoInput 
                        type="number"
                        v-model="projectData.budget"
                        :label="'Бюджет сделки'"
                        @blur="vuelidateCheck_input($event, 'budget', 'projectData')"
                        theme="ruble"
                        min="0"
                        step="0.01"
                    />
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Выберите продукт</p>
                        <multiselect
                            v-model="projectData.products_ids" 
                            :value="projectData.products_ids" 
                            :options="products"
                            :multiple="true"
                            track-by="title"
                            :custom-label="customPostionsLabel"
                            placeholder=""
                            :selectLabel="''"
                            :deselectLabel="''"
                            :selectedLabel="'Выбрано'"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <label class="Select Select_theme_arrow">
                        <span class="Label">Филиал (привязанность)</span>
                        <multiselect
                            v-model="projectData.filial_id"
                            :options="filials"
                            track-by="title"
                            :value="projectData.filial_id"
                            :custom-label="customPostionsLabel"
                            :searchable="false"
                            :show-labels="false"
                            :allow-empty="false"
                            placeholder
                        />
                    </label>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <OkoDatepicker
                        type="text"
                        v-model="projectData.plandate_start"
                        :label="'Дата начала работ по договору'"
                        :format="'dd.MM.yyyy'"
                        placeholder="дд.мм.гггг"
                    />
                </div>
                <div class="Form-Column">
                    <OkoDatepicker
                        type="text"
                        v-model="projectData.plandate_end"
                        :label="'Дата окончания работ по договору'"
                        :format="'dd.MM.yyyy'"
                        placeholder="дд.мм.гггг"
                    />
                </div>
            </div>
            <div class="Form-Row">
                <p class="Label">Примечание</p>
                <textarea 
                    v-model="projectData.primechanie"
                    class="Textarea" 
                    placeholder="Введите текст..."></textarea>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_title-lvl2 MainSection-Row_noBottomPadding">
            <h2 class="Heading_lvl2">Данные о контрагенте</h2>
        </div>
        <div class="MainSection-Row MainSection-Row_size_add">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column Form-Column_full-line">
                    <div class="Input Input_type_search">
                        <p class="Label">Наименование организации, ФИО или ИНН</p>
                        <autocomplete
                            :search="search"
                            placeholder=""
                            aria-label="Поиск контрагентов"
                            :get-result-value="getResultValue"
                            @submit="handleAutocompleteSubmit"
                        >
                            <template
                                v-slot="{
                                    rootProps,
                                    inputProps,
                                    inputListeners,
                                    resultListProps,
                                    resultListListeners,
                                    results,
                                    resultProps
                                }"
                            >
                                <div v-bind="rootProps">
                                    <AutocompleteInput
                                        v-bind="inputProps"
                                        v-on="inputListeners"
                                        :class="[
                                                'autocomplete-input',
                                                { 'autocomplete-input-focused': autocomleteComponent.focused }
                                            ]"
                                        @focus="handleFocus"
                                        @blur="handleBlur"
                                    ></AutocompleteInput>
                                    <ul
                                        class="Input-SearchResult SearchResult" 
                                        v-bind="resultListProps" 
                                        v-on="resultListListeners"
                                    >
                                        <li
                                            class="SearchResult-Item" 
                                            v-for="(result, index) in results"
                                            :key="resultProps[index].id"
                                            v-bind="resultProps[index]"
                                        >
                                            <div class="SearchResult-Column">
                                                {{ computedParam_name('client', result) }}
                                            </div>
                                            <div class="SearchResult-Column">
                                                ИНН: {{ result.inn }}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </autocomplete>
                    </div>
                </div>
                <!-- <div class="Form-Column">
                    <p class="Label">&nbsp;</p>
                    <div 
                        class="Btn Btn_theme_blue chooseFromList"
                        @click="toggleCounteragentFullListPopup"
                    >
                        смотреть полный список
                    </div>
                </div> -->
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_size_add">
            <h2 class="Heading_lvl2">Тип клиента</h2>
            <div class="Form-Row Flex Flex_justify_start">
                <div class="Form-Column Form-Column_auto" style="margin-right: 40px;">
                    <OkoRadio 
                        v-model="client.client_type_id" 
                        name="options"
                        :value="'1'"
                    >
                        Физ. лицо
                    </OkoRadio>
                </div>
                <div class="Form-Column Form-Column_auto">
                    <OkoRadio 
                        v-model="client.client_type_id" 
                        name="options"
                        value="2"
                    >
                        Юр. лицо
                    </OkoRadio>
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_size_add">
            <div 
                v-if="client.client_type_id === '1'"
                class="Form-Row"
            >
                <div class="Form-Row Form-Row_col2">
                    <div class="Form-Column">
                        <OkoInput 
                            type="text"
                            v-model="client.fizlico_firstname"
                            :label="'Фамилия'"
                            @blur="vuelidateCheck_input($event, 'fizlico_firstname', 'client')"
                        />
                    </div>
                </div>
                <div class="Form-Row Form-Row_col2">
                    <div class="Form-Column">
                        <OkoInput 
                            type="text"
                            v-model="client.fizlico_name"
                            :label="'Имя'"
                            @blur="vuelidateCheck_input($event, 'fizlico_name', 'client')"
                        />
                    </div>
                </div>
                <div class="Form-Row Form-Row_col2">
                    <div class="Form-Column">
                        <OkoInput 
                            type="text"
                            v-model="client.fizlico_lastname"
                            :label="'Отчество'"
                            @blur="vuelidateCheck_input($event, 'fizlico_lastname', 'client')"
                        />
                    </div>
                </div>
            </div>
            <div 
                v-if="client.client_type_id === '2'"
                class="Form-Row Form-Row_col2"
            >
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="client.yurlico_name"
                        :label="'Наименование организации'"
                        @blur="vuelidateCheck_input($event, 'yurlico_name', 'client')"
                    />
                </div>
            </div>
            <div class="Form-Row">
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="client.inn"
                        @keypress="checkInputType_isNumber()"
                        :label="'Введите ИНН'"
                        @blur="vuelidateCheck_input($event, 'inn', 'client')"
                    />
                </div>
            </div>
            <div class="Form-Row">
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="client.address"
                        :label="'Полный адрес'"
                    />
                </div>
            </div>
            <div class="Form-Row">
                <p class="Label">Телефоны</p>
                <div 
                    class="Form-Row"
                    v-for="(phone, index) in client.phoneFields"
                    :key="index"
                >
                    <div class="Flex Flex_justify_flex-start Flex_align_center">
                        <div class="Form-Column">
                            <OkoInputPhone
                                type="text"
                                v-model="phone.value1"
                                placeholder="8 (999) 999-99-99"
                                @blur="vuelidateCheck_input($event, 'phoneFields', 'client')"
                            />
                        </div>
                        <div class="Form-Column Form-Column_auto">
                            <OkoInput 
                                :class="'Input_num_add'"
                                type="text"
                                v-model="phone.value2"
                                @keypress="checkInputType_isNumber()"
                                placeholder="доб. 11"
                            />
                        </div>
                        <svg 
                            class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel"
                            @click="textinfoMixin_deleteTextinfoField(client, 'phone', index)"
                        >
                            <use 
                                xlink:href="/img/sprite.svg#cancel" 
                                href="/img/sprite.svg#cancel"></use>
                        </svg>
                    </div>
                </div>
                <div class="Form-Row">
                    <div 
                        class="Link Link_dashed Link_line_add"
                        @click="textinfoMixin_addTextinfoField(client, 'phone', $event)"
                    >
                        +  добавить
                    </div>
                </div>
            </div>
            <div class="Form-Row">
                <p class="Label">Email</p>
                <div 
                    class="Form-Row"
                    v-for="(email, index) in client.emailFields"
                    :key="index"
                >
                    <div class="Flex Flex_justify_flex-start Flex_align_center">
                        <div class="Form-Column">
                            <OkoInput 
                                type="text"
                                v-model="email.value1"
                                placeholder="ivanov@mail.ru"
                                @blur="vuelidateCheck_input($event, 'emailFields', 'client')"
                            />
                        </div>
                        <svg 
                            class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel"
                            @click="textinfoMixin_deleteTextinfoField(client, 'email', index)"
                        >
                            <use 
                                xlink:href="/img/sprite.svg#cancel" 
                                href="/img/sprite.svg#cancel"></use>
                        </svg>
                    </div>
                </div>
                <div class="Form-Row">
                    <div 
                        class="Link Link_dashed Link_line_add"
                        @click="textinfoMixin_addTextinfoField(client, 'email', $event)"
                    >
                        +  добавить
                    </div>
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_title-lvl2 MainSection-Row_noBottomPadding">
            <h2 class="Heading_lvl2">Контактные лица</h2>
        </div>
        <div class="MainSection-Row">
            <div class="Flex Flex_wrap">

                <ClientContactCard 
                    v-for="(contact, index) in contacts"
                    :key="index"
                    :contact="contact"
                    :arrIndex="index"
                    :deleteHandler="clientMixin_deleteContactCard"
                />
                
                <div class="Card Card_bd Card_contact-face">
                    <div 
                        class="Card_add"
                        @click="clientMixin_addContactCard"
                    >
                        + добавить контактное лицо
                    </div>
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_noTopPadding">
            <div 
                class="Btn Btn_theme_green Btn_size_m"
                @click="addProjectHandler"
            >
                Добавить проект
            </div>
        </div>
    </form>
    
    <div 
        class="chooseFromListPopup-Overlay"
        v-if="counteragentFullListPopupShow"
    >
        <div class="chooseFromListPopup">
            <div 
                class="chooseFromListPopup-Close"
                @click="toggleCounteragentFullListPopup"
            >
                <svg class="Icon">
                    <use
                            xlink:href="/img/sprite.svg#cancel"
                            href="/img/sprite.svg#cancel"></use>
                </svg>
            </div>
            <div class="chooseFromListPopup-Search">
                <div class="Search">
                    <div class="Input">
                        <input type="text"
                              value=""
                              class="Input-Control"
                              placeholder="Введите название или ИНН для поиска.."
                        />
                    </div>
                    <div class="Btn Btn_theme_blue">Найти</div>
                </div>
            </div>
            <div class="Table">
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
                            ИНН
                        </p>
                    </div>
                </div>
                <div class="Table-Row Table-Row_link" data-counterparties-id="1">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            ЖК «Новоселов»
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Уфа
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            024203222908
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';
import { required, email, minLength } from 'vuelidate/lib/validators';
import clientMixin from '@/_mixins/client';

import { ClientContactCard } from '@/components/pages/Clients/ClientsAdd'

export default {
    name: 'PageProjectsAdd',
    data() {
        return {
            filials: [],
            products: [],
            projectData: {
                title: '',
                budget: '',
                filial_id: [],
                plandate_start: '',
                plandate_end: '',
                primechanie: '',
                products_ids: [],
                color_id: '1',
                client_id: '132'
            },
            client: {
                client_type_id: '1',
                inn: '',
                fizlico_firstname: '',
                fizlico_name: '',
                fizlico_lastname: '',
                yurlico_name: '',
                address: '',
                phoneFields: [{
                        textinfo_type_id: '1',
                        value1: "",
                        value2: "",
                    }],
                emailFields: [{
                        textinfo_type_id: '2',
                        value1: "",
                        value2: "",
                    }],
            },
            
            contacts: [{
                client_id: "",
                name: "",
                position: "",
                phoneFields: [{
                        textinfo_type_id: '1',
                        value1: "",
                        value2: "",
                    }],
                emailFields: [{
                        textinfo_type_id: '2',
                        value1: "",
                        value2: "",
                    }],
            }],
            autocomleteComponent: {
                focused: false,
            },
            counteragentFullListPopupShow: false,

            formClientType: "add",
            loading: false,
            error: false
        }
    },
    mixins: [clientMixin],
    validations() {
        if (this.client.client_type_id === '1') {
            return {
                projectData: {
                    title: { required },
                    filial_id: { required },
                    plandate_start: { required },
                    plandate_end: { required },
                    budget: { required },
                    products_ids: { required },
                },
                client: {
                    inn: {
                        required
                    },
                    fizlico_firstname: {
                        required
                    },
                    fizlico_name: {
                        required
                    },
                    fizlico_lastname: {
                        required
                    },
                    phoneFields: {
                        $each: {
                            value1: {
                                minLength: minLength(11)
                            }
                        }
                    },
                    emailFields: {
                        $each: {
                            value1: {
                                email
                            }
                        }
                    },
                }
            }
        } else if (this.client.client_type_id === '2') {
            return {
                projectData: {
                    title: { required },
                    filial_id: { required },
                    plandate_start: { required },
                    plandate_end: { required },
                    budget: { required },
                    products_ids: { required },
                },
                client: {
                    inn: {
                        required
                    },
                    yurlico_name: {
                        required
                    },
                    phoneFields: {
                        $each: {
                            value1: {
                                minLength: minLength(11)
                            }
                        },
                    },
                    emailFields: {
                        $each: {
                            value1: {
                                email
                            }
                        }
                    },
                }
            }
        }
        
    },
    components: {
        ClientContactCard
    },
    created() {
        Promise.all([this.fetchFilials(), this.fetchProducts()])
            .then((res) => {
                this.filials = res[0];
                this.products = res[1];
                this.projectData.filial_id = res[0][0];
                this.projectData.products_ids = res[1][0];
                this.pageLoader_resolveData();
            })
    },
    computed: {},
    methods: {
        ...mapActions("projects", ["addProject"]),
        ...mapActions("clients", ["addClient", "searchClients", "fetchClient", "updateClient", "deleteClient"]),
        ...mapActions("contacts", ["addContact", "updateContact", "deleteContact"]),
        ...mapActions('filials', ['fetchFilials']),
        ...mapActions('products', ['fetchProducts']),
        toggleCounteragentFullListPopup() {
            this.counteragentFullListPopupShow = !this.counteragentFullListPopupShow;
        },
        search(input) {
            if (input.length === 0) {
                return []
            } else {
                return this.searchClients(
                    {
                        qlimit: 5,
                        qskipstep: 0,
                        search: input,
                    }
                    )
            }
        },
        handleFocus() {
            this.autocomleteComponent.focused = true;
        },
        handleBlur() {
            this.autocomleteComponent.focused = false;
            //this.client
        },
        getResultValue(result) {
            return this.computedParam_name('client', result);
        },
        
        handleAutocompleteSubmit(result)  {
            const resClient = result;
            const textInfoFields = resClient.client_textinfo || [];
            const contactsFields = resClient.client_contacts || [];
            const self = this;

            this.autocomleteComponent.focused = false;

            function textinfoSplit(fieldToFill, textinfo) {
                textinfo.forEach(function(item) {
                    switch (item.textinfo_type_id) {
                        case "1": {
                            fieldToFill.phoneFields.push({
                                textinfo_type_id: "1",
                                value1: item.value1,
                                value2: item.value2
                            });
                            break;
                        }
                        case "2": {
                            fieldToFill.emailFields.push({
                                textinfo_type_id: "2",
                                value1: item.value1
                            });
                            break;
                        }
                    }
                });
            }

            this.client = {
                id: resClient.id,
                client_type_id: resClient.client_type_id,
                inn: resClient.inn,
                fizlico_firstname: resClient.fizlico_firstname,
                fizlico_name: resClient.fizlico_name,
                fizlico_lastname: resClient.fizlico_lastname,
                yurlico_name: resClient.yurlico_name,
                address: resClient.address,
                phoneFields: [],
                emailFields: []
            };

            textinfoSplit(self.client, textInfoFields);

            contactsFields.forEach(function(item, index) {
                const textInfoFields = item.client_contact_textinfo || [];
                self.contacts.push({
                    client_id: resClient.id,
                    id: item.id,
                    name: item.name,
                    position: item.position,
                    phoneFields: [],
                    emailFields: []
                });

                textinfoSplit(self.contacts[index], textInfoFields);
            });
        },

        customPostionsLabel(option) {
            return `${option.title}`;
        },

        addProjectHandler() {
            const self = this;
            this.loading = true;

            function projectProductsIds(products) {
                if (!(products instanceof Array)) {
                    products = [products];
                }
                return products.map((item) => {
                    return item.id;
                }, []);
            }

            const newProject = {
                title: this.projectData.title,
                budget: this.projectData.budget,
                filial_id: this.projectData.filial_id.id,
                plandate_start: moment(this.projectData.plandate_start).format('YYYY-MM-DD hh:mm:ss'),
                plandate_end: moment(this.projectData.plandate_end).format('YYYY-MM-DD hh:mm:ss'),
                primechanie: this.projectData.primechanie,
                products_ids: projectProductsIds(this.projectData.products_ids),
                color_id: this.projectData.color_id,
                client_id: this.projectData.client_id
            }
            
            if (this.client.inn && this.formClientType === 'add') {
                this.addClientHandler();
                    /* .then(() => {

                    }) */
            } else if (this.client.inn && this.formClientType === 'update') {
                this.updateClientHandler();
            }

            if (!this.error) {
                this.addProject(newProject)
                    .then((res) => {
                        const projectId = res.id;
                        
                        /* this.$router.push({ name: 'PageProjectAbout', 
                                            params: {
                                                id: projectId
                                            }}); */
                    })
                    .catch(err => {
                        this.loading = false;
                        this.okoModal_response({ type: "error", message: err });
                    });
            }
            
        },
        addClientHandler() {
            this.loading = true;

            const textinfoFields = this.textinfoMixin_checkTextinfoField([ 
                    ...this.client.phoneFields, 
                    ...this.client.emailFields
                ]);

            const newClient = {
                client_type_id: this.client.client_type_id,
                inn: this.client.inn,
                fizlico_firstname: this.client.fizlico_firstname,
                fizlico_name: this.client.fizlico_name,
                fizlico_lastname: this.client.fizlico_lastname,
                yurlico_name: this.client.yurlico_name,
                address: this.client.address,
                client_textinfo: textinfoFields
            }
            
            this.addClient(newClient)
                .then((res) => {
                    const clientId = res.id;
                    this.projectData.client_id = clientId;
                    let contactsToAdd = [];

                    for (let i = 0; i < this.contacts.length; ++i) {
                        contactsToAdd.push(this.addContactHandler(clientId, i));
                    }
                    Promise.all(contactsToAdd)
                        .then(() => {
                            this.loading = false;
                        })
                        .catch((err) => {
                            this.loading = false;
                            this.error = true;
                            this.okoModal_response({type:'error', message: err}); 
                        })
                })
                .catch((err) => {
                    this.loading = false;
                    this.error = true;
                    this.okoModal_response({type:'error', message: err});  
                })
        },
        updateClientHandler() {
            this.loading = true;

            const textinfoFields = this.textinfoMixin_checkTextinfoField([
                ...this.client.phoneFields,
                ...this.client.emailFields
            ]);

            const newClient = {
                id: this.client.id,
                client_type_id: this.client.client_type_id,
                inn: this.client.inn,
                fizlico_firstname: this.client.fizlico_firstname,
                fizlico_name: this.client.fizlico_name,
                fizlico_lastname: this.client.fizlico_lastname,
                yurlico_name: this.client.yurlico_name,
                address: this.client.address,
                client_textinfo: textinfoFields
            };

            this.updateClient(newClient)
                .then(res => {
                const clientId = res.id;
                let contactsToAdd = [];

                for (let i = 0; i < this.contacts.length; ++i) {
                    contactsToAdd.push(this.addContactHandler(clientId, i));
                }
                Promise.all(contactsToAdd)
                    .then(() => {
                        this.loading = false;
                        this.$router.push({
                            name: "PageClientAbout",
                            params: {
                            clientId: clientId
                            }
                        });
                    })
                    .catch(err => {
                        this.loading = false;
                        this.error = true;
                        this.okoModal_response({ type: "error", message: err });
                    });
                })
                .catch(err => {
                    this.loading = false;
                    this.error = true;
                    this.okoModal_response({ type: "error", message: err });
                });
            },
            clientDelete() {
                this.deleteClient({ id: this.computedParam_currentRouteId })
                    .then(() => {
                        this.okoModal_response({
                            type: "success",
                            message: "Клиент успешно удален"
                        });

                        this.$router.push({ name: "PageClients" });
                    })
                    .catch(err => {
                        this.error = true;
                        this.okoModal_response({ type: "error", message: err });
                    });
            },
            addContactHandler(clientId, contactIndex) {
                const currentContact = this.contacts[contactIndex];

                if (currentContact.name) {
                    const textinfoFields = this.textinfoMixin_checkTextinfoField([
                        ...currentContact.phoneFields,
                        ...currentContact.emailFields
                    ]);
                    const newContact = {
                        client_id: clientId,
                        name: currentContact.name,
                        position: currentContact.position,
                        client_contacts_textinfo: textinfoFields
                    };

                    if (currentContact.id) {
                        return this.updateContact({ id: currentContact.id, ...newContact });
                    }
                    return this.addContact(newContact);
                }
        },
    }
}
</script>

<style scoped>
.MainSection-Row_title {
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px; }

.MainSection-Row_size_add {
  max-width: 650px; }

.Form-Row .Form-Row {
  margin-bottom: 5px; }
  .Form-Row .Form-Row:last-of-type {
    margin-bottom: 0; }

.Input_num_add {
  width: 69px; }

.Card_contact-face {
  width: 400px;
  margin-right: 20px;
  margin-bottom: 20px; }
  .Card_contact-face .Form-Column:nth-of-type(1) {
    width: 280px; }
  .Card_contact-face .Form-Column:nth-of-type(2) {
    width: 69px; }

.Link_line_add {
  margin: 15px 0 20px;
  color: #008acc; }

.File_theme_link {
  display: inline-block; }

.Card_addWrap {
  height: 100%; }

.Card_add {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #c8c8c8;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; }

.Btn.chooseFromList {
  height: 30px; }

.Input_type_search .Input-SearchResult {
    display: initial;
}
.Input-SearchResult-Item {
    padding-left: 48px;
}
.chooseFromListPopup-Overlay {
    z-index: 500;
}

.Form-Column {
    margin-right: 10px;
}
.Form-Column_full-line {
    width: 100%;
}

.SearchResult-Item {
    display: flex;
    cursor: pointer;
}
.SearchResult-Column {
    width: 50%;
}
</style>
