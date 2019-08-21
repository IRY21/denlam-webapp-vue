<template>
    <div 
        v-if="pageLoader_isDataLoaded"
        class="MainSection-Row"
    >
        <div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
            <div class="ProductWrap">
                <SettingsFilialsCard 
                    v-for="filial of filials"
                    :key="filial.id"
                    :filial="filial"
                />
            </div>
        </div>
        <div class="MainSection-Row">
            <SettingsFilialsAddCard />
        </div>
    </div>
    <div v-else>
        <AppSpinner />
    </div>
</template>

<script>
import { SettingsFilialsCard, SettingsFilialsAddCard } from '@/components/pages/Settings/SettingsFilials';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        SettingsFilialsCard,
        SettingsFilialsAddCard
    },
    created() {
        Promise.all([this.fetchFilials()])
            .then(() => this.pageLoader_resolveData())
    },
    computed: {
        ...mapGetters({
            filials: 'filials/getFilials'
        })
    },
    methods: {
        ...mapActions('filials', ['fetchFilials']),
    }
}
</script>

<style scoped>
    
</style>