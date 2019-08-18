<template>
  <form class="Card Card_bgWhite Card_bd Card_bd_color_darkBlue SettingCard">
    <div class="Form">
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
                    placeholder="Введите для изменения"
                    v-model="form.password"
                >
            </label>
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
                    :selected="currentOption(filial.id, form.user_filials_ids)"
                  >
                    {{filial.title}}
                  </option>
                </select>
            </label>
        </div>
        <div class="Form-Row Form-Row_btnWrap">
            <div class="Flex">
                <button 
                  class="Btn Btn_theme_green Btn_size_m"
                  :class="{'Btn_theme_wait': loading}"
                  :disabled="$v.$invalid || loading"
                  @click.prevent="updateUser"
                >
                  Сохранить
                </button>

                <div 
                  class="Btn Btn_theme_delete"
                  @click.prevent="chooseNewResponsible"
                >
                  Удалить
                </div>
            </div>
        </div>
    </div>
  </form>

  
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators';

  export default {
    props: {
      user: {
        required: true,
        type: Object
      },
      filials: {
        required: true,
        type: Array
      },
      roles: {
        required: true,
        type: Array
      },
      users: {
        required: true,
        type: Array
      }
    },
    data() {
      return {
        form: {
          id: this.user.id,
          login: this.user.login,
          password: this.user.password || '',
          name: this.user.name,
          role_id: this.user.role_id,
          user_filials_ids: this.user.user_filials_ids ?
                              this.user.user_filials_ids :
                              []
        },
        loading: false
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
            minLength: minLength(3),
            maxLength: maxLength(100),
        },
        name: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(100),
        },
        role_id: { required }
      }
    },
    computed: {

    },
    methods: {
      updateUser() {
        this.loading = true;
        this.$store.dispatch('users/updateUser', this.form)
          .then(() => {
            this.loading = false;
            this.okoModal_response({ type: 'success', 
                                          message: 'Пользователь успешно сохранен'});
          })
          .catch((err) => {
            this.loading = false;
            this.okoModal_response({type:'error', message: err});            
          })
      },
      chooseNewResponsible() {
        const searchUsersList = [...this.users];
        const index = searchUsersList.findIndex(user => user.id === this.form.id);
        searchUsersList.splice(index, 1);

        const searchConfig = {
          searchList: searchUsersList,
          searchParam: ['name'],
          tableColumns: [
            {
              id: 1,
              name: 'Кто будет отвечать за проекты удаляемого пользователя?',
              searchName: ['name'],
              size: '50%'
            }
          ],
          placeholder: 'Найти пользователя',
          callback: this.deleteUser,
          modalSettings: {
            width: 500,
            height: 'auto'
          }
        }

        this.okoModal_search(searchConfig);
      },
      deleteUser(id) {        
        this.$store.dispatch('users/deleteUser', {  id: this.form.id,
                                                    new_responsible_user_id: id})
          .then(() => {
            this.okoModal_response({ type: 'success', 
                                    message: 'Пользователь успешно удален'});
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
  .SettingCard:nth-of-type(3n) {
    margin-right: 0; }
  .SettingCard .Btn_theme_delete {
    margin-left: 28px; }
  .Select-Control[multiple] {
    height: 50px;
  }
</style>
