<template>
  <div class="Card Card_bd Card_contact-face">
    <div class="Form-Row">
        <div class="Form-Column">
            <OkoInput 
                type="text"
                v-model="contact.name"
                :label="'ФИО'"
                placeholder="Иванов Петр Семенович"
            />
        </div>
    </div>
    <div class="Form-Row">
        <div class="Form-Column">
            <OkoInput 
                type="text"
                v-model="contact.position"
                :label="'Должность'"
                placeholder="Менеджер по продажам"
            />
        </div>
    </div>
    <div class="Form-Row">
        <p class="Label">Телефоны</p>
        <div 
            class="Form-Row"
            v-for="(phone, index) in contact.phoneFields"
            :key="index"
        >
            <div class="Flex Flex_justify_flex-start Flex_align_center">
                <div class="Form-Column">
                    <OkoInputPhone
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
            v-for="(email, index) in contact.emailFields"
            :key="index"
        >
            <div class="Flex Flex_justify_flex-start Flex_align_center">
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="email.value1"
                        placeholder="ivanov@mail.ru"
                        @blur="vuelidateCheck_input($event, 'emailFields', 'contact')"
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
    <div class="Form-Row">
    <div 
        class="Btn Btn_theme_delete"
        @click="deleteHandler(arrIndex)"
    >
        Удалить
    </div>
    </div>
</div>
</template>

<script>
import { email } from 'vuelidate/lib/validators';

export default {
  props: {
    arrIndex: {
        required: true,
        type: Number
    },
    contact: {
      required: true,
      type: Object
    },
    deleteHandler: {
      required: true,
      type: Function
    }
  },
  validations() {
        return {
            contact: {
                emailFields: {
                    $each: {
                        value1: {
                            email
                        }
                    }
                },
                
            }
        }
    },
    methods: {
        addField(type, evt) {
            switch (type) {
                case 'phone': {
                    this.contact.phoneFields.push({
                        textinfo_type_id: '1',
                        value1: "",
                        value2: "",
                    })
                    break;
                }
                case 'email': {
                    this.contact.emailFields.push({
                        textinfo_type_id: '2',
                        value1: "",
                        value2: "",
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
                    this.contact.phoneFields.splice(index, 1);
                    break;
                }
                case 'email': {
                    this.contact.emailFields.splice(index, 1);
                    break;
                }
            }
        },
    }
}
</script>

<style scoped>

.Card_contact-face {
  width: 400px;
  margin-right: 20px;
  margin-bottom: 20px; }
  .Card_contact-face .Form-Column:nth-of-type(1) {
    width: 260px; }
  .Card_contact-face .Form-Column:nth-of-type(2) {
    width: 69px; }

.Link_line_add {
  margin: 5px 0 20px;
  color: #008acc; }

.Form-Column {
    margin-right: 10px;
}
</style>
