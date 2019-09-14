<template>
  <div>
    <OkoTitle 
      :title="`${clientName} || Данные о клиенте`" />

    <div class="MainSection-Row MainSection-Row_size_add">
        <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
                <div class="Input">
                    <p class="Label">ИНН</p>
                    <div class="Input-Text">{{ client.inn || '' }}</div>
                </div>
            </div>
            <div class="Form-Column">
                <div class="Input">
                    <p class="Label">Адрес</p>
                    <div class="Input-Text">{{ client.address || '' }}</div>
                </div>
            </div>
        </div>
        <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
                <div class="Input">
                    <p class="Label">Телефоны</p>
                    <div>
                        <p 
                            class="Input-Text"
                            v-for="(phone, index) of chooseByTypeOfField('Телефон')"
                            :key="index"
                        >
                            {{ phone.value1 | formatPhone }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="Form-Column">
                <div class="Input">
                    <p class="Label">Email</p>
                    <div>
                        <p 
                            class="Input-Text"
                            v-for="(email, index) of chooseByTypeOfField('Email')"
                            :key="index"
                        >
                            {{ email.value1 }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Line"></div>
    </div>
    <div class="MainSection-Row MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2 Color_black">Контактные лица</h2>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Flex Flex_wrap">
            <ClientAboutContact 
                v-for="(contact, index) of client.client_contacts"
                :key="index"
                :contact="contact"
            />
        </div>        
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { ClientAboutContact } from '@/components/pages/Client/ClientAbout'

export default {
    props: {
        clientName: {
            required: true,
            type: String
        }
    },
    components: {
        ClientAboutContact
    },
    computed: {
        ...mapState({
            client: state => state.clients.item
        }),
    },
    methods: {
        chooseByTypeOfField(type) {
        if (this.client.client_textinfo) {
            
            return this.client.client_textinfo.filter(item => {
                return item.textinfo_type === type;
            });
        }
        return '';
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
.Input-Text {
    padding-top: 0;}
.Input-Text:first-child {
  padding-top: 8px; }

.Heading_lvl2.Color_black {
  color: #000000; }

</style>
