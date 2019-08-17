
<template>
    <div 
        v-if="pageLoader_isDataLoaded"
        class="MainSection-Row"
    >
        <div class="Flex Flex_wrap CardsWrap">

            <SettingsCard 
                v-for="user of users"
                :key="user.id"
                :user="user"
                :users="users"
                :filials="filials"
                :roles="roles"
            />

            <SettingsAddCard 
                :filials="filials"
                :roles="roles"
            />
            
        </div>
    </div>
    <div v-else>
        <AppSpinner />
    </div>
</template>

<script>
    import pageLoader from "@/_mixins/pageLoader"
    import SettingsCard from '@/components/pages/SettingsUsers/SettingsCard';
    import SettingsAddCard from '@/components/pages/SettingsUsers/SettingsAddCard';
    import { mapActions, mapState } from 'vuex';

    export default {
        mixins: [pageLoader],
        components: {
            SettingsCard,
            SettingsAddCard
        },
        created() {
            Promise.all([this.fetchUsers(), this.fetchFilials(), this.fetchRoles()])
                .then(() => this.pageLoader_resolveData())
        },
        computed: {
            ...mapState({
                users: state => state.users.items,
                filials: state => state.filials.items,
                roles: state => state.roles.items
            })
        },
        methods: {
            ...mapActions('users', ['fetchUsers']),
            ...mapActions('filials', ['fetchFilials']),
            ...mapActions('roles', ['fetchRoles'])
        }
  }
</script>

<style scoped>
.SettingCard {
  width: calc(33.33% - 20px * 2/3);
  padding: 15px 23px 17px;
  margin-bottom: 20px;
  margin-right: 20px; }
    
</style>
