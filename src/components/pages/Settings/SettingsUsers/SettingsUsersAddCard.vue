<template>
  <form 
    class="Card Card_bgLightGreen Card_bd Card_bd_color_green SettingCard"
    @submit.prevent="addUser"
  >
    <div class="Form addnewuserform">
        <div class="Form-Row">
            <OkoInput
              type="text" 
              :label="'Логин'"
              v-model="form.login"
              @blur="vuelidateCheck_input($event, 'login')"
            />
        </div>
        <div class="Form-Row">
            <OkoInput
              type="password" 
              :label="'Пароль'"
              v-model="form.password"
              @blur="vuelidateCheck_input($event, 'password')"
            />
        </div>
        <div class="Form-Row">
            <OkoInput
              type="text" 
              :label="'Имя пользователя'"
              v-model="form.name"
              @blur="vuelidateCheck_input($event, 'name')"
            />
        </div>
        <div class="Form-Row">
            <label 
              class="Select Select_theme_arrow"
            >
                <span class="Label">Полномочия</span>
                <multiselect 
                  v-model="form.user_role" 
                  :value="selectedRoleToObject"
                  :options="roles" 
                  track-by="name"
                  :custom-label="customRolesLabel"
                  :searchable="false" 
                  :show-labels="false"
                  :allow-empty="false"
                  placeholder=""
                />
                <!-- <select 
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
                </select> -->
            </label>
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
                  :selectLabel="''"
                  :deselectLabel="''"
                  :selectedLabel="'Выбрано'"
                />
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
  import { setTimeout } from 'timers';

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
          user_role: null,
          user_filials: null,
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
        user_role: { required },
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
      formCheck(e, name) {
        const field = e.target;
        this.$v.form[name].$touch();
        if (this.$v.form[name].$error) {
          field.parentNode.classList.add('Input_error');
          setTimeout(() => {
            field.parentNode.classList.remove('Input_error')
          }, 500)
        }
      },
      selectedFilialsToObject() {
        const filialIds = [];
        return this.filials.filter(filial => {
          return filialIds.includes(filial.id);
        })
      },
      selectedRoleToObject() {
        const roleId = this.roles[0].id || {};
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
      addUser() {
        if (this.$v.form.$invalid) {
          this.$v.form.$touch();
          return;
        }
        let userToAdd = { 
          login: this.form.login,
          password: this.form.password,
          name: this.form.name,
          role_id: this.form.user_role.id,
          user_filials_ids: this.userFilialsIds 
        };

        this.$store.dispatch('users/addUser', userToAdd)
            .then(() => {
                this.form.login = null;
                this.form.password = null;
                this.form.name = null;
                this.form.user_role = null;
                this.form.user_filials = null;

                this.okoModal_response({ type: 'success', 
                                          message: 'Пользователь успешно добавлен'});
            })
            .catch((err) => {
              this.okoModal_response({type:'error', message: err});  
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
