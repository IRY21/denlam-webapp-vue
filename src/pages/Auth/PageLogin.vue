<template>
    <div class="Login Login_error">
        <div class="Login-Logo Logo">
            <img class="Logo-Image" src="/img/logo.svg" alt="">
        </div>
        <form class="Login-Form Form">
            <div class="Form-Row">
                <OkoInput
                    placeholder="Логин"
                    type="text" 
                    v-model="form.login"
                    @blur="$v.form.login.$touch()"
                />
                <OkoError
                    class="Login-Error"
                    v-show="$v.form.login.$error"
                >
                    Поле логин обязательно
                </OkoError>
            </div>
            <div class="Form-Row">
                <OkoInput
                    placeholder="Пароль"
                    type="password" 
                    v-model="form.password"
                    @blur="$v.form.password.$touch()"
                />
                <OkoError
                    class="Login-Error"
                    v-show="$v.form.password.$error"
                >
                    Поле пароль обязательно
                </OkoError>
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
                <OkoError 
                    class="Login-Error"
                >
                    Неверный логин или пароль.
                </OkoError>
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
        loading() { return this.$store.getters['shared/loading'] }
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
