<template>
  <div>
    <OkoTitle 
      :title="`${clientName} || Редактирование`" />

    <div>
        <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
            <router-link
                class="Link Link_back"
                :to="{ name: 'PageClientAbout', params: {clientId: currentClientId}}"
            >
                Вернуться назад
            </router-link>
            <h1 class="Heading_lvl1">{{ clientName }}</h1>
        </div>
        <form 
            class="Form"
            v-if="pageLoader_isDataLoaded"
        >
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
                                @click="deleteField('phone', index)"
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
                            @click="addField('phone', $event)"
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
                                @click="deleteField('email', index)"
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
                            @click="addField('email', $event)"
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
                        :deleteHandler="deleteContactHandler"
                    />
                    
                    <div class="Card Card_bd Card_contact-face">
                        <div 
                            class="Card_add"
                            @click="addContactForm"
                        >
                            + добавить контактное лицо
                        </div>
                    </div>
                </div>
            </div>
            <div class="MainSection-Row MainSection-Row_noTopPadding">
                <div 
                    class="Btn Btn_theme_green Btn_size_m"
                    :class="{'Btn_theme_wait': loading}"
                    :disabled="$v.$invalid || loading"
                    @click="updateClientHandler"
                >
                    Сохранить
                </div>
            </div>
            <div class="MainSection-Row MainSection-Row_noTopPadding">
                <div 
                    class="Btn Btn_theme_red Btn_size_m"
                    @click="clientDelete"
                >
                    Удалить
                </div>
            </div>
        </form>
        <div v-else>
            <AppSpinner />
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { required, email, minLength } from 'vuelidate/lib/validators';

import { ClientContactCard } from '@/components/pages/Clients/ClientsAdd';

