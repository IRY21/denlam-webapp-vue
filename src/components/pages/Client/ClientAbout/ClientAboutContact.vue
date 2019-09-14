<template>
  <div class="Card Card_bd Card_bd_color_green Card_contact">
    <h3 class="Heading_lvl2">{{ contact.name || ''}}</h3>
    <p class="Subheading">{{ contact.position || ''}}</p>
    <div class="Form-Row">
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
    <div class="Form-Row">
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
</template>

<script>
export default {
  props: {
    contact: {
      required: true,
      type: Object
    }
  },
  computed: {
  },
  methods: {
    chooseByTypeOfField(type) {
      if (this.contact.client_contact_textinfo) {
        return this.contact.client_contact_textinfo.filter(item => {
            return item.textinfo_type === type;
        });
      }
      return '';
    }
  }
}
</script>

<style scoped>

.Card_contact {
  width: 300px;
  margin-right: 10px;
  margin-bottom: 10px; }
  .Card_contact .Heading_lvl2 {
    margin-bottom: 0; }
  .Card_contact .Subheading {
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #b7b7b7; }
.Input-Text {
    padding-top: 0;}
.Input-Text:first-child {
  padding-top: 8px; }
</style>
