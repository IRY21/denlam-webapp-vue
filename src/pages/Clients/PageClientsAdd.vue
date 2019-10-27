<template>
  <div>

    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <router-link
          class="Link Link_back"
          :to="{name: 'PageClients'}"
        >
            Вернуться назад
        </router-link>
        <h1 class="Heading_lvl1">
            Новый клиент
        </h1>
    </div>
    <form class="Form">
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
            <button 
                class="Btn Btn_theme_green Btn_size_m"
                :class="{'Btn_theme_wait': loading}"
                :disabled="$v.$invalid || loading"
                @click="addClientHandler"
            >
                Добавить контрагента
            </button>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required, email, minLength } from 'vuelidate/lib/validators';
import clientMixin from '@/_mixins/client';

import { ClientContactCard } from '@/components/pages/Clients/ClientsAdd'

export default {
    data() {
        return {
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

            loading: false,
        }
    },
    mixins: [clientMixin],
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
    created() {
        
    },
    methods: {
        ...mapActions('clients', ['addClient']),
        ...mapActions('contacts', ['addContact']),
        
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
                    let contactsToAdd = [];

                    for (let i = 0; i < this.contacts.length; ++i) {
                        contactsToAdd.push(this.addContactHandler(clientId, i));
                    }
                    Promise.all(contactsToAdd)
                        .then(() => {
                            this.loading = false;
                            this.$router.push({ name: 'PageClientAbout', 
                                                params: {
                                                    id: clientId
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
                const textinfoFields = this.textinfoMixin_checkTextinfoField([ 
                    ...currentContact.phoneFields, 
                    ...currentContact.emailFields
                ]);
                const newContact = {
                    client_id: clientId,
                    name: currentContact.name,
                    position: currentContact.position,
                    client_contacts_textinfo: textinfoFields
                }
                return this.addContact(newContact)
            }
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