<template>
  <header class="Header">

    <div class="Container">
        <div class="Header-Body">

            <div class="Header-Logo">
                <a href="/" class="Logo">
                    <img class="Logo-Image" src="@/img/logo.svg" alt="">
                </a>
            </div>

            <div class="Header-Right">
                <div class="Logout">
                    <p class="Logout-Username">
                        Иван Иванович<br>
                        <span class="Logout-Username-Post">Администратор</span>
                    </p>
                    <button 
                        class="Btn Logout-Btn" 
                        @click.prevent="logout"
                    >
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    </div>

</header>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');
            }
        }
    }
</script>

<style>

</style>
