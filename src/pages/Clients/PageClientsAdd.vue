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
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <OkoRadio 
                        v-model="client.client_type_id" 
                        name="options"
                        value="2"
                    >
                        Юр. лицо
                    </OkoRadio>
                </div>
                <div class="Form-Column">
                    <OkoRadio 
                        v-model="client.client_type_id" 
                        name="options"
                        :value="'1'"
                    >
                        Физ. лицо
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
                        />
                    </div>
                </div>
                <div class="Form-Row Form-Row_col2">
                    <div class="Form-Column">
                        <OkoInput 
                            type="text"
                            v-model="client.fizlico_name"
                            :label="'Имя'"
                        />
                    </div>
                </div>
                <div class="Form-Row Form-Row_col2">
                    <div class="Form-Column">
                        <OkoInput 
                            type="text"
                            v-model="client.fizlico_lastname"
                            :label="'Отчество'"
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
                            <OkoInput 
                                type="text"
                                v-model="phone.value1"
                                placeholder="8 (999) 999-99-99"
                            />
                        </div>
                        <div class="Form-Column Form-Column_auto">
                            <OkoInput 
                                :class="'Input_num_add'"
                                type="text"
                                v-model="phone.value2"
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
                        @click="addField('phone')"
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
                        @click="addField('email')"
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
                    :deleteHandler="deleteCard"
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
                @click="addClient()"
            >
                Добавить контрагента
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { ClientContactCard } from '@/components/pages/Clients/ClientsAdd'

export default {
    data() {
        return {
            client: {
                client_type_id: '2',
                inn: '',
                fizlico_firstname: '',
                fizlico_name: '',
                fizlico_lastname: '',
                yurlico_name: '',
                address: '',
                phoneFields: [],
                emailFields: [],
            },
            
            contacts: []
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
        addContactForm() {
            this.contacts.push({
                client_id: "",
                name: "",
                position: "",
                phoneFields: [],
                emailFields: [],
            })
        },
        deleteCard(index) {
            this.contacts.splice(index, 1);
        },
        addField(type) {
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
                        value2: "",
                    })
                    break;
                }
            }
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
        addClient() {
            const newClient = {
                client_type_id: this.client.client_type_id,
                inn: this.client.inn,
                fizlico_firstname: this.client.fizlico_firstname,
                fizlico_name: this.client.fizlico_name,
                fizlico_lastname: this.client.fizlico_lastname,
                yurlico_name: this.client.yurlico_name,
                address: this.client.address,
                client_textinfo: [ 
                    ...this.client.phoneFields, 
                    ...this.client.emailFields
                ]  
            }

            this.$store.dispatch('clients/addClient', newClient)
            .then((res) => {
                const clientId = res.id;
                let contactsToAdd = [];

                for (let i = 0; i < this.contacts.length; ++i) {
                    contactsToAdd.push(this.addContact(clientId, i));
                }
                Promise.all(contactsToAdd)
                    .then(() => {
                        this.$router.push({ name: 'PageClientAbout', 
                                            params: {
                                                clientId: clientId
                                            }});
                    })
            })
            .catch((err) => {
              this.okoModal_response({type:'error', message: err});  
            })
      },
      addContact(clientId, contactIndex) {
            const newContact = {
                client_id: clientId,
                name: this.contacts[contactIndex].name,
                position: this.contacts[contactIndex].position,
                client_contacts_textinfo: [ 
                    ...this.contacts[contactIndex].phoneFields, 
                    ...this.contacts[contactIndex].emailFields
                ]
            }
           return this.$store.dispatch('contacts/addContact', newContact)
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

.Form-Column {
    margin-right: 10px;
}
</style>