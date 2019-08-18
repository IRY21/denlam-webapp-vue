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
                  <option 
                    v-for="role of roles"
                    :value="role.id"
                    :key="role.id"
                    :selected="currentOption(role.id, form.role_id)"
                  >
                    {{role.name}}
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
                  v-model="form.user_filials_ids"
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
  import { required, minLength, maxLength } from 'vuelidate/lib/validators';

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
          user_filials_ids: []
        }
      }
    },
    validations: {
      form: {
        login: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(100),
        },
        password: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(100),
        },
        name: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(100),
        },
        role_id: { required },
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
                this.form.user_filials_ids = [];

                this.okoModal_response({ type: 'success', 
                                              message: 'Пользователь успешно добавлен'});
            })
            .catch((err) => {
              this.okoModal_response({type:'error', message: err});  
            })
      },
      currentOption(optionId, formOptionId) {
        if (typeof(formOptionId) === Array) {
          return formOptionId.filter(id => optionId === id)
        }
        return optionId === this.form[formOptionId];
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
