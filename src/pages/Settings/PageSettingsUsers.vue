
<template>
    <div class="MainSection-Row">
        <div class="Flex Flex_wrap CardsWrap">
            <form class="Card Card_bgWhite Card_bd Card_bd_color_darkBlue SettingCard">
                <div class="Form">
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Логин</span>
                            <input 
                                type="text"
                                class="Input-Control"
                                value=""
                            >
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Пароль</span>
                            <input 
                                type="password" 
                                class="Input-Control" 
                                placeholder="Введите для изменения"
                                value=""
                            >
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Имя пользователя</span>
                            <input 
                                type="text" 
                                class="Input-Control"
                                value="Иван Иванов"
                            >
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Полномочия</span>
                            <select 
                                class="Select-Control"
                            >
                                <option 
                                    value="1" 
                                    selected=""
                                >
                                    Администратор
                                </option>
                                <option 
                                    value="2" 
                                >
                                    Бухгалтерия
                                </option>
                                <option 
                                    value="3" 
                                >
                                    Юрист
                                </option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Филиал</span>
                            <select class="Select-Control">
                                <option value="1" selected="">Все филиалы</option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <div class="Flex">
                            <button class="Btn Btn_theme_green Btn_size_m">Сохранить</button>

                            <div class="Btn Btn_theme_delete">Удалить</div>
                        </div>
                    </div>
                </div>
            </form>
            <form class="Card Card_bgWhite Card_bd Card_bd_color_darkBlue SettingCard">
                <div class="Form">
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Логин</span>
                            <input 
                                type="text"
                                class="Input-Control"
                                value=""
                            >
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Пароль</span>
                            <input 
                                type="password" 
                                class="Input-Control" 
                                placeholder="Введите для изменения"
                                value=""
                            >
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Имя пользователя</span>
                            <input 
                                type="text" 
                                class="Input-Control"
                                value="Иван Иванов"
                            >
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Полномочия</span>
                            <select 
                                class="Select-Control"
                            >
                                <option 
                                    value="1" 
                                    selected=""
                                >
                                    Администратор
                                </option>
                                <option 
                                    value="2" 
                                >
                                    Бухгалтерия
                                </option>
                                <option 
                                    value="3" 
                                >
                                    Юрист
                                </option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Филиал</span>
                            <select class="Select-Control">
                                <option value="1" selected="">Все филиалы</option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <div class="Flex">
                            <button class="Btn Btn_theme_green Btn_size_m">Сохранить</button>

                            <div class="Btn Btn_theme_delete">Удалить</div>
                        </div>
                    </div>
                </div>
            </form>

            <form class="Card Card_bgLightGreen Card_bd Card_bd_color_green SettingCard">
                <div class="Form addnewuserform">
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Логин</span>
                            <input 
                                type="text" 
                                class="Input-Control"
                                value=""
                                v-model="formAdd.login"
                                @blur="$v.formAdd.login.$touch()"
                            >
                        </label>
                        <oko-error
                            v-show="$v.formAdd.login.$error"
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
                                value=""
                                v-model="formAdd.password"
                                @blur="$v.formAdd.password.$touch()"
                            >
                        </label>
                        <oko-error
                            v-show="$v.formAdd.password.$error"
                        >
                            Поле пароль обязательно
                        </oko-error>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Имя пользователя</span>
                            <input 
                                type="text" 
                                class="Input-Control"
                                value=""
                                v-model="formAdd.name"
                                @blur="$v.formAdd.name.$touch()"
                            >
                        </label>
                        <oko-error
                            v-show="$v.formAdd.name.$error"
                        >
                            Поле имя пользователя обязательно
                        </oko-error>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Полномочия</span>
                            <select 
                              class="Select-Control"
                              v-model="formAdd.role_id"
                              @blur="$v.formAdd.role_id.$touch()"
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
                        <oko-error
                            v-show="$v.formAdd.role_id.$error"
                        >
                            Поле полномочия обязательно
                        </oko-error>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Филиал</span>
                            <select 
                              class="Select-Control"
                              v-model="formAdd.filials_id"
                              @blur="$v.formAdd.filials_id.$touch()"
                            >
                                <option ></option>
                                <option value="1">Все филиалы</option>
                            </select>
                        </label>
                        <oko-error
                            v-show="$v.formAdd.filials_id.$error"
                        >
                            Поле филиал обязательно
                        </oko-error>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <button class="Btn Btn_theme_green Btn_size_m">Добавить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        formAdd: {
          login: null,
          password: null,
          name: null,
          role_id: null,
          filials_id: null
        }
      }
    },
    validations: {
      formAdd: {
        login: { required },
        password: { required },
        name: { required },
        role_id: { required },
        filials_id: { required }
      }
    }
  }
</script>

<style scoped>
.SettingCard {
  width: calc(33.33% - 20px * 2/3);
  padding: 15px 23px 17px;
  margin-bottom: 20px;
  margin-right: 20px; }
  .SettingCard:nth-of-type(3n) {
    margin-right: 0; }
  .SettingCard .Btn_theme_delete {
    margin-left: 28px; }
    
</style>
