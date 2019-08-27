<template>
  <header class="Header">

    <div class="Container">
        <div class="Header-Body">

            <div class="Header-Logo">
                <a href="/" class="Logo">
                    <img class="Logo-Image" src="@/img/logo.svg" alt="">
                </a>
            </div>

            <div 
                class="Header-Right"
            >
                <div 
                    class="Logout"
                >
                    <p 
                        v-if="isProfileLoaded && isRolesLoaded"
                        class="Logout-Username"
                    >
                        {{ profile.name }}<br>
                        <span class="Logout-Username-Post">
                            {{ userRoleName }}
                        </span>
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
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        computed: {
            ...mapGetters({
                profile: 'user/getProfile',
                roles: 'roles/getRoles',
                isProfileLoaded: 'user/isProfileLoaded',
                isRolesLoaded: 'roles/isRolesLoaded'
            }),
            userRoleName() {
                const self = this;
                return this.roles.find(role => {
                    return role.id === self.profile.role_id
                }).name;
            }            
        },
        created() {
            Promise.all([this.fetchRoles()])
        },
        methods: {
            ...mapActions('roles', ['fetchRoles']),
            logout() {
                this.$store.dispatch('auth/logout');
            }
        }
    }
</script>

<style>

</style>