export default {
    data() {
        return {
            client: {
                client_type_id: '',
                inn: '',
                fizlico_firstname: '',
                fizlico_name: '',
                fizlico_lastname: '',
                yurlico_name: '',
                address: '',
                phoneFields: [],
                emailFields: [],
            },
            
            contacts: [],

            loading: false,
        }
    },
    validations() {
        if (this.client.client_type_id === '1') {
            return {
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
    computed: {
        ...mapGetters({
            clientData: 'clients/getClient'
        }),
        currentClientId() {
            return this.$route.params.clientId
        },
        clientName() {
            const currentClient = this.client;
            let clientName = '';
            
            switch (currentClient.client_type_id) {
                case '2': {
                    clientName = currentClient.yurlico_name;
                break;
                }
                case '1': {
                    clientName =  `${currentClient.fizlico_firstname} ${currentClient.fizlico_name} ${currentClient.fizlico_lastname}`;
                break;
                }
            }
            return clientName;
        }
    },
    created() {
        Promise.all([this.fetchClient(this.currentClientId)])
            .then((res) => {
                const resClient = res[0];
                const textInfoFields = resClient.client_textinfo || [];
                const contactsFields = resClient.client_contacts || [];
                const self = this;

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
                    emailFields: [],
                };

                textInfoFields.forEach(function (item) {
                    switch (item.textinfo_type_id) {
                        case '1': {
                            self.client.phoneFields.push({
                                textinfo_type_id: '1',
                                value1: item.value1,
                                value2: item.value2,
                            })
                            break;
                        }
                        case '2': {
                            self.client.emailFields.push({
                                textinfo_type_id: '2',
                                value1: item.value1,
                            })
                            break;
                        }
                    }
                });

                contactsFields.forEach(function (item, index) {
                    const textInfoFields = item.client_contact_textinfo || [];
                    self.contacts.push({
                        client_id: resClient.id,
                        id: item.id,
                        name: item.name,
                        position: item.position,
                        phoneFields: [],
                        emailFields: [],
                    });

                    textInfoFields.forEach(function (item) {
                        switch (item.textinfo_type_id) {
                            case '1': {
                                self.contacts[index].phoneFields.push({
                                    textinfo_type_id: '1',
                                    value1: item.value1,
                                    value2: item.value2,
                                })
                                break;
                            }
                            case '2': {
                                self.contacts[index].emailFields.push({
                                    textinfo_type_id: '2',
                                    value1: item.value1,
                                })
                                break;
                            }
                        }
                    })
                });

                this.pageLoader_resolveData()
            });
    },
    methods: {
        ...mapActions('clients', ['fetchClient', 'updateClient', 'deleteClient']),
        ...mapActions('contacts', ['addContact', 'updateContact', 'deleteContact']),
        clientDelete() {
            this.deleteClient({  id: this.currentClientId })
                .then(() => {
                    this.okoModal_response({ type: 'success', 
                                            message: 'Клиент успешно изменен'});
                    
                    this.$router.push({ name: 'PageClients' });
                })
                .catch((err) => {
                    this.okoModal_response({type:'error', message: err});
                })
        },
        addContactForm() {
            this.contacts.push({
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
                    }],
            })
        },
        deleteContactCard(index) {
            this.contacts.splice(index, 1);
        },
        addField(type, evt) {
            switch (type) {
                case 'phone': {
                    this.client.phoneFields.push({
                        textinfo_type_id: '1',
                        value1: "",
                        value2: "",
                    })
                    break;
                }
                case 'email': {
                    this.client.emailFields.push({
                        textinfo_type_id: '2',
                        value1: "",
                    })
                    break;
                }
            }
            setTimeout(() => {
                evt.target.parentElement.previousElementSibling.querySelector('input').focus();
            }, 0)
        },
        deleteField(type, index) {
            switch (type) {
                case 'phone': {
                    this.client.phoneFields.splice(index, 1);
                    break;
                }
                case 'email': {
                    this.client.emailFields.splice(index, 1);
                    break;
                }
            }
        },
        checkTextinfoField(fields) {
            const valuesArr = fields.map(x => x.value1);
            const result = fields.reduce((acc, field, index) => {
                const indexInArr = valuesArr.indexOf(field.value1);
                if(field.value1 &&  indexInArr === index) { 
                    if (field.textinfo_type_id === '1') {
                        field.value1 = field.value1.replace(/[^0-9]/g, '');
                    }
                    acc.push(field);
                }

                return acc;
            }, []);

            return result;
        },
        updateClientHandler() {
            this.loading = true;

            const textinfoFields = this.checkTextinfoField([ 
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
            }

            this.updateClient(newClient)
                .then((res) => {
                    const clientId = res.id;
                    let contactsToAdd = [];

                    for (let i = 0; i < this.contacts.length; ++i) {
                        contactsToAdd.push(this.addContactHandler(clientId, i));
                    }
                    Promise.all(contactsToAdd)
                        .then(() => {
                            this.loading = false;
                            this.$router.push({ name: 'PageClientAbout', 
                                                params: {
                                                    clientId: clientId
                                                }});
                        })
                        .catch((err) => {
                            this.loading = false;
                            this.okoModal_response({type:'error', message: err}); 
                        })
                })
                .catch((err) => {
                    this.loading = false;
                    this.okoModal_response({type:'error', message: err});  
                })
        },
        addContactHandler(clientId, contactIndex) {
            const currentContact = this.contacts[contactIndex];


            if (currentContact.name) {
                const textinfoFields = this.checkTextinfoField([ 
                    ...currentContact.phoneFields, 
                    ...currentContact.emailFields
                ]);
                const newContact = {
                    client_id: clientId,
                    name: currentContact.name,
                    position: currentContact.position,
                    client_contacts_textinfo: textinfoFields
                }
                
                if(currentContact.id) {
                    return this.updateContact({id: currentContact.id, ...newContact});
                }
                return this.addContact(newContact);
            }
        },
        deleteContactHandler(index) {
            const contactId = this.contacts[index].id;
            if(!contactId) {
                return this.deleteContactCard(index);
            }

            this.okoModal_confirm()
                .then(() => {
                    return this.deleteContact(contactId)
                        .then(() => {
                            this.deleteContactCard(index);
                            this.okoModal_response({ type: 'success', 
                                                message: 'Контакт успешно удален'});
                        })
                        .catch(err => {
                            this.okoModal_response({type:'error', message: err});  
                        })
                })
                .catch(() => {})
                
        }
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
  margin: 5px 0 20px;
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

.Form-Column {
    margin-right: 10px;
}
</style>
