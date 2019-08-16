<template>
  <form 
    class="Card Card_bgLightGreen Card_bd Card_bd_color_green SettingCard"
  >
    <div class="Form addnewuserform">
        <div class="Form-Row">
            <label class="Input">
                <span class="Label">Логин</span>
                <input 
                    type="text" 
                    class="Input-Control"
                    v-model="form.login"
                    @blur="$v.form.login.$touch()"
                >
            </label>
            <OkoError
                v-show="$v.form.login.$error"
            >
                Поле логин обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <label class="Input">
                <span class="Label">Пароль</span>
                <input 
                    type="password" 
                    class="Input-Control"
                    v-model="form.password"
                    @blur="$v.form.password.$touch()"
                >
            </label>
            <OkoError
                v-show="$v.form.password.$error"
            >
                Поле пароль обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <label class="Input">
                <span class="Label">Имя пользователя</span>
                <input 
                    type="text" 
                    class="Input-Control"
                    v-model="form.name"
                    @blur="$v.form.name.$touch()"
                >
            </label>
            <OkoError
                v-show="$v.form.name.$error"
            >
                Поле имя пользователя обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <label class="Select Select_theme_arrow">
                <span class="Label">Полномочия</span>
                <select 
                  class="Select-Control"
                  v-model="form.role_id"
                  @blur="$v.form.role_id.$touch()"
                >
                    <option value="1">
                        Администратор
                    </option>
                    <option value="2">
                        Бухгалтерия
                    </option>
                    <option value="3">
                        Юрист
                    </option>
                </select>
            </label>
            <OkoError
                v-show="$v.form.role_id.$error"
            >
                Поле полномочия обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <label class="Select Select_theme_arrow">
                <span class="Label">Филиал</span>
                <select 
                  class="Select-Control"
                  multiple
                  v-model="form.filials_id"
                  @blur="$v.form.filials_id.$touch()"
                >
                  <option 
                    v-for="filial of filials"
                    :value="filial.id"
                    :key="filial.id"
                  >
                    {{filial.title}}
                  </option>
                </select>
            </label>
            <OkoError
                v-show="$v.form.filials_id.$error"
            >
                Поле филиал обязательно
            </OkoError>
        </div>
        <div class="Form-Row Form-Row_btnWrap">
            <button 
              class="Btn Btn_theme_green Btn_size_m"
              :disabled="$v.$invalid"
              @click.prevent="addUser"
            >
              Добавить
            </button>
        </div>
    </div>
  </form>  
</template>

<script>
  import { required } from 'vuelidate/lib/validators';

  export default {
    props: {
      filials: {
        required,
        type: Array
      },
      roles: {
        required,
        type: Array
      }
    },
    data() {
      return {
        form: {
          login: null,
          password: null,
          name: null,
          role_id: null,
          filials_id: []
        }
      }
    },
    validations: {
      form: {
        login: { required },
        password: { required },
        name: { required },
        role_id: { required },
        filials_id: { required }
      }
    },
    computed: {
      
    },
    methods: {
      addUser() {
        this.$store.dispatch('users/addUser', this.form)
            .then(() => {
                this.form.login = null;
                this.form.password = null;
                this.form.name = null;
                this.form.role_id = null;
                this.form.filials_id = [];
            })
      }
    }
  }
</script>

<style scoped>
  .SettingCard {
    margin-right: 0 !important; }
  .Select-Control[multiple] {
    height: 50px;
  }
</style>
