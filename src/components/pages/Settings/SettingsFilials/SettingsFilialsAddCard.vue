<template>
  <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_add-product">
    <form class="Form">
        <div class="Form-Row">
            <h3 class="Heading_lvl3">Добавить филиал</h3>
        </div>
        <div class="Form-Row">
            <label class="Input Input_bgWhite">
                <span class="Label">Выберите филиал</span>
                <input 
                  type="text" 
                  class="Input-Control" 
                  placeholder="Название филиала"
                  v-model="form.title"
                >
            </label>
            <div v-if="$v.form.title.$error">
              <OkoError
                  v-if="!$v.form.title.required"
              >
                  Поле полномочия обязательно
              </OkoError>
              <OkoError
                  v-if="!$v.form.title.minLength || !$v.form.title.maxLength"
              >
                  от 2 до 100 символов
              </OkoError>
            </div>
        </div>
        <div class="Form-Row Form-Row_btnWrap">
            <div 
              class="Btn Btn_theme_green Btn_size_m"
              :disabled="$v.$invalid"
              @click.prevent="addFilial"
            >
              Добавить
            </div>
        </div>
    </form>
  </div>
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      form: {
        title: ''
      }
    }
  },
  validations: {
    form: {
      title: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(100),
      }
    }
  },
  methods: {
    addFilial() {
      this.$store.dispatch('filials/addFilial', this.form)
        .then(() => {
          this.form.title = '';

          this.okoModal_response({ type: 'success', 
                                   message: 'Филиал успешно добавлен'});
        })
        .catch((err) => {
          this.okoModal_response({type:'error', message: err});  
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .Card_add-product {
    max-width: 360px;
    padding: 15px 90px 20px 20px; }
    .Card_add-product .Heading_lvl3 {
      margin-bottom: 10px; }
</style>
