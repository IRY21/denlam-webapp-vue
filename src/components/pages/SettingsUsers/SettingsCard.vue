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
            <oko-error
                v-show="$v.form.login.$error"
            >
                Поле логин обязательно
            </oko-error>
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
            <oko-error
                v-show="$v.form.name.$error"
            >
                Поле имя пользователя обязательно
            </oko-error>
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
            <oko-error
                v-show="$v.form.role_id.$error"
            >
                Поле полномочия обязательно
            </oko-error>
        </div>
        <div class="Form-Row">
            <label class="Select Select_theme_arrow">
                <span class="Label">Филиал</span>
                <select 
                  class="Select-Control"
                  v-model="form.filials_id"
                >
                  <option 
                    v-for="filial of filials"
                    :value="filial.id"
                    :key="filial.id"
                    :selected="currentOption(filial.id, form.filials_id)"
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
                  @click.prevent="deleteUser"
                >
                  Удалить
                </div>
            </div>
        </div>
    </div>
  </form>

  
</template>

<script>
  import { required } from 'vuelidate/lib/validators';

  export default {
    props: {
      user: {
        required,
        type: Object
      },
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
          user_id: this.user.id,
          login: this.user.login,
          password: this.user.password,
          name: this.user.name,
          role_id: this.user.role_id,
          filials_id: this.user.users_filials ? this.user.users_filials.filial_id : null
        },
        loading: false
      }
    },
    validations: {
      form: {
        login: { required },
        name: { required },
        role_id: { required }
      }
    },
    computed: {

    },
    methods: {
      updateUser() {
        this.loading = true;
        this.$store.dispatch('users/updateUser', this.form.user_id)
          .then(() => {
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          })
      },
      deleteUser() {
        this.$store.dispatch('users/deleteUser', this.form);
      },
      currentOption(optionId, formOptionId) {
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
</style>
