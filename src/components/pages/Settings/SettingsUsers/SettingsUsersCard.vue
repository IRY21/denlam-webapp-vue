<template>
  <form class="Card Card_bgWhite Card_bd Card_bd_color_darkBlue SettingCard">
    <div class="Form">
        <div class="Form-Row">
            <OkoInput
              type="text" 
              :label="'Логин'"
              v-model="form.login"
              @blur="$v.form.login.$touch()"
            />
            <OkoError
              v-show="$v.form.login.$error"
            >
              Поле логин обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <OkoInput
              :placeholder="'Введите для изменения'"
              type="password" 
              :label="'Пароль'"
              v-model="form.password"
            />
        </div>
        <div class="Form-Row">
            <OkoInput
              type="text" 
              :label="'Имя пользователя'"
              v-model="form.name"
              @blur="$v.form.name.$touch()"
            />
            <OkoError
                v-show="$v.form.name.$error"
            >
                Поле имя пользователя обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <label class="Select Select_theme_arrow">
                <span class="Label">Полномочия</span>
                <multiselect 
                  v-model="form.user_role" 
                  :value="selectedRoleToObject"
                  :options="roles" 
                  track-by="name"
                  :custom-label="customRolesLabel"
                  :searchable="false" 
                  :show-labels="false"
                  placeholder=""
                />
                <!-- <select 
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
                </select> -->
            </label>
            <OkoError
                v-show="$v.form.user_role.$error"
            >
                Поле полномочия обязательно
            </OkoError>
        </div>
        <div class="Form-Row">
            <label class="Select Select_theme_arrow">
                <span class="Label">Филиал</span>
                <multiselect
                  v-model="form.user_filials" 
                  :value="selectedFilialsToObject" 
                  :options="filials"
                  :multiple="true"
                  track-by="id"
                  :custom-label="customFilialsLabel"
                  placeholder=""
                  :show-labels="false"
                />
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
          id: this.user.id || '',
          login: this.user.login || '',
          password: this.user.password || '',
          name: this.user.name || '',
          user_role: [],
          user_filials: [],
        },
        loading: false,
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
        user_role: { required }
      }
    },
    created() {
      this.form.user_filials = this.selectedFilialsToObject();
      this.form.user_role = this.selectedRoleToObject();
    },
    computed: {
      userFilialsIds() {
        const filials= this.form.user_filials;
        let selectedArr = [];
        for (let i = 0; i < filials.length; i++) {
          selectedArr[i] = filials[i].id;
        }
        return selectedArr;
      }
    },
    methods: {
      selectedFilialsToObject() {
        const filialIds = this.user.user_filials_ids || [];
        return this.filials.filter(filial => {
          return filialIds.includes(filial.id);
        })
      },
      selectedRoleToObject() {
        const roleId = this.user.role_id || {};
        return this.roles.find(role => {
          return roleId === role.id;
        })
      },
      customFilialsLabel (option) {
        return `${option.title}`;
      },
      customRolesLabel (option) {
        return `${option.name}`;
      },
      updateUser() {
        this.loading = true;
        let userToUpdate = { 
          id: this.form.id,
          login: this.form.login,
          password: this.form.password,
          name: this.form.name,
          role_id: this.form.user_role.id,
          user_filials_ids: this.userFilialsIds 
        };
        this.$store.dispatch('users/updateUser', userToUpdate)
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
