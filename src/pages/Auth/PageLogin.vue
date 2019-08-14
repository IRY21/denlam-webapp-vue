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
                        v-model="form.login"
                        @blur="$v.form.login.$touch()"
                    >
                </label>
                <oko-error
                    class="Login-Error"
                    v-show="$v.form.login.$error"
                >
                    Поле логин обязательно
                </oko-error>
            </div>
            <div class="Form-Row">
                <label class="Input">
                    <input 
                        type="password" 
                        class="Input-Control" 
                        placeholder="Пароль"
                        value=""
                        v-model="form.password"
                        @blur="$v.form.password.$touch()"
                    >
                </label>
                <oko-error
                    class="Login-Error"
                    v-show="$v.form.password.$error"
                >
                    Поле пароль обязательно
                </oko-error>
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
                <oko-error 
                    class="Login-Error"
                >
                    Неверный логин или пароль.
                </oko-error>
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
                login: null,
                password: null
            },
            formServerInvalid: false,
            error: ''
        }
    },
    validations: {
        form: {
            login: {
                required
            },
            password: {
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
            this.$v.form.$touch();
            this.$store.dispatch('auth/login', this.form)
                .then(() => this.$router.push('/projects'))
                .catch(() => {
                    this.formServerInvalid = true;
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
