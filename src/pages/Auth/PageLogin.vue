<template>
    <div class="Login Login_error">
        <div class="Login-Logo Logo">
            <img class="Logo-Image" src="/img/logo.svg" alt="">
        </div>
        <form class="Login-Form Form">
            <div class="Form-Row">
                <label class="Input">
                    <input 
                        type="text" 
                        class="Input-Control" 
                        placeholder="Логин"
                        value=""
                        v-model="form.user_login"
                        @blur="$v.form.user_login.$touch()"
                    >
                </label>
                <div 
                    class="Login-Error Error"
                    v-show="$v.form.user_login.$error"
                >
                    <p class="Error-Text Error-Text_icon">Поле логин обязательно</p>
                </div>
            </div>
            <div class="Form-Row">
                <label class="Input">
                    <input 
                        type="password" 
                        class="Input-Control" 
                        placeholder="Пароль"
                        value=""
                        v-model="form.user_password"
                        @blur="$v.form.user_password.$touch()"
                    >
                </label>
                <div 
                    class="Login-Error Error"
                    v-show="$v.form.user_password.$error"
                >
                    <p class="Error-Text Error-Text_icon">Поле пароль обязательно</p>
                </div>
            </div>
            <div class="Form-Row Form-Row_btnWrap">
                <button 
                    class="Btn Btn_theme_blue Form-Btn"
                    :class="{'Btn_theme_wait': loading}"
                    :disabled="isFormInvalid"
                    @click.prevent="login"
                >
                    Войти
                </button>
            </div>
            <div v-show="formServerInvalid" class="Form-Row">
                <div class="Login-Error Error">
                    <p class="Error-Text Error-Text_icon">Неверный логин или пароль.</p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            form: {
                user_login: null,
                user_password: null
            },
            formServerInvalid: false
        }
    },
    validations: {
        form: {
            user_login: {
                required
            },
            user_password: {
                required
            }
      }
    },
    computed: {
        isFormInvalid() {
            return this.$v.form.$invalid
        },
        loading() {
            return this.$store.getters['shared/loading']
        }
    },
    methods: {
        login() {
            this.$v.form.$touch()
            this.$store.dispatch('auth/login', this.form)
            .then(() => this.$router.push('/projects'))
            .catch(() => {
                this.formServerInvalid = true
            })
        }
    }
}
</script>

<style scoped>
.Login {
    width: 335px;
}
</style>
